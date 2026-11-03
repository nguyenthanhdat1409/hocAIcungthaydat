# AI ACADEMY 3D — PROMPT GEN BỐI CẢNH (THẾ GIỚI MỞ COZY STYLIZED)

> Mục đích: gen bộ asset môi trường đồng bộ cho thành phố học AI mở. Dán prompt vào **Meshy AI / Tripo AI / Rodin (Hyper3D)**.
> Props môi trường là **tĩnh** (không rig, không animation) → gen nhanh hơn nhân vật.
> Lưu tất cả trong `models/env/`, tên **không dấu, không cách**.

---

## 0. ART BIBLE — DÁN KÈM MỌI PROMPT (để cả thế giới cùng 1 phong cách)

Copy đoạn **STYLE** này nối vào CUỐI mỗi prompt bên dưới (đây là "chất" chung giữ mọi vật đồng bộ):

```
STYLE: cozy stylized low-poly, warm inviting children's game world, soft rounded shapes with
gentle bevels and chunky friendly proportions. Flat matte hand-painted look, warm pastel palette
(cream #F4E9D6, warm wood #C9915B, sky blue #BFE3FF, mint #86D6B4, blush pink #F6A8C6,
honey yellow #FFD36E, soft indigo #8E8FE6). Soft even ambient shading, no harsh highlights,
no realistic grime, no PBR metal/roughness noise. Inspired by Animal Crossing, Monument Valley,
Pixar shorts and cozy mobile games. Clean readable silhouette, game-ready optimized low-poly,
single centered object standing on flat ground, plain neutral background, no text, no logos, no neon, no glow.
```

**NEGATIVE (nếu tool có ô Negative prompt):**
```
realistic, photoreal, PBR, rust, dirt, grunge, high-poly, dense triangles, text, letters, watermark,
neon, glowing, sci-fi, dark, gloomy, cluttered, multiple objects, humans, characters, floating parts
```

---

## 1. SPEC KỸ THUẬT (áp dụng cho MỌI asset)

- Định dạng **`.glb`** (glTF 2.0 binary), texture nhúng. **Tĩnh** (no rig/anim).
- **Y-up**, gốc toạ độ ở **đáy-giữa** (đặt y=0 là chạm đất). Mặt chính/cửa quay **+Z**.
- Low-poly, **1 material**, texture ≤1024px → file **< ~1MB** (toà nhà < ~1.5MB).
- Tỉ lệ tham chiếu: **nhân vật Chibi cao 1.8 đơn vị, cửa cao ~2.4**. (Engine sẽ auto-scale về chiều cao mục tiêu, nhưng gen đúng tỉ lệ cho đẹp.)

---

## 2. BỘ ASSET + PROMPT CHI TIẾT

Ký hiệu ưu tiên: ⭐⭐⭐ làm trước (đổi diện mạo nhiều nhất) · ⭐⭐ nên có · ⭐ bổ sung sau.

### 🏫 CÔNG TRÌNH

**`models/env/academy.glb`** — Học viện AI ⭐⭐⭐ · cao mục tiêu ~6
```
A cozy stylized low-poly school academy building exterior, two friendly storeys. Soft indigo
pastel walls with rounded corners, a gently pitched blush-pink gable roof with thick rounded
ridge, a big warm arched double-door entrance framed by cream trim, two rows of round porthole
windows glowing soft warm cream, a small round clock medallion above the door, a little bell cupola
on the roof ridge, two cream steps and a tiny flower planter at the base. Chunky welcoming
proportions, like a cozy cartoon schoolhouse. [+ STYLE]
```

**`models/env/library.glb`** — Thư viện ⭐⭐⭐ · ~6
```
A cozy stylized low-poly library building exterior, two storeys, teal-green pastel walls, a warm
honey-orange pitched roof, tall arched windows with cream frames, a grand rounded entrance with a
small triangular awning, a stack-of-books emblem shape (no text) carved over the door, a round
rose window at the top, soft ivy leaves creeping on one corner. Calm, bookish, inviting cottage-library feel. [+ STYLE]
```

**`models/env/lab.glb`** — Phòng thí nghiệm ⭐⭐ · ~6
```
A cozy stylized low-poly science lab building exterior, light cream walls, a rounded mint-green
dome roof like a small observatory, a glass greenhouse section on one side, round windows, a friendly
arched door, two oversized cute beaker/flask sculptures flanking the entrance, a small satellite-dish
and a soft antenna ball on the dome. Playful, curious, clean science vibe, nothing scary. [+ STYLE]
```

**`models/env/shop.glb`** — Cửa hàng phố đi bộ ⭐ · ~4.5
```
A cozy stylized low-poly corner shop building, warm cream and wood storefront, a striped pastel
awning over a big rounded display window, a friendly open door, a small chalkboard-shape sign (no text),
hanging round lantern lamps, a wooden crate of pastel fruit beside the door, flower boxes under the window.
Charming little neighbourhood store. [+ STYLE]
```

**`models/env/house.glb`** — Nhà khu dân cư ⭐ · ~4
```
A cozy stylized low-poly small cottage house, warm cream walls, a steep rounded terracotta roof,
a round-top wooden door, two shuttered square windows with flower boxes, a tiny chimney with a soft
puff shape, a small front step and a round doormat. Snug storybook cottage. [+ STYLE]
```

### ⛲ LANDMARK / ĐIỂM NHẤN

**`models/env/fountain.glb`** — Vòi phun quảng trường ⭐⭐⭐ · ~1.8
```
A cozy stylized low-poly plaza fountain, a round two-tier cream stone basin with soft rounded rim,
gentle light-blue water surfaces, a central pillar with a small bowl and a rounded water droplet
crowning the top, a few tiny water splashes frozen as smooth blobs. Calm cheerful landmark centerpiece. [+ STYLE]
```

**`models/env/arch.glb`** — Cổng chào lối vào ⭐⭐ · ~3.5
```
A cozy stylized low-poly welcome gate arch, two chunky rounded pastel pillars joined by a gentle
curved top beam, a small rounded banner plaque in the middle (no text), little pennant flag shapes,
soft climbing leaves on one pillar, a lantern hanging from the arch. Inviting park entrance. [+ STYLE]
```

**`models/env/clocktower.glb`** — Tháp đồng hồ (landmark định vị) ⭐ · ~7
```
A cozy stylized low-poly town clock tower, a slim rounded cream tower, a round clock face with
simple hands on each side, a pointed blush-pink cap roof with a tiny flag, a small arched window,
a soft stone base with steps. Friendly landmark you can navigate by. [+ STYLE]
```

**`models/env/signpost.glb`** — Biển chỉ đường ⭐⭐ · ~2.2
```
A cozy stylized low-poly wooden directional signpost, a rounded wood post with three blank arrow-shaped
boards pointing different directions (no text), soft rounded tips, a small lantern on top, a little
tuft of grass and a pebble at the base. Cute wayfinding sign. [+ STYLE]
```

### 🌳 THIÊN NHIÊN

**`models/env/tree.glb`** — Cây (dùng lại rất nhiều) ⭐⭐⭐ · ~3.5
```
A cozy stylized low-poly tree, a big soft rounded chunky green canopy (one or two gentle blobs),
a short sturdy warm-brown trunk with a slight taper, subtle flat leaf facets. Friendly, plump,
storybook park tree. [+ STYLE]
```

**`models/env/tree_blossom.glb`** — Cây hoa (biến thể) ⭐ · ~3.5
```
A cozy stylized low-poly blossom tree, a soft rounded canopy in blush-pink and warm cream petals,
a short curvy brown trunk, a few tiny petals resting at the base. Spring cherry-blossom cozy vibe. [+ STYLE]
```

**`models/env/bush.glb`** — Bụi / hàng rào thấp ⭐⭐ · ~0.8
```
A cozy stylized low-poly rounded shrub bush, soft mint-green chunky foliage blob, a couple of tiny
pastel flower dots, a hint of soil at the bottom. Simple cute hedge piece, tileable look. [+ STYLE]
```

**`models/env/flowerbed.glb`** — Luống hoa ⭐ · ~0.5 (rộng ~1.2)
```
A cozy stylized low-poly flower bed, a low rounded wooden border box filled with soft soil and a
cheerful cluster of chunky pastel flowers (pink, yellow, lilac, white) on short green stems. Tidy
cute garden patch. [+ STYLE]
```

**`models/env/rock.glb`** — Tảng đá trang trí ⭐ · ~0.7
```
A cozy stylized low-poly smooth boulder rock, soft rounded grey-cream stone with gentle facets,
a little moss patch and a tuft of grass at the base. Simple natural decoration. [+ STYLE]
```

**`models/env/lilypad.glb`** — Lá sen mặt hồ ⭐ · ~0.15 (rộng ~0.8)
```
A cozy stylized low-poly lily pad, a flat rounded green leaf floating, with a single cute pastel-pink
lotus flower bud. Calm pond decoration, very low and flat. [+ STYLE]
```

### 🏮 ĐỒ ĐƯỜNG PHỐ (STREET PROPS)

**`models/env/bench.glb`** — Ghế công viên ⭐⭐⭐ · cao ~0.9, dài ~1.6
```
A cozy stylized low-poly park bench, warm wooden slat seat and backrest with soft rounded edges,
chunky rounded cream-grey end legs, friendly inviting proportions, a tiny fallen leaf on the seat.
Comfortable storybook park bench. [+ STYLE]
```
> Lưu ý: engine đặt người ngồi trên MẶT ghế — giữ mặt ngồi phẳng, cao vừa phải, hướng ngồi quay +Z.

**`models/env/lamp.glb`** — Đèn đường ⭐⭐ · ~3
```
A cozy stylized low-poly street lamp, a slim rounded dark-teal post with a gentle curve at the top,
a round glass lantern head holding a soft warm honey-yellow glow bulb, a little decorative ring and a
tiny bird silhouette perched on the arm, a rounded base. Charming vintage park lamp. [+ STYLE]
```

**`models/env/bin.glb`** — Thùng rác ⭐ · ~0.9
```
A cozy stylized low-poly rounded trash bin, soft teal metal body with a gentle dome lid, a small
recycle leaf emblem shape (no text), a rounded rim and base. Tidy cute street bin. [+ STYLE]
```

**`models/env/planter.glb`** — Chậu cây phố ⭐ · ~1.2
```
A cozy stylized low-poly large street planter pot, a rounded warm-cream ceramic pot, soft soil, a
plump green bush with a few pastel flowers, gentle rounded rim. Cheerful sidewalk greenery. [+ STYLE]
```

**`models/env/kiosk.glb`** — Quầy thông báo / bản tin quảng trường ⭐ · ~2.5
```
A cozy stylized low-poly round notice kiosk, a rounded wooden column with a soft conical pastel roof,
a blank pin board wrapping around (no text), tiny paper note shapes pinned, a little flag on top.
Friendly town bulletin board. [+ STYLE]
```

---

## 3. GEN BAO NHIÊU TRƯỚC?

Gói **"Khởi động đẹp ngay"** (đủ lột xác khuôn viên hiện tại):
`academy.glb`, `library.glb`, `fountain.glb`, `tree.glb`, `bench.glb`, `lamp.glb`, `bush.glb`.

→ Thả vào `models/env/` là tôi thay toàn bộ nhà/cây/ghế/đèn/vòi phun/bụi (đang là khối primitive) bằng model, giữ nguyên vị trí + va chạm + chỗ ngồi. Các zone mở rộng (thư viện, lab, phố, khu dân cư) dùng tiếp các asset còn lại.

## 4. MẸO CHO ĐỒNG BỘ & NHẸ
- Gen **cùng 1 tool, cùng câu STYLE** cho mọi vật → ăn khớp tông màu/chất liệu.
- Nếu tool cho chọn polycount/texture: chọn **low / 1024px** để file nhẹ (mobile + đã tối ưu tốc độ).
- Cây/bụi/đèn/ghế: gen **1 bản, tôi nhân bản + xoay + đổi màu nhẹ** cho khỏi trùng.
- Giữ **gốc ở đáy, mặt chính +Z** để tôi khỏi phải xoay/juggle khi ghép.
