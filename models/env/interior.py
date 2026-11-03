"""Cozy interior props (classroom / library / lab) -> .glb, same pipeline as env.py."""
import math, os, sys
import numpy as np
import gen, env
from env import EB, rbox, cyl, prism, disc, flower, blob_cluster, arch_poly, W0, X, Y, Z
from gen import rot, basis_from_y, lathe, ellipsoid, torus, hexc

# bigger palette grid for interior (16x16 cells of 16px, still 256px)
gen.GRID, gen.CELL = 16, 16
EXTRA = {"board": "#5E9C7A", "board_dark": "#4C8366", "chalk": "#EEF6EE", "terracotta": "#E8A07A", "terracotta_dark": "#CF8460",
         "rug_lilac": "#CDB8F0", "rug_lilac_dark": "#B39CE3", "screen_glow": "#BFE3FF", "screen_hi": "#E8F6FF", "key": "#FBF5EA",
         "grey": "#C9C3D6", "felt": "#8E8FE6", "pencil_red": "#F28B82", "pencil_blue": "#8EC5FF", "pencil_green": "#86D6B4",
         "page": "#FFF9EE", "book_lilac": "#C7A8F0", "brain": "#F6A8C6", "brain_dark": "#E58AAE", "gear": "#8E8FE6", "gear_dark": "#7374CF",
         "poster_mint": "#BDEBD6", "poster_pink": "#FBD3E2", "poster_sky": "#D6EEFF", "cloud": "#FFFFFF", "succulent": "#7FC9A0"}
for k, v in EXTRA.items():
    env.PAL.names.append(k)
    env.PAL.colors[k] = hexc(v)
env.GLOW.add("screen_glow")
env.GLOW.add("screen_hi")


def legs4(B, w, d, h, r, col, inset=0.08, r_top=None):
    for sx in (1, -1):
        for sz in (1, -1):
            cyl(B, (sx * (w / 2 - inset), 0, sz * (d / 2 - inset)), h, r, col, segs=14, r_top=r_top, bevel=0.02)


def desk_teacher(B):
    W, D, H = 1.7, 0.8, 0.78
    rbox(B, (0, H - 0.04, 0), (W, 0.08, D), "wood_light", power=0.2, segs=32, rings=12)
    legs4(B, W - 0.04, D - 0.04, H - 0.07, 0.05, "wood", inset=0.09)
    rbox(B, (0, 0.44, D / 2 - 0.08), (W - 0.24, 0.48, 0.04), "wood", power=0.25, segs=24, rings=12)       # modesty panel faces +Z
    rbox(B, (0, 0.44, D / 2 - 0.05), (W - 0.5, 0.06, 0.02), "wood_dark", power=0.4, segs=12, rings=6)
    # drawer unit (teacher side -Z, right)
    rbox(B, (0.5, 0.6, -0.02), (0.55, 0.16, D - 0.16), "wood", power=0.25, segs=20, rings=10)
    rbox(B, (0.5, 0.6, -D / 2 + 0.07), (0.45, 0.11, 0.03), "wood_light", power=0.3, segs=14, rings=8)
    ellipsoid(B, (0.5, 0.6, -D / 2 + 0.05), (0.035, 0.025, 0.025), "honey_dark", W0, segs=10, rings=6)
    # pen cup + pencils
    cyl(B, (-0.55, H, -0.12), 0.13, 0.055, "honey", segs=18, bevel=0.01)
    for i, (c, a) in enumerate([("pencil_red", (0.15, 1, 0.1)), ("pencil_blue", (-0.12, 1, 0.05)), ("pencil_green", (0.02, 1, -0.15))]):
        d = np.array(a); d /= np.linalg.norm(d)
        base = np.array([-0.55 + 0.015 * (i - 1), H + 0.03, -0.12 + 0.01 * i])
        cyl(B, base, 0.15, 0.011, c, M=basis_from_y(d), segs=6)
        cyl(B, base + d * 0.15, 0.025, 0.011, "page", M=basis_from_y(d), segs=6, r_top=0.002)
    # closed book
    c = np.array([0.2, H + 0.035, 0.05])
    rbox(B, c, (0.32, 0.06, 0.24), "book_red", M=rot(Y, 12), power=0.2, segs=16, rings=8)
    rbox(B, c + np.array([0.01, 0, 0.004]), (0.3, 0.045, 0.235), "page", M=rot(Y, 12), power=0.25, segs=14, rings=8)
    # apple (cozy touch)
    ellipsoid(B, (-0.25, H + 0.05, 0.2), (0.05, 0.045, 0.05), "pencil_red", W0, segs=12, rings=8)
    cyl(B, (-0.25, H + 0.09, 0.2), 0.03, 0.006, "trunk", segs=5)


def desk_student(B):
    W, D, H = 1.1, 0.6, 0.70
    slope = 7
    rbox(B, (0, H - 0.03, 0), (W, 0.06, D), "cream_dark", M=rot(X, slope), power=0.2, segs=28, rings=12)  # lower toward -Z (sitter)
    rbox(B, (0, H - 0.075, 0), (W - 0.04, 0.03, D - 0.04), "wood_light", power=0.25, segs=24, rings=8)
    # pencil tray lip at far edge (+Z)
    z = D / 2 - 0.02
    yz = H - 0.03 + math.sin(math.radians(slope)) * z + 0.035
    rbox(B, (0, yz, z), (W - 0.06, 0.05, 0.04), "wood", power=0.3, segs=20, rings=8)
    cyl(B, (-0.2, yz - 0.005, z - 0.045), 0.16, 0.011, "pencil_blue", M=basis_from_y((1, 0, 0)), segs=6)
    # under-shelf (open front toward sitter)
    rbox(B, (0, 0.5, 0.02), (W - 0.16, 0.03, D - 0.14), "wood", power=0.3, segs=20, rings=8)
    rbox(B, (0, 0.57, D / 2 - 0.08), (W - 0.16, 0.14, 0.03), "wood", power=0.3, segs=20, rings=8)
    legs4(B, W - 0.04, D - 0.04, H - 0.08, 0.035, "wood", inset=0.07)
    for sx in (1, -1):
        rbox(B, (sx * (W / 2 - 0.09), 0.12, 0), (0.04, 0.04, D - 0.14), "wood_dark", power=0.4, segs=10, rings=6)


def chair(B):
    S, H = 0.46, 0.45
    rbox(B, (0, H - 0.03, 0.0), (S, 0.06, S), "wood_light", power=0.18, segs=24, rings=12, )
    ellipsoid(B, (0, H + 0.0, 0.01), (S * 0.38, 0.012, S * 0.38), "wood", W0, segs=20, rings=6)       # scoop hint
    legs4(B, S, S, H - 0.05, 0.03, "wood", inset=0.06, r_top=0.035)
    for sx in (1, -1):
        rbox(B, (sx * (S / 2 - 0.06), 0.14, 0), (0.03, 0.03, S - 0.12), "wood_dark", power=0.4, segs=8, rings=6)
        cyl(B, (sx * (S / 2 - 0.06), H, -S / 2 + 0.06), 0.47, 0.03, "wood", M=basis_from_y((0, 1, -0.12)), segs=10)
        ellipsoid(B, (sx * (S / 2 - 0.06), H + 0.47, -S / 2 + 0.003), (0.04,) * 3, "wood", W0, segs=10, rings=6)
    for i, y in enumerate((0.66, 0.82)):
        rbox(B, (0, y, -S / 2 + 0.06 - (y - H) * 0.12 - 0.01), (S - 0.06, 0.1 if i else 0.08, 0.04), "wood_light" if i else "wood",
             M=rot(X, -7), power=0.2, segs=20, rings=10)


def bookshelf(B):
    W, H, D = 1.6, 2.4, 0.42
    rng = np.random.default_rng(11)
    for sx in (1, -1):
        rbox(B, (sx * (W / 2 - 0.045), H / 2, 0), (0.09, H, D), "wood", power=0.22, segs=16, rings=20)
    rbox(B, (0, H - 0.04, 0), (W + 0.08, 0.08, D + 0.04), "wood", power=0.22, segs=24, rings=10)
    rbox(B, (0, 0.06, 0), (W, 0.12, D), "wood_dark", power=0.25, segs=24, rings=10)
    rbox(B, (0, H / 2, -D / 2 + 0.02), (W - 0.06, H - 0.06, 0.03), "wood_dark", power=0.4, segs=12, rings=12)
    shelves = [0.12, 0.68, 1.22, 1.76]
    for y in shelves[1:]:
        rbox(B, (0, y, 0), (W - 0.1, 0.05, D - 0.02), "wood", power=0.3, segs=20, rings=8)
    cols = ["book_red", "book_blue", "book_yellow", "book_green", "book_lilac"]
    for si, y0 in enumerate(shelves[:3]):
        x = -W / 2 + 0.12
        top = shelves[si + 1] - 0.03
        while x < W / 2 - 0.16:
            w = rng.uniform(0.06, 0.11)
            h = rng.uniform(0.32, 0.46) * (top - y0 - 0.03) / 0.5
            col = cols[rng.integers(len(cols))]
            if rng.random() < 0.1 and x < W / 2 - 0.4:      # leaning book
                rbox(B, (x + 0.1, y0 + 0.025 + h / 2 * 0.95, 0.02), (w, h, 0.3), col, M=rot(Z, -18), power=0.2, segs=12, rings=8)
                x += 0.22
                continue
            rbox(B, (x + w / 2, y0 + 0.025 + h / 2, 0.02), (w, h, 0.3), col, power=0.2, segs=12, rings=8)
            rbox(B, (x + w / 2, y0 + 0.025 + h * 0.75, 0.172), (w * 0.8, 0.02, 0.01), "page", power=0.5, segs=6, rings=4)
            x += w + 0.008
            if rng.random() < 0.12:
                x += 0.12
    # top shelf: succulent + clock + small stack
    y0 = shelves[3] + 0.025
    cyl(B, (-0.45, y0, 0.02), 0.14, 0.09, "terracotta", segs=16, r_top=0.11, bevel=0.015)
    with env.flat(B):
        for k in range(7):
            a = 2 * math.pi * k / 7
            d = np.array([math.cos(a) * 0.6, 1.0, math.sin(a) * 0.6])
            ellipsoid(B, np.array([-0.45, y0 + 0.17, 0.02]) + d * 0.04, (0.035, 0.08, 0.025), "succulent", W0, M=basis_from_y(d), segs=8, rings=5)
        ellipsoid(B, (-0.45, y0 + 0.2, 0.02), (0.035, 0.07, 0.035), "leaf", W0, segs=8, rings=5)
    cc = np.array([0.1, y0 + 0.2, 0.05])
    disc(B, cc, 0.18, 0.06, "cream", segs=28)
    disc(B, cc + np.array([0, 0, 0.03]), 0.145, 0.01, "white", segs=24)
    torus(B, cc + np.array([0, 0, 0.03]), 0.18, 0.025, "honey_dark", W0, M=basis_from_y((0, 0, 1)), segs=28, tsegs=6)
    rbox(B, cc + np.array([0, 0.045, 0.045]), (0.02, 0.1, 0.01), "charcoal", power=0.4, segs=6, rings=4)
    rbox(B, cc + np.array([0.035, 0.0, 0.045]), (0.08, 0.02, 0.01), "charcoal", power=0.4, segs=6, rings=4)
    cyl(B, (0.1, y0, 0.05), 0.04, 0.07, "honey_dark", segs=12)
    for i, (c, w) in enumerate([("book_blue", 0.34), ("book_yellow", 0.3), ("book_green", 0.26)]):
        rbox(B, (0.52, y0 + 0.03 + 0.06 * i, 0.0), (w, 0.055, 0.24), c, M=rot(Y, 8 * (-1) ** i), power=0.2, segs=12, rings=8)


def blackboard(B):
    BW, BH, cy = 2.3, 1.15, 1.32
    rbox(B, (0, cy, 0), (BW, BH, 0.05), "board", power=0.15, segs=28, rings=20)
    for y in (cy + BH / 2, cy - BH / 2):
        rbox(B, (0, y, 0), (BW + 0.16, 0.09, 0.09), "wood", power=0.25, segs=24, rings=8)
    for sx in (1, -1):
        rbox(B, (sx * (BW / 2 + 0.04), cy, 0), (0.09, BH + 0.16, 0.09), "wood", power=0.25, segs=10, rings=20)
    # A-frame legs per side
    for sx in (1, -1):
        x = sx * (BW / 2 + 0.13)
        top = np.array([x, 2.0, 0])
        for sz in (1, -1):
            foot = np.array([x, 0, sz * 0.42])
            d = top - foot
            cyl(B, foot, np.linalg.norm(d), 0.045, "wood", M=basis_from_y(d), segs=10, bevel=0.015)
        ellipsoid(B, top, (0.065,) * 3, "wood_dark", W0, segs=12, rings=8)
        rbox(B, (x, 0.5, 0), (0.05, 0.05, 0.62), "wood_dark", power=0.4, segs=8, rings=6)
        rbox(B, (x - sx * 0.08, cy, 0), (0.12, 0.08, 0.06), "wood_dark", power=0.4, segs=8, rings=6)
    # tray + chalk + eraser
    ty = cy - BH / 2 - 0.08
    rbox(B, (0, ty, 0.08), (BW * 0.8, 0.04, 0.14), "wood_light", power=0.3, segs=24, rings=8)
    rbox(B, (0, ty + 0.035, 0.145), (BW * 0.8, 0.04, 0.02), "wood_light", power=0.4, segs=20, rings=6)
    cyl(B, (0.3, ty + 0.045, 0.07), 0.14, 0.022, "chalk", M=basis_from_y((1, 0, 0.1)), segs=8, bevel=0.008)
    cyl(B, (0.55, ty + 0.045, 0.06), 0.09, 0.02, "flower_pink", M=basis_from_y((1, 0, -0.2)), segs=8, bevel=0.008)
    rbox(B, (-0.5, ty + 0.05, 0.08), (0.22, 0.05, 0.09), "wood", power=0.3, segs=14, rings=8)
    rbox(B, (-0.5, ty + 0.03, 0.08), (0.21, 0.025, 0.085), "felt", power=0.35, segs=14, rings=6)
    # chalk lightbulb doodle (flat strokes on board face)
    z = 0.028
    bc = np.array([-0.15, cy + 0.12, z])
    Mz = basis_from_y((0, 0, 1))
    torus(B, bc, 0.22, 0.012, "chalk", W0, M=Mz, arc=(math.radians(-55), math.radians(235)), segs=40, tsegs=5, end_caps=True)
    for sx in (1, -1):
        rbox(B, bc + np.array([sx * 0.125, -0.24, 0]), (0.024, 0.12, 0.008), "chalk", power=0.5, segs=6, rings=4)
    for k in range(3):
        rbox(B, bc + np.array([0, -0.31 - 0.045 * k, 0]), (0.24 - 0.04 * k, 0.022, 0.008), "chalk", power=0.5, segs=6, rings=4)
    torus(B, bc + np.array([0, -0.06, 0]), 0.06, 0.009, "chalk", W0, M=Mz, arc=(0, math.pi), segs=12, tsegs=5, end_caps=True)
    for k in range(5):
        a = math.radians(90 + (k - 2) * 38)
        p = bc + np.array([math.cos(a), math.sin(a), 0]) * 0.33
        rbox(B, p, (0.022, 0.09, 0.008), "chalk", M=rot(Z, math.degrees(a) - 90), power=0.5, segs=6, rings=4)
    # little stars / squiggle on the right
    for (x, y, s) in [(0.55, cy + 0.25, 0.05), (0.75, cy + 0.05, 0.035), (0.45, cy - 0.2, 0.04)]:
        for a in (0, 60, 120):
            rbox(B, (x, y, z), (s * 2, 0.014, 0.008), "chalk", M=rot(Z, a), power=0.5, segs=6, rings=4)


def rug(B):
    bands = [(1.5, "rug_lilac_dark"), (1.32, "cream"), (1.08, "rug_lilac"), (0.78, "cream"), (0.5, "rug_lilac_dark"), (0.24, "honey")]
    for i, (r, c) in enumerate(bands):
        h = 0.02 + 0.003 * i
        lathe(B, [(0, 0, c), (0, r - 0.02, c), (h * 0.7, r, c), (h, r - 0.02, c), (h, 0, c)], (0, 0, 0), W0, segs=64)
    n = 26
    for k in range(n):
        a = 2 * math.pi * k / n
        ellipsoid(B, (1.52 * math.cos(a), 0.012, 1.52 * math.sin(a)), (0.13, 0.012, 0.13), "rug_lilac_dark", W0, segs=12, rings=4)
    for k in range(12):
        a = 2 * math.pi * (k + 0.5) / 12
        ellipsoid(B, (0.93 * math.cos(a), 0.034, 0.93 * math.sin(a)), (0.05, 0.006, 0.05), "flower_pink", W0, segs=10, rings=4)


def plant_indoor(B):
    lathe(B, [(0, 0, "terracotta"), (0, 0.19, "terracotta"), (0.03, 0.2, "terracotta"), (0.36, 0.25, "terracotta"), (0.36, 0.28, "cream"),
              (0.46, 0.29, "cream"), (0.47, 0.26, "cream"), (0.47, 0.0, "soil")], (0, 0, 0), W0, segs=28)
    rng = np.random.default_rng(4)
    with env.flat(B):
        blob_cluster(B, [((0, 0.72, 0), (0.33, 0.3, 0.33)), ((0.17, 0.92, 0.05), (0.22, 0.2, 0.22)), ((-0.15, 0.95, -0.05), (0.2, 0.2, 0.2)),
                         ((0.02, 1.05, 0.08), (0.16, 0.14, 0.16))], ["leaf", "leaf_dark", "leaf_light", "leaf"], segs=10, rings=7, facet=False)
        for k in range(11):
            a = 2 * math.pi * k / 11 + rng.random() * 0.3
            d = np.array([math.cos(a), 0.7 + rng.random() * 0.6, math.sin(a)]); d /= np.linalg.norm(d)
            base = np.array([0, 0.55, 0])
            ellipsoid(B, base + d * 0.38, (0.09, 0.2, 0.035), "leaf_dark" if k % 2 else "leaf", W0, M=basis_from_y(d) @ rot(Y, 30), segs=8, rings=6)
    for p, c in [((0.18, 1.08, 0.12), "flower_pink"), ((-0.2, 0.98, 0.18), "flower_yellow")]:
        ellipsoid(B, p, (0.05,) * 3, c, W0, segs=10, rings=6)
        ellipsoid(B, np.array(p) + np.array([0, 0.02, 0.03]), (0.02,) * 3, "honey", W0, segs=6, rings=4)


def screen(B):
    rbox(B, (0, 0.012, -0.08), (0.2, 0.025, 0.16), "cream", power=0.25, segs=16, rings=8)
    cyl(B, (0, 0.02, -0.1), 0.15, 0.03, "cream_dark", segs=12)
    mc = np.array([0, 0.36, -0.1])
    M = rot(X, -6)
    rbox(B, mc, (0.56, 0.42, 0.1), "cream", M=M, power=0.2, segs=24, rings=16)
    rbox(B, mc + M @ np.array([0, -0.15, -0.06]), (0.4, 0.18, 0.08), "cream_dark", M=M, power=0.3, segs=16, rings=10)
    rbox(B, mc + M @ np.array([0, 0.02, 0.045]), (0.46, 0.31, 0.02), "screen_glow", M=M, power=0.18, segs=20, rings=12)
    rbox(B, mc + M @ np.array([-0.12, 0.08, 0.057]), (0.14, 0.03, 0.004), "screen_hi", M=M, power=0.4, segs=8, rings=4)
    rbox(B, mc + M @ np.array([-0.08, 0.02, 0.057]), (0.22, 0.03, 0.004), "screen_hi", M=M, power=0.4, segs=8, rings=4)
    ellipsoid(B, mc + M @ np.array([0.15, -0.05, 0.058]), (0.04, 0.04, 0.004), "honey", W0, M=M, segs=12, rings=4)
    ellipsoid(B, mc + M @ np.array([0.2, -0.19, 0.05]), (0.012,) * 3, "leaf", W0, segs=8, rings=5)
    # keyboard with chunky keys
    kc = np.array([-0.04, 0.02, 0.15])
    rbox(B, kc, (0.44, 0.035, 0.15), "cream", M=rot(X, 4), power=0.25, segs=20, rings=8)
    for r in range(3):
        for c in range(9):
            col = "key" if (r, c) != (2, 4) else "pink"
            w = 0.036 if (r, c) != (2, 4) else 0.036
            rbox(B, kc + np.array([-0.17 + c * 0.0425, 0.025 - 0.002 * r, -0.04 + r * 0.04]), (w, 0.014, 0.032), col, power=0.3, segs=8, rings=6)
    rbox(B, kc + np.array([0, 0.021, 0.08]), (0.2, 0.012, 0.03), "key", power=0.3, segs=10, rings=6)
    # mouse
    ellipsoid(B, (0.28, 0.022, 0.16), (0.04, 0.025, 0.06), "cream", W0, segs=14, rings=8)
    rbox(B, (0.28, 0.045, 0.135), (0.005, 0.006, 0.03), "cream_dark", power=0.5, segs=6, rings=4)


def _poster(B, frame, panel, icon):
    W, H = 1.05, 1.5
    rbox(B, (0, H / 2, 0), (W, H, 0.06), frame, power=0.15, segs=24, rings=20)
    rbox(B, (0, H / 2 + 0.04, 0.025), (W - 0.16, H - 0.28, 0.03), panel, power=0.2, segs=20, rings=16)
    for x in (-0.25, 0.0, 0.25):
        ellipsoid(B, (x, 0.13, 0.04), (0.07, 0.04, 0.012), "white", W0, segs=12, rings=4)
    ellipsoid(B, (0, H - 0.03, 0.035), (0.03,) * 3, "pencil_red", W0, segs=10, rings=6)
    c = np.array([0, H / 2 + 0.1, 0.05])
    Mz = basis_from_y((0, 0, 1))
    if icon == "bulb":
        ellipsoid(B, c + np.array([0, 0.06, 0]), (0.24, 0.26, 0.04), "honey", W0, segs=24, rings=12)
        ellipsoid(B, c + np.array([-0.08, 0.14, 0.03]), (0.05, 0.08, 0.012), "white", W0, M=rot(Z, 25), segs=12, rings=6)
        for k in range(3):
            rbox(B, c + np.array([0, -0.24 - 0.06 * k, 0]), (0.2 - 0.03 * k, 0.045, 0.05), "grey", power=0.3, segs=12, rings=6)
        for k in range(5):
            a = math.radians(90 + (k - 2) * 40)
            p = c + np.array([math.cos(a), math.sin(a), 0]) * 0.37 + np.array([0, 0.06, 0])
            rbox(B, p, (0.035, 0.11, 0.03), "honey_dark", M=rot(Z, math.degrees(a) - 90), power=0.3, segs=8, rings=6)
    elif icon == "brain":
        lobes = [(-0.12, 0.08, 0.15), (0.12, 0.08, 0.15), (-0.18, -0.08, 0.13), (0.18, -0.08, 0.13), (-0.05, -0.14, 0.12), (0.06, 0.16, 0.12),
                 (-0.07, 0.17, 0.11), (0.07, -0.14, 0.11)]
        for i, (x, y, r) in enumerate(lobes):
            ellipsoid(B, c + np.array([x, y, 0]), (r, r * 0.9, 0.04), "brain" if i % 2 else "brain_dark", W0, segs=16, rings=8)
        rbox(B, c + np.array([0, 0.0, 0.035]), (0.02, 0.34, 0.01), "brain_dark", power=0.4, segs=6, rings=4)
        for (x, y, a) in [(-0.13, 0.05, 30), (0.14, 0.04, -30), (-0.12, -0.11, -20), (0.12, -0.1, 20)]:
            torus(B, c + np.array([x, y, 0.04]), 0.05, 0.008, "brain_dark", W0, M=Mz @ rot(Y, a), arc=(0.3, 2.6), segs=10, tsegs=4, end_caps=True)
        rbox(B, c + np.array([0.03, -0.27, 0]), (0.07, 0.12, 0.03), "brain_dark", M=rot(Z, 15), power=0.3, segs=8, rings=6)
    elif icon == "gear":
        torus(B, c, 0.2, 0.07, "gear", W0, M=Mz, segs=40, tsegs=10)
        for k in range(8):
            a = 2 * math.pi * k / 8
            rbox(B, c + np.array([math.cos(a), math.sin(a), 0]) * 0.29, (0.11, 0.1, 0.07), "gear_dark", M=rot(Z, math.degrees(a)), power=0.25, segs=10, rings=8)
        disc(B, c, 0.14, 0.05, "gear_dark", segs=28)
        disc(B, c + np.array([0, 0, 0.03]), 0.07, 0.03, "honey", segs=20)
        torus(B, c + np.array([0.33, -0.3, 0]), 0.08, 0.035, "pink_dark", W0, M=Mz, segs=24, tsegs=8)
        for k in range(6):
            a = 2 * math.pi * k / 6
            rbox(B, c + np.array([0.33, -0.3, 0]) + np.array([math.cos(a), math.sin(a), 0]) * 0.125, (0.05, 0.05, 0.05), "pink_dark",
                 M=rot(Z, math.degrees(a)), power=0.25, segs=8, rings=6)


def poster(B): _poster(B, "pink", "poster_sky", "bulb")
def poster_brain(B): _poster(B, "mint", "poster_pink", "brain")
def poster_gear(B): _poster(B, "honey", "poster_mint", "gear")


def wallclock(B):
    c = np.array([0, 0.27, 0])
    Mz = basis_from_y((0, 0, 1))
    disc(B, c, 0.25, 0.06, "cream", segs=40)
    torus(B, c + np.array([0, 0, 0.02]), 0.235, 0.04, "cream_dark", W0, M=Mz, segs=40, tsegs=8)
    disc(B, c + np.array([0, 0, 0.035]), 0.2, 0.01, "white", segs=36)
    for k in range(12):
        a = 2 * math.pi * k / 12
        s = 0.018 if k % 3 else 0.026
        ellipsoid(B, c + np.array([math.cos(a) * 0.16, math.sin(a) * 0.16, 0.045]), (s, s, 0.008), "indigo" if k % 3 else "pink_dark", W0, segs=10, rings=4)
    rbox(B, c + np.array([0.0, 0.05, 0.05]), (0.024, 0.11, 0.012), "charcoal", power=0.35, segs=8, rings=4)
    rbox(B, c + np.array([0.055, -0.03, 0.055]), (0.13, 0.02, 0.012), "charcoal", M=rot(Z, -30), power=0.35, segs=8, rings=4)
    disc(B, c + np.array([0, 0, 0.062]), 0.022, 0.014, "honey_dark", segs=14)
    cyl(B, c + np.array([0, 0.24, 0]), 0.05, 0.02, "cream_dark", segs=10)
    ellipsoid(B, c + np.array([0, 0.3, 0]), (0.035,) * 3, "honey_dark", W0, segs=12, rings=8)


def window_interior(B):
    W, H = 1.6, 1.3
    c = np.array([0, H / 2 + 0.15, 0])
    rbox(B, c, (W, H, 0.12), "cream", power=0.15, segs=28, rings=20)
    rbox(B, c + np.array([0, 0, 0.03]), (W - 0.2, H - 0.2, 0.08), "sky", power=0.12, segs=24, rings=18)
    for (x, y, s) in [(-0.35, 0.22, 1.0), (0.38, -0.05, 0.75), (-0.1, -0.3, 0.55)]:
        for dx, r in [(-0.1, 0.07), (0.0, 0.1), (0.1, 0.075), (0.04, 0.06)]:
            ellipsoid(B, c + np.array([x + dx * s * 1.4, y + (0.03 if r > 0.08 else 0) * s, 0.075]), (r * s * 1.3, r * s, 0.012), "cloud", W0, segs=14, rings=6)
    rbox(B, c + np.array([0, 0, 0.08]), (0.06, H - 0.16, 0.05), "cream", power=0.3, segs=10, rings=12)
    rbox(B, c + np.array([0, 0, 0.08]), (W - 0.16, 0.06, 0.05), "cream", power=0.3, segs=14, rings=8)
    # sill + flower box
    rbox(B, (0, 0.12, 0.08), (W + 0.16, 0.07, 0.24), "cream_dark", power=0.25, segs=24, rings=8)
    rbox(B, (0, -0.0, 0.16), (W * 0.7, 0.2, 0.2), "wood", power=0.22, segs=24, rings=10)
    rbox(B, (0, 0.09, 0.16), (W * 0.66, 0.03, 0.16), "soil", power=0.4, segs=14, rings=6)
    blob_cluster(B, [((x, 0.15, 0.16), (0.11, 0.09, 0.1)) for x in np.linspace(-0.45, 0.45, 6)], ["leaf", "leaf_dark"], segs=8, rings=6)
    cols = ["flower_pink", "flower_yellow", "flower_lilac", "flower_white", "flower_pink"]
    for i, x in enumerate(np.linspace(-0.42, 0.42, 5)):
        flower(B, (x, 0.3 + 0.03 * (i % 2), 0.18), cols[i], 1.2)


ASSETS = {
    "desk_teacher": (desk_teacher, {"surfaceHeight": 0.78, "userSide": "-Z", "note": "teacher sits at -Z facing +Z; modesty panel faces +Z"}),
    "desk_student": (desk_student, {"surfaceHeight": 0.70, "userSide": "-Z", "note": "sit at -Z facing +Z (same as chair seatFacing)"}),
    "chair": (chair, {"seatHeight": 0.45, "seatFacing": "+Z"}),
    "bookshelf": (bookshelf, {}),
    "blackboard": (blackboard, {}),
    "rug": (rug, {}),
    "plant_indoor": (plant_indoor, {}),
    "screen": (screen, {"placeOn": "desk surface"}),
    "poster": (poster, {"wallMount": True, "icon": "lightbulb"}),
    "poster_brain": (poster_brain, {"wallMount": True, "icon": "brain"}),
    "poster_gear": (poster_gear, {"wallMount": True, "icon": "gear"}),
    "wallclock": (wallclock, {"wallMount": True}),
    "window_interior": (window_interior, {"wallMount": True}),
}

if __name__ == "__main__":
    outdir = sys.argv[1] if len(sys.argv) > 1 else "interior"
    os.makedirs(outdir, exist_ok=True)
    for n in (sys.argv[2:] or ASSETS):
        fn, ex = ASSETS[n]
        B = EB(env.PAL)
        fn(B)
        tris, size, dims = env.write_static(f"{outdir}/{n}.glb", B, n, dict(ex))
        print(f"{n}: {tris} tris, {size/1024:.0f} KB, size {dims.round(2)}")
