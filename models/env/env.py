"""Static cozy low-poly environment assets -> .glb (Y-up, origin bottom-center, front +Z, 1 material)."""
import io, json, math, os, struct, sys
import numpy as np
from PIL import Image
import gen
from gen import rot, basis_from_y, lathe, ellipsoid, torus, sphere_profile, smooth, hexc

X, Y, Z = (1, 0, 0), (0, 1, 0), (0, 0, 1)

COLORS = {
    # art bible
    "cream": "#F4E9D6", "wood": "#C9915B", "sky": "#BFE3FF", "mint": "#86D6B4", "pink": "#F6A8C6",
    "honey": "#FFD36E", "indigo": "#8E8FE6",
    # supporting
    "cream_dark": "#E3D3B8", "wood_dark": "#9E6A3D", "wood_light": "#DDAA72", "pink_dark": "#E58AAE", "indigo_dark": "#7374CF",
    "indigo_light": "#A9AAF0", "honey_dark": "#F2B544", "glow": "#FFF1C2", "water": "#9DD8F2", "water_light": "#CDEFFF",
    "stone": "#EEE3CF", "stone_dark": "#D6C7AC", "leaf": "#7FCF7C", "leaf_dark": "#62B66C", "leaf_light": "#A3E08F",
    "trunk": "#A0714A", "trunk_dark": "#835A38", "soil": "#8C6449", "teal_wall": "#8FD3C1", "teal_dark": "#6BBBA7",
    "roof_honey": "#F7B45A", "roof_honey_dark": "#E39A3F", "lamp": "#3E8C8F", "lamp_dark": "#2F7174",
    "flower_pink": "#FF9EC4", "flower_yellow": "#FFE07A", "flower_lilac": "#C7A8F0", "flower_white": "#FFFFFF",
    "bird": "#5D5FA8", "beak": "#FFB347", "charcoal": "#4E4860", "book_red": "#F28B82", "book_blue": "#8EC5FF",
    "book_yellow": "#FFD36E", "book_green": "#86D6B4", "leaf_orange": "#F4A259", "white": "#FFFFFF", "grass": "#93D67E",
}
GLOW = {"glow", "honey_glow"}
COLORS["honey_glow"] = "#FFD978"


class Pal(gen.Palette):
    def png_emissive(self):
        img = Image.new("RGB", (gen.TEX, gen.TEX), (0, 0, 0))
        px = img.load()
        for n in self.names:
            if n in GLOW:
                x0, y0, w, h = self.rect(n)
                c = tuple(int(v * 0.55) for v in self.colors[n])
                for y in range(y0, y0 + h):
                    for x in range(x0, x0 + w):
                        px[x, y] = c
        b = io.BytesIO(); img.save(b, "PNG", optimize=True)
        return b.getvalue()


PAL = Pal({k: hexc(v) for k, v in COLORS.items()})
W0 = [("Root", 1)]


class EB(gen.Builder):
    flat = False

    def add(self, P, F, colors, wfun=None, ref=None, flip_check=True):
        if self.flat:
            P = np.asarray(P, float); F = np.asarray(F)
            cols = [colors[i] for i in F.reshape(-1)]
            P = P[F.reshape(-1)]
            F = np.arange(len(P)).reshape(-1, 3)
            if ref is not None:
                ref = np.asarray(ref(P), float)
            colors = cols
            # unweld trick: jitter-free unique keys by adding tiny face id offset is not needed; weld disabled below
            return self._add_flat(P, F, colors, ref)
        return super().add(P, F, colors, W0, ref=ref, flip_check=flip_check)

    def _add_flat(self, P, F, colors, ref):
        a, b, c = P[F[:, 0]], P[F[:, 1]], P[F[:, 2]]
        fn = np.cross(b - a, c - a)
        ar = np.linalg.norm(fn, axis=1)
        keep = ar > 1e-12
        F, fn, ar = F[keep], fn[keep], ar[keep]
        fn = fn / ar[:, None]
        cen = (P[F[:, 0]] + P[F[:, 1]] + P[F[:, 2]]) / 3
        Rc = cen - (P.mean(0) if ref is None else (ref[F[:, 0]] + ref[F[:, 1]] + ref[F[:, 2]]) / 3)
        if np.sum(np.einsum("ij,ij->i", fn, Rc)) < 0:
            F = F[:, ::-1]; fn = -fn
        N = np.tile([0.0, 1.0, 0.0], (len(P), 1))
        for k in range(3):
            N[F[:, k]] = fn
        self.P.append(P); self.N.append(N)
        self.UV.append(np.array([self.pal.uv(c) for c in colors]))
        self.J.append(np.zeros((len(P), 4), np.uint8)); self.W.append(np.tile([1, 0, 0, 0], (len(P), 1)).astype(np.float32))
        self.F.append(F + self.nv); self.nv += len(P)


class flat:
    def __init__(self, B): self.B = B
    def __enter__(self): self.B.flat = True
    def __exit__(self, *a): self.B.flat = False


# ------------------------------------------------------------ primitives
def rbox(B, center, size, col, M=None, power=0.18, segs=24, rings=16):
    ellipsoid(B, center, np.array(size, float) / 2, col, W0, M=M, segs=segs, rings=rings, power=power)


def cyl(B, base, h, r, col, M=None, segs=24, r_top=None, cap=True, bevel=0.0):
    rt = r if r_top is None else r_top
    prof = []
    if cap: prof.append((0, 0, col))
    if bevel > 0:
        prof += [(0, r - bevel, col), (bevel * 0.3, r - bevel * 0.3, col), (bevel, r, col),
                 (h - bevel, rt, col), (h - bevel * 0.3, rt - bevel * 0.3, col), (h, rt - bevel, col)]
    else:
        prof += [(0, r, col), (h, rt, col)]
    if cap: prof.append((h, 0, col))
    lathe(B, prof, base, W0, M=M, segs=segs)


def prism(B, poly, depth, center, col, M=None, side_col=None):
    """convex polygon in local XY, extruded along local Z, always flat-shaded."""
    M = np.eye(3) if M is None else np.asarray(M, float)
    poly = np.asarray(poly, float)
    n = len(poly)
    front = np.c_[poly, np.full(n, depth / 2)]
    back = np.c_[poly, np.full(n, -depth / 2)]
    P = np.vstack([front, back]) @ M.T + np.asarray(center, float)
    F = [(0, i, i + 1) for i in range(1, n - 1)] + [(n, n + i + 1, n + i) for i in range(1, n - 1)]
    cols = [col] * (2 * n)
    with flat(B):
        B.add(P, F, cols)
        sc = side_col or col
        S = []
        SP = []
        for i in range(n):
            j = (i + 1) % n
            a, b, c, d = front[i], front[j], back[i], back[j]
            base = len(SP)
            SP += [a, b, c, d]
            S += [(base, base + 2, base + 1), (base + 1, base + 2, base + 3)]
        SP = np.array(SP) @ M.T + np.asarray(center, float)
        cen = np.asarray(center, float)
        B.add(SP, S, [sc] * len(SP), ref=lambda PP, c=cen: np.tile(c, (len(PP), 1)))


def arch_poly(w, h, segs=14):
    """rectangle w x h with semicircle top (total height h), bottom at y=0."""
    r = w / 2
    pts = [(-r, 0), (r, 0)]
    for k in range(segs + 1):
        a = math.pi * k / segs
        pts.append((r * math.cos(a), h - r + r * math.sin(a)))
    return pts


def disc(B, center, r, t, col, normal=(0, 0, 1), segs=24):
    d = np.asarray(normal, float)
    cyl(B, np.asarray(center, float) - d / np.linalg.norm(d) * t / 2, t, r, col, M=basis_from_y(d), segs=segs)


def porthole(B, center, r, normal=(0, 0, 1), frame="cream", glass="glow"):
    d = np.asarray(normal, float); d /= np.linalg.norm(d)
    torus(B, center, r, r * 0.22, frame, W0, M=basis_from_y(d), segs=28, tsegs=8)
    disc(B, center - d * 0.02, r * 0.95, 0.06, glass, d)
    # cross mullions
    M = basis_from_y(d)
    for ax in (M[:, 0], M[:, 2]):
        rbox(B, center + d * 0.02, np.abs(ax) * (2 * r) + np.abs(d) * 0.05 + (1 - np.abs(ax) - np.abs(d)) * 0.06, frame, power=0.3, segs=10, rings=6)


def flower(B, pos, col, s=1.0):
    pos = np.asarray(pos, float)
    cyl(B, pos - np.array([0, 0.12 * s, 0]), 0.12 * s, 0.012 * s, "leaf_dark", segs=6)
    for k in range(5):
        a = 2 * math.pi * k / 5
        ellipsoid(B, pos + np.array([math.cos(a), 0.0, math.sin(a)]) * 0.045 * s, (0.04 * s, 0.02 * s, 0.04 * s), col, W0, segs=10, rings=6)
    ellipsoid(B, pos + np.array([0, 0.012 * s, 0]), (0.028 * s,) * 3, "honey" if col != "flower_yellow" else "flower_white", W0, segs=8, rings=5)


def blob_cluster(B, centers, col_cycle, segs=12, rings=8, facet=True):
    ctx = flat(B) if facet else None
    if ctx: ctx.__enter__()
    for i, (c, r) in enumerate(centers):
        rr = r if np.ndim(r) else (r, r * 0.9, r)
        ellipsoid(B, c, rr, col_cycle[i % len(col_cycle)], W0, segs=segs, rings=rings)
    if ctx: ctx.__exit__()


def gable_roof(B, length, width, height, base_y, col, ridge_col, along="x", overhang=0.35, thick=0.24):
    """two slabs; ridge along X (side gables) or Z (front gable)."""
    half = width / 2 + overhang
    slope = math.atan2(height, width / 2)
    L = math.hypot(half, height * half / (width / 2))
    for s in (1, -1):
        # slab center
        off = half / 2
        if along == "x":
            c = np.array([0, base_y + height - (height * off / (width / 2)) + thick * 0.35, s * off])
            M = rot(X, s * math.degrees(slope))
            rbox(B, c, (length + 2 * overhang * 0.6, thick, L), col, M=M, power=0.14, segs=28, rings=18)
        else:
            c = np.array([s * off, base_y + height - (height * off / (width / 2)) + thick * 0.35, 0])
            M = rot(Z, -s * math.degrees(slope))
            rbox(B, c, (L, thick, length + 2 * overhang * 0.6), col, M=M, power=0.14, segs=28, rings=18)
    ax = np.array([1.0, 0, 0]) if along == "x" else np.array([0, 0, 1.0])
    ll = length + 2 * overhang * 0.6 + 0.1
    cyl(B, np.array([0, base_y + height + thick * 0.45, 0]) - ax * ll / 2, ll, 0.17, ridge_col, M=basis_from_y(ax), segs=20)
    for s in (1, -1):
        ellipsoid(B, np.array([0, base_y + height + thick * 0.45, 0]) + s * ax * ll / 2, (0.2, 0.2, 0.2), ridge_col, W0, segs=14, rings=10)


def gable_wall(B, width, height, base_y, depth_pos, col, along="x", thick=0.3):
    """triangle filling the gable end(s)."""
    tri = [(-width / 2, 0), (width / 2, 0), (0, height)]
    if along == "x":
        for s in (1, -1):
            prism(B, tri, thick, (s * depth_pos, base_y, 0), col, M=rot(Y, 90))
    else:
        for s in (1, -1):
            prism(B, tri, thick, (0, base_y, s * depth_pos), col)


# ------------------------------------------------------------ assets
def academy(B):
    Wd, Ht, Dp = 8.6, 3.9, 4.8
    rbox(B, (0, 0.15, 0), (Wd + 0.6, 0.3, Dp + 0.6), "cream_dark", power=0.25)
    rbox(B, (0, 0.3 + Ht / 2, 0), (Wd, Ht, Dp), "indigo", power=0.12, segs=32, rings=24)
    for y in (0.45, 2.15, 0.3 + Ht - 0.1):
        rbox(B, (0, y, 0), (Wd + 0.34, 0.24, Dp + 0.34), "cream", power=0.2, segs=40, rings=12)
    for sx in (1, -1):
        for sz in (1, -1):
            cyl(B, (sx * Wd / 2, 0.3, sz * Dp / 2), Ht, 0.22, "indigo_light", segs=16)
    zf = Dp / 2
    # door
    prism(B, arch_poly(2.1, 2.75), 0.22, (0, 0.3, zf + 0.04), "cream")
    prism(B, arch_poly(1.7, 2.5), 0.22, (0, 0.3, zf + 0.1), "wood")
    rbox(B, (0, 1.55, zf + 0.22), (0.05, 2.4, 0.04), "wood_dark", power=0.4, segs=8, rings=6)
    for sx in (1, -1):
        ellipsoid(B, (0.17 * sx, 1.4, zf + 0.25), (0.06, 0.06, 0.05), "honey_dark", W0, segs=10, rings=6)
        for yy in (0.9, 1.9):
            rbox(B, (0.47 * sx, yy, zf + 0.22), (0.5, 0.05, 0.04), "wood_dark", power=0.4, segs=8, rings=6)
    # clock medallion
    cc = np.array([0, 3.35, zf + 0.06])
    disc(B, cc, 0.42, 0.14, "cream", segs=32)
    torus(B, cc + np.array([0, 0, 0.07]), 0.42, 0.05, "honey_dark", W0, M=basis_from_y((0, 0, 1)), segs=32, tsegs=6)
    disc(B, cc + np.array([0, 0, 0.08]), 0.34, 0.02, "white", segs=28)
    rbox(B, cc + np.array([0, 0.1, 0.11]), (0.05, 0.22, 0.03), "charcoal", power=0.4, segs=8, rings=6)
    rbox(B, cc + np.array([0.08, 0.0, 0.11]), (0.17, 0.05, 0.03), "charcoal", power=0.4, segs=8, rings=6)
    # windows
    for x in (-3.3, -2.0, 2.0, 3.3):
        porthole(B, (x, 1.35, zf + 0.05), 0.42)
    for x in (-3.3, -2.0, 2.0, 3.3):
        porthole(B, (x, 3.1, zf + 0.05), 0.42)
    for sx in (1, -1):
        for y in (1.35, 3.1):
            for z in (-1.0, 1.0):
                porthole(B, (sx * (Wd / 2 + 0.05), y, z), 0.38, normal=(sx, 0, 0))
    # roof (ridge along X)
    top = 0.3 + Ht
    gable_wall(B, Dp, 1.45, top, Wd / 2 - 0.1, "indigo", along="x")
    gable_roof(B, Wd, Dp, 1.45, top, "pink", "pink_dark", along="x")
    # bell cupola
    cb = np.array([0, top + 1.45, 0])
    rbox(B, cb + np.array([0, 0.45, 0]), (0.75, 0.8, 0.75), "cream", power=0.25)
    prism(B, arch_poly(0.42, 0.55), 0.8, cb + np.array([0, 0.22, 0]), "indigo_dark")
    ellipsoid(B, cb + np.array([0, 0.5, 0]), (0.15, 0.18, 0.15), "honey", W0, segs=14, rings=10)
    lathe(B, [(0, 0, "pink"), (0, 0.6, "pink"), (0.08, 0.6, "pink"), (0.7, 0.0, "pink")], cb + np.array([0, 0.85, 0]), W0, segs=4,
          M=rot(Y, 45))
    ellipsoid(B, cb + np.array([0, 1.6, 0]), (0.08,) * 3, "honey", W0, segs=10, rings=6)
    # steps + planters
    rbox(B, (0, 0.12, zf + 0.75), (2.6, 0.24, 0.9), "cream", power=0.25)
    rbox(B, (0, 0.33, zf + 0.45), (2.4, 0.2, 0.5), "cream", power=0.25)
    for sx in (1, -1):
        c = np.array([sx * 1.9, 0, zf + 0.6])
        rbox(B, c + np.array([0, 0.25, 0]), (0.9, 0.5, 0.5), "wood", power=0.25)
        rbox(B, c + np.array([0, 0.49, 0]), (0.78, 0.06, 0.38), "soil", power=0.3, segs=12, rings=6)
        for i, col in enumerate(["flower_pink", "flower_yellow", "flower_lilac", "flower_white", "flower_pink"]):
            flower(B, c + np.array([-0.3 + 0.15 * i, 0.68 + 0.04 * (i % 2), 0.05 * ((-1) ** i)]), col, 1.3)
        blob_cluster(B, [(c + np.array([-0.2, 0.55, 0]), 0.16), (c + np.array([0.2, 0.55, 0]), 0.15)], ["leaf"], segs=8, rings=6)


def library(B):
    Wd, Ht, Dp = 7.0, 4.0, 6.0
    rbox(B, (0, 0.15, 0), (Wd + 0.6, 0.3, Dp + 0.6), "stone_dark", power=0.25)
    rbox(B, (0, 0.3 + Ht / 2, 0), (Wd, Ht, Dp), "teal_wall", power=0.12, segs=32, rings=24)
    for y in (0.45, 0.3 + Ht - 0.1):
        rbox(B, (0, y, 0), (Wd + 0.16, 0.18, Dp + 0.16), "cream", power=0.3, segs=28, rings=10)
    for sx in (1, -1):
        for sz in (1, -1):
            rbox(B, (sx * Wd / 2, 0.3 + Ht / 2, sz * Dp / 2), (0.45, Ht, 0.45), "cream", power=0.25, segs=12, rings=16)
    zf = Dp / 2
    # entrance
    prism(B, arch_poly(2.3, 2.9), 0.24, (0, 0.3, zf + 0.04), "cream")
    prism(B, arch_poly(1.8, 2.6), 0.24, (0, 0.3, zf + 0.1), "wood_dark")
    prism(B, arch_poly(1.5, 2.4), 0.24, (0, 0.3, zf + 0.14), "wood")
    ellipsoid(B, (0.45, 1.4, zf + 0.3), (0.07, 0.07, 0.05), "honey_dark", W0, segs=10, rings=6)
    # triangular awning
    prism(B, [(-1.6, 0), (1.6, 0), (0, 0.75)], 1.0, (0, 3.15, zf + 0.45), "roof_honey", side_col="roof_honey_dark")
    for sx in (1, -1):
        cyl(B, (sx * 1.4, 0.3, zf + 0.85), 2.85, 0.08, "cream", segs=12)
    # books emblem (stack, no text) on the awning gable front
    books = [("book_red", 0.9, 0.16), ("book_blue", 0.8, 0.15), ("book_yellow", 0.95, 0.15)]
    y = 3.18
    for i, (col, w, h) in enumerate(books):
        rbox(B, (0.05 * (-1) ** i, y + h / 2, zf + 0.98), (w * 0.55, h, 0.08), col, power=0.3, segs=12, rings=8)
        y += h
    # tall arched windows
    for x in (-2.4, 2.4):
        for yb in (0.8, 2.6):
            prism(B, arch_poly(1.0, 1.35), 0.14, (x, yb, zf + 0.04), "cream")
            prism(B, arch_poly(0.78, 1.18), 0.14, (x, yb + 0.08, zf + 0.08), "glow")
            rbox(B, (x, yb + 0.67, zf + 0.16), (0.05, 1.1, 0.04), "cream", power=0.4, segs=8, rings=6)
    for sx in (1, -1):
        for z in (-1.6, 0.0, 1.6):
            for yb in (0.8, 2.6):
                prism(B, arch_poly(0.9, 1.25), 0.14, (sx * (Wd / 2 + 0.04), yb, z), "cream", M=rot(Y, 90))
                prism(B, arch_poly(0.7, 1.08), 0.14, (sx * (Wd / 2 + 0.08), yb + 0.08, z), "glow", M=rot(Y, 90))
    # roof: front gable (ridge along Z)
    top = 0.3 + Ht
    gable_wall(B, Wd, 1.9, top, Dp / 2 - 0.1, "teal_wall", along="z")
    gable_roof(B, Dp, Wd, 1.9, top, "roof_honey", "roof_honey_dark", along="z")
    # rose window
    rc = np.array([0, top + 0.75, zf + 0.06])
    torus(B, rc, 0.55, 0.1, "cream", W0, M=basis_from_y((0, 0, 1)), segs=32, tsegs=8)
    disc(B, rc, 0.53, 0.08, "glow", segs=28)
    for k in range(4):
        rbox(B, rc + np.array([0, 0, 0.05]), (1.06, 0.05, 0.04), "cream", M=rot(Z, 45 * k), power=0.4, segs=8, rings=6)
    disc(B, rc + np.array([0, 0, 0.06]), 0.14, 0.04, "cream", segs=16)
    # ivy on front-left corner
    rng = np.random.default_rng(3)
    cx, cz = -Wd / 2 - 0.05, zf + 0.05
    leaves = []
    for k in range(38):
        t = rng.random()
        y = 0.4 + t ** 0.8 * 3.6
        side = rng.random() < 0.5
        off = rng.random() * (1.3 - 0.9 * t)
        p = np.array([cx + (off if side else 0.0), y, cz - (0.0 if side else off)])
        p += np.array([0.08 if not side else 0, 0, 0.08 if side else 0])
        leaves.append((p, (0.17, 0.12, 0.17)))
    blob_cluster(B, leaves, ["leaf", "leaf_dark", "leaf_light"], segs=7, rings=5)
    # steps
    rbox(B, (0, 0.12, zf + 1.2), (2.8, 0.24, 1.0), "stone", power=0.25)


def fountain(B):
    lathe(B, [(0, 0, "stone"), (0, 1.55, "stone"), (0.08, 1.6, "stone"), (0.42, 1.6, "stone"), (0.52, 1.5, "stone"),
              (0.52, 1.3, "stone"), (0.2, 1.24, "stone_dark"), (0.2, 0.0, "stone_dark")], (0, 0, 0), W0, segs=48)
    torus(B, (0, 0.52, 0), 1.52, 0.11, "cream", W0, segs=48, tsegs=10)
    cyl(B, (0, 0.18, 0), 0.24, 1.3, "water", segs=48)
    # ripples
    for r in (0.75, 1.1):
        torus(B, (0, 0.43, 0), r, 0.018, "water_light", W0, segs=40, tsegs=5)
    # pillar
    lathe(B, [(0, 0.0, "stone"), (0.0, 0.34, "stone"), (0.2, 0.3, "stone"), (0.5, 0.2, "cream"), (0.85, 0.18, "cream"), (0.95, 0.26, "cream"),
              (1.0, 0.0, "cream")], (0, 0.42, 0), W0, segs=28)
    # upper bowl
    lathe(B, [(0, 0, "stone"), (0, 0.18, "stone"), (0.15, 0.55, "stone"), (0.28, 0.72, "stone"), (0.33, 0.7, "stone"), (0.33, 0.6, "stone"), (0.22, 0.55, "stone_dark"), (0.22, 0.0, "stone_dark")],
          (0, 1.3, 0), W0, segs=40)
    torus(B, (0, 1.63, 0), 0.71, 0.06, "cream", W0, segs=40, tsegs=8)
    cyl(B, (0, 1.5, 0), 0.1, 0.6, "water", segs=40)
    # top pillar + droplet
    cyl(B, (0, 1.58, 0), 0.14, 0.09, "cream", segs=16, r_top=0.07)
    prof = []
    for i in range(13):
        th = math.pi * i / 12
        prof.append((-math.cos(th) * 0.13, math.sin(th) * 0.13 * (1 if i <= 6 else 1), "water"))
    prof = [(t, r, c) for t, r, c in prof[:7]] + [(0.08, 0.1, "water"), (0.2, 0.05, "water"), (0.3, 0.0, "water")]
    lathe(B, prof, (0, 1.85, 0), W0, segs=20)
    # frozen splashes
    rng = np.random.default_rng(5)
    for k in range(10):
        a = 2 * math.pi * k / 10 + rng.random() * 0.3
        r = 0.72 + rng.random() * 0.12
        s = 0.05 + rng.random() * 0.04
        ellipsoid(B, (r * math.cos(a), 1.42 - 0.6 * (r - 0.7) - rng.random() * 0.5, r * math.sin(a)), (s, s * 1.4, s), "water_light", W0, segs=10, rings=6)
    for k in range(14):
        a = 2 * math.pi * k / 14
        ellipsoid(B, (0.45 * math.cos(a), 0.44, 0.45 * math.sin(a)), (0.06, 0.045, 0.06), "water_light", W0, segs=10, rings=6)


def tree(B):
    lathe(B, [(0, 0.0, "trunk"), (0, 0.36, "trunk"), (0.12, 0.27, "trunk"), (0.4, 0.21, "trunk"), (1.2, 0.17, "trunk"), (1.6, 0.14, "trunk"),
              (1.6, 0.0, "trunk")], (0, 0, 0), W0, segs=10)
    for a in (40, 160, 280):
        r = math.radians(a)
        ellipsoid(B, (0.25 * math.cos(r), 0.04, 0.25 * math.sin(r)), (0.13, 0.08, 0.13), "trunk_dark", W0, segs=8, rings=5)
    # branch stub
    cyl(B, (0.05, 1.0, 0), 0.5, 0.06, "trunk", M=basis_from_y((0.8, 1, 0.2)), segs=7, r_top=0.04)
    blob_cluster(B, [((0, 2.35, 0), (1.15, 1.0, 1.1)), ((0.55, 2.05, 0.35), (0.75, 0.65, 0.7)), ((-0.6, 2.1, -0.2), (0.7, 0.62, 0.7)),
                     ((0.1, 2.95, -0.1), (0.7, 0.55, 0.7)), ((-0.2, 1.95, 0.6), (0.6, 0.5, 0.55))],
                 ["leaf", "leaf_dark", "leaf_dark", "leaf_light", "leaf"], segs=12, rings=8)


def bush(B):
    rbox(B, (0, 0.06, 0), (1.15, 0.12, 0.85), "soil", power=0.4, segs=16, rings=8)
    blob_cluster(B, [((0, 0.42, 0), (0.48, 0.38, 0.4)), ((0.38, 0.33, 0.05), (0.33, 0.3, 0.3)), ((-0.36, 0.34, -0.05), (0.34, 0.3, 0.3)),
                     ((0.1, 0.6, -0.08), (0.3, 0.22, 0.28)), ((-0.12, 0.3, 0.25), (0.3, 0.24, 0.24))],
                 ["mint", "leaf", "leaf", "leaf_light", "mint"], segs=12, rings=8)
    for p, c in [((0.2, 0.72, 0.15), "flower_pink"), ((-0.25, 0.58, 0.28), "flower_yellow"), ((0.45, 0.5, 0.22), "flower_lilac"),
                 ((-0.45, 0.48, 0.15), "flower_white"), ((0.0, 0.62, 0.36), "flower_pink"), ((0.3, 0.6, -0.25), "flower_yellow")]:
        ellipsoid(B, p, (0.05, 0.05, 0.05), c, W0, segs=10, rings=6)
        ellipsoid(B, np.array(p) + np.array([0, 0.02, 0.02]), (0.02,) * 3, "honey", W0, segs=6, rings=4)


def bench(B):
    L = 1.6
    seat_y = 0.46
    # legs (end frames)
    for sx in (1, -1):
        x = sx * (L / 2 - 0.12)
        prism(B, [(-0.24, 0), (0.24, 0), (0.25, 0.08), (0.2, seat_y - 0.05), (-0.2, seat_y - 0.05), (-0.25, 0.08)], 0.12, (x, 0, 0.04),
              "stone_dark", M=rot(Y, 90))
        rbox(B, (x, seat_y + 0.25, -0.22), (0.12, 0.6, 0.12), "stone_dark", M=rot(X, -12), power=0.3, segs=12, rings=10)
        # armrest
        rbox(B, (x, seat_y + 0.2, 0.0), (0.12, 0.08, 0.5), "stone", power=0.3, segs=12, rings=8)
        cyl(B, (x, seat_y - 0.03, 0.17), 0.22, 0.04, "stone_dark", segs=10)
    # seat slats
    for i, z in enumerate((0.19, 0.06, -0.07, -0.2)):
        rbox(B, (0, seat_y + 0.02, z), (L, 0.06, 0.115), "wood" if i % 2 == 0 else "wood_light", power=0.2, segs=24, rings=10)
    # back slats
    for i, h in enumerate((0.2, 0.36, 0.52)):
        y = seat_y + h
        z = -0.25 - h * 0.21
        rbox(B, (0, y, z), (L, 0.11, 0.05), "wood" if i % 2 == 0 else "wood_light", M=rot(X, -12), power=0.2, segs=24, rings=10)
    # fallen leaf
    ellipsoid(B, (0.35, seat_y + 0.055, 0.05), (0.07, 0.008, 0.045), "leaf_orange", W0, M=rot(Y, 30), segs=10, rings=5)


def lamp(B):
    lathe(B, [(0, 0, "lamp_dark"), (0, 0.24, "lamp_dark"), (0.1, 0.24, "lamp_dark"), (0.18, 0.16, "lamp"), (0.28, 0.1, "lamp"),
              (2.45, 0.065, "lamp"), (2.45, 0.0, "lamp")], (0, 0, 0), W0, segs=16)
    torus(B, (0, 0.55, 0), 0.105, 0.03, "honey_dark", W0, segs=20, tsegs=6)
    torus(B, (0, 1.9, 0), 0.08, 0.025, "honey_dark", W0, segs=20, tsegs=6)
    # curved arm: quarter torus from post top towards +X, then down to lantern
    R = 0.32
    Mt = np.column_stack([[1.0, 0, 0], [0, 0, 1.0], [0, 1.0, 0]])  # torus axis -> Z, ring in XY
    torus(B, (R, 2.45, 0), R, 0.055, "lamp", W0, M=Mt, arc=(math.pi * 0.5, math.pi), segs=12, tsegs=8)
    tip = np.array([R, 2.45 + R, 0])
    cyl(B, tip, 0.12, 0.055, "lamp", M=basis_from_y((1, 0, 0)), segs=8)
    ellipsoid(B, tip + np.array([0.12, 0, 0]), (0.07,) * 3, "lamp", W0, segs=10, rings=6)
    # top finial on post bend
    ellipsoid(B, (0.0, 2.48, 0), (0.07,) * 3, "lamp", W0, segs=10, rings=6)
    # lantern hanging under arm tip
    lc = np.array([R + 0.12, 2.45 + R - 0.36, 0])
    cyl(B, lc + np.array([0, 0.24, 0]), 0.1, 0.02, "lamp_dark", segs=6)
    lathe(B, [(0, 0, "lamp"), (0, 0.2, "lamp"), (0.05, 0.2, "lamp"), (0.14, 0.03, "lamp"), (0.16, 0, "lamp")], lc + np.array([0, 0.12, 0]), W0, segs=16)
    ellipsoid(B, lc, (0.15, 0.15, 0.15), "honey_glow", W0, segs=20, rings=14)
    for k in range(4):
        a = math.pi / 4 + k * math.pi / 2
        torus(B, lc, 0.152, 0.012, "lamp", W0, M=rot(Y, math.degrees(a)) @ np.column_stack([[1.0, 0, 0], [0, 0, 1.0], [0, 1.0, 0]]),
              arc=(-math.pi / 2, math.pi / 2), segs=10, tsegs=5)
    lathe(B, [(0, 0, "lamp"), (0, 0.07, "lamp"), (-0.06, 0.03, "lamp"), (-0.08, 0, "lamp")], lc - np.array([0, 0.12, 0]), W0, segs=12)
    # bird on arm
    bp = np.array([R * 0.35, 2.45 + R * 0.94 + 0.07, 0])
    ellipsoid(B, bp, (0.08, 0.06, 0.055), "bird", W0, M=rot(Z, 12), segs=12, rings=8)
    ellipsoid(B, bp + np.array([0.06, 0.05, 0]), (0.04,) * 3, "bird", W0, segs=10, rings=6)
    cyl(B, bp + np.array([0.09, 0.05, 0]), 0.04, 0.013, "beak", M=basis_from_y((1, 0, 0)), segs=6, r_top=0.0)
    ellipsoid(B, bp + np.array([-0.08, 0.02, 0]), (0.05, 0.015, 0.03), "bird", W0, M=rot(Z, -25), segs=8, rings=5)
    for s in (1, -1):
        ellipsoid(B, bp + np.array([0.075, 0.06, 0.026 * s]), (0.008,) * 3, "charcoal", W0, segs=6, rings=4)


ASSETS = {"academy": (academy, 6.0), "library": (library, 6.0), "fountain": (fountain, 1.8), "tree": (tree, 3.5),
          "bench": (bench, 0.9), "lamp": (lamp, 3.0), "bush": (bush, 0.8)}


# ------------------------------------------------------------ writer
def write_static(path, B, name, extras):
    P, N, UV, J, Wt, F = B.arrays()
    # origin bottom-center
    mn, mx = P.min(0), P.max(0)
    P = P - np.array([(mn[0] + mx[0]) / 2, mn[1], (mn[2] + mx[2]) / 2], np.float32)
    mn, mx = P.min(0), P.max(0)
    blob = bytearray(); views, accs = [], []

    def view(data, target=None):
        while len(blob) % 4: blob.append(0)
        v = {"buffer": 0, "byteOffset": len(blob), "byteLength": len(data)}
        if target: v["target"] = target
        blob.extend(data); views.append(v); return len(views) - 1

    def acc(arr, ct, typ, target=None, mm=False):
        arr = np.ascontiguousarray(arr)
        a = {"bufferView": view(arr.tobytes(), target), "componentType": ct, "count": int(arr.shape[0]), "type": typ}
        if mm:
            a["min"] = [float(x) for x in arr.min(0)]; a["max"] = [float(x) for x in arr.max(0)]
        accs.append(a); return len(accs) - 1

    aP = acc(P.astype(np.float32), 5126, "VEC3", 34962, True)
    aN = acc(N, 5126, "VEC3", 34962)
    aUV = acc(UV, 5126, "VEC2", 34962)
    idx = F.reshape(-1)
    aI = acc(idx.astype(np.uint16), 5123, "SCALAR", 34963) if len(P) < 65535 else acc(idx.astype(np.uint32), 5125, "SCALAR", 34963)
    im0 = view(PAL.png()); im1 = view(PAL.png_emissive())
    while len(blob) % 4: blob.append(0)
    extras = dict(extras, size=[float(x) for x in (mx - mn)], tintCells={k: PAL.rect(k) for k in PAL.names}, textureSize=gen.TEX)
    g = {"asset": {"version": "2.0", "generator": "procedural cozy env generator (python)"}, "scene": 0,
         "scenes": [{"name": name, "nodes": [0], "extras": extras}],
         "nodes": [{"name": name, "mesh": 0}],
         "meshes": [{"name": name, "primitives": [{"attributes": {"POSITION": aP, "NORMAL": aN, "TEXCOORD_0": aUV}, "indices": aI, "material": 0}]}],
         "materials": [{"name": "CozyEnv_Mat", "pbrMetallicRoughness": {"baseColorTexture": {"index": 0}, "metallicFactor": 0.0, "roughnessFactor": 0.9},
                        "emissiveTexture": {"index": 1}, "emissiveFactor": [1, 1, 1], "doubleSided": False}],
         "textures": [{"sampler": 0, "source": 0}, {"sampler": 0, "source": 1}],
         "samplers": [{"magFilter": 9729, "minFilter": 9987, "wrapS": 33071, "wrapT": 33071}],
         "images": [{"name": "palette", "bufferView": im0, "mimeType": "image/png"}, {"name": "glow", "bufferView": im1, "mimeType": "image/png"}],
         "accessors": accs, "bufferViews": views, "buffers": [{"byteLength": len(blob)}]}
    js = json.dumps(g, separators=(",", ":")).encode()
    while len(js) % 4: js += b" "
    out = struct.pack("<III", 0x46546C67, 2, 28 + len(js) + len(blob)) + struct.pack("<II", len(js), 0x4E4F534A) + js + \
          struct.pack("<II", len(blob), 0x004E4942) + bytes(blob)
    open(path, "wb").write(out)
    return len(F), len(out), mx - mn


if __name__ == "__main__":
    outdir = sys.argv[1] if len(sys.argv) > 1 else "env"
    os.makedirs(outdir, exist_ok=True)
    only = sys.argv[2:] or list(ASSETS)
    for n in only:
        fn, h = ASSETS[n]
        B = EB(PAL)
        fn(B)
        ex = {"targetHeight": h}
        if n == "bench":
            ex.update(seatHeight=0.49, seatFacing="+Z", seatLength=1.6)
        tris, size, dims = write_static(f"{outdir}/{n}.glb", B, n, ex)
        print(f"{n}: {tris} tris, {size/1024:.0f} KB, size {dims.round(2)}")
