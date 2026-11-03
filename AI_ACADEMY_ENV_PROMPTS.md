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

---

## 5. BỘ NỘI THẤT — LỚP HỌC / THƯ VIỆN / LAB (interior)

> Thay bàn/ghế/kệ/bảng primitive trong phòng điều tra (academy1) và dùng lại cho interior các zone sau.
> Vẫn **lưu `models/env/`**, cùng SPEC + đoạn STYLE ở mục 0 (gốc đáy-giữa, mặt chính +Z, tĩnh).
> Cao mục tiêu tính theo nhân vật Chibi cao 1.8, mặt bàn ~0.75, ghế ngồi ~0.45.

**`models/env/desk_teacher.glb`** — Bàn giáo viên ⭐⭐⭐ · cao ~0.78, rộng ~1.7
```
A cozy stylized low-poly teacher's desk, a warm honey-wood rectangular desktop with soft rounded
edges and a front modesty panel, four chunky rounded legs, a small drawer on one side, a tiny
rounded pen cup and a closed book resting on top. Friendly cartoon classroom furniture. [+ STYLE]
```

**`models/env/desk_student.glb`** — Bàn học sinh ⭐⭐⭐ · ~0.7, rộng ~1.1
```
A cozy stylized low-poly small student desk, a light cream-wood sloped top with rounded edges, a
little tray lip at the front, four slim rounded legs, a small round stool-less open front. Simple
cute school desk. [+ STYLE]
```

**`models/env/chair.glb`** — Ghế ngồi ⭐⭐⭐ · ~0.9 (mặt ngồi ~0.45, quay +Z)
```
A cozy stylized low-poly wooden chair, warm wood with soft rounded back slats and a gently scooped
seat, four chunky rounded legs. Comfy friendly classroom chair, seat facing +Z. [+ STYLE]
```
> seatHeight ~0.45, seatFacing +Z (ghi vào extras như bench để tôi dùng cho "ngồi").

**`models/env/bookshelf.glb`** — Kệ sách ⭐⭐⭐ · ~2.4, rộng ~1.6
```
A cozy stylized low-poly tall bookshelf, warm wood frame with three or four shelves neatly filled
with chunky rounded books in pastel colors (red, blue, yellow, green, lilac — no text), a small
potted succulent and a round clock shape on the top shelf. Snug library bookcase. [+ STYLE]
```

**`models/env/blackboard.glb`** — Bảng xanh có chân ⭐⭐⭐ · ~2.0, rộng ~2.6
```
A cozy stylized low-poly freestanding green chalkboard on a warm-wood A-frame easel stand, soft
rounded wooden frame, a little tray at the bottom with a chunky chalk piece and an eraser, a faint
hand-drawn lightbulb doodle on the board (simple shape, no text). Friendly classroom board. [+ STYLE]
```

**`models/env/rug.glb`** — Thảm tròn ⭐⭐ · rất thấp ~0.04, rộng ~3
```
A cozy stylized low-poly round area rug, soft lilac and cream concentric rings with a gentle scalloped
edge, flat and thin, lying on the floor. Warm classroom rug. [+ STYLE]
```

**`models/env/plant_indoor.glb`** — Chậu cây trong nhà ⭐⭐ · ~1.2
```
A cozy stylized low-poly indoor potted plant, a rounded terracotta-cream pot with soft soil, a plump
leafy green bush of chunky rounded leaves, one or two tiny pastel blossoms. Cute corner greenery. [+ STYLE]
```

**`models/env/screen.glb`** — Màn hình/máy tính để bàn ⭐⭐ · ~0.55 (đặt trên bàn)
```
A cozy stylized low-poly cute desktop computer, a rounded monitor with a soft glowing pastel-blue
screen (no text), a chunky rounded keyboard and a little mouse, warm cream casing. Friendly retro
classroom computer. [+ STYLE]
```

**`models/env/poster.glb`** — Poster treo tường ⭐ · phẳng, ~1.6 cao
```
A cozy stylized low-poly flat wall poster panel, a rounded pastel frame holding a simple friendly
icon shape (a brain, a lightbulb, or a gear — pick one, no text), slight thickness so it hangs flat
on a wall, facing +Z. Cheerful classroom poster. [+ STYLE]
```
> Gen 2–3 biến thể icon (brain / lightbulb / gear) để treo quanh phòng.

**`models/env/wallclock.glb`** — Đồng hồ treo tường ⭐ · phẳng tròn ~0.5
```
A cozy stylized low-poly round wall clock, a soft cream rounded rim, a pale face with simple chunky
hands and dot markers (no numbers), a tiny top knob, facing +Z to mount flat on a wall. [+ STYLE]
```

**`models/env/window_interior.glb`** — Cửa sổ trong nhà ⭐ · ~1.3 cao, rộng ~1.6
```
A cozy stylized low-poly interior window, a soft cream rounded frame with a cross mullion, a pale
sky-blue glass pane with a couple of soft cloud shapes, a little flower box on the sill, facing +Z
to mount flat on a wall. [+ STYLE]
```

### Gói "Lớp học đẹp ngay" (gen trước):
`desk_teacher.glb`, `desk_student.glb`, `chair.glb`, `bookshelf.glb`, `blackboard.glb`, `plant_indoor.glb`, `rug.glb`.

→ Thả vào `models/env/` là tôi thay nội thất phòng điều tra (bàn/kệ/bảng/chậu/thảm), đặt ghế quanh bàn (ngồi được), và xử lý cache/scale như khuôn viên.

---

## 6. ZONE MỚI — MỞ RỘNG THẾ GIỚI (thư viện · công viên · lab)

> Cùng SPEC + đoạn STYLE mục 0. Vẫn `models/env/`, gốc đáy-giữa, mặt chính +Z, tĩnh.
> Nhiều vật **tái dùng** asset đã có → chỉ gen phần MỚI của mỗi zone.

### 📚 ZONE THƯ VIỆN (interior) — cửa vào đã có sẵn ở khuôn viên
**Tái dùng:** `bookshelf`, `chair`, `rug`, `plant_indoor`, `wallclock`, `window_interior`, `poster_*`.
**Cần gen MỚI:**

**`models/env/library_table.glb`** — Bàn đọc dài ⭐⭐⭐ · cao ~0.78, dài ~2.6
```
A cozy stylized low-poly long library reading table, warm honey-wood top with soft rounded edges,
sturdy rounded legs with a lower stretcher bar, a couple of open books and a small green reading
lamp resting on top. Inviting study table. [+ STYLE]
```

**`models/env/armchair.glb`** — Ghế bành đọc sách ⭐⭐⭐ · ~1.0 (mặt ngồi ~0.45, +Z)
```
A cozy stylized low-poly reading armchair, plump rounded cushions in soft blush or teal fabric,
chunky padded armrests, short wooden legs, a tiny folded blanket on the arm. Super comfy storybook
armchair, seat facing +Z. [+ STYLE]
```
> extras: seatHeight ~0.45, seatFacing +Z (để ngồi được).

**`models/env/globe.glb`** — Quả địa cầu ⭐⭐ · ~1.3
```
A cozy stylized low-poly world globe on a warm-wood stand, a soft pastel-blue sphere with gentle
rounded green landmass shapes (no text), a curved brass-cream meridian ring, a small round base.
Charming study globe. [+ STYLE]
```

**`models/env/book_cart.glb`** — Xe đẩy sách ⭐ · ~1.0
```
A cozy stylized low-poly rolling book cart, a warm-wood two-shelf trolley with four little rounded
wheels, neat stacks of chunky pastel books (no text), rounded push handle. Cute library cart. [+ STYLE]
```

**`models/env/card_catalog.glb`** — Tủ phiếu mục lục ⭐ · ~1.3
```
A cozy stylized low-poly library card-catalog cabinet, a warm-wood chest with a grid of small
rounded drawers each with a tiny knob, a soft rounded top with a little potted plant. Classic cozy
library cabinet. [+ STYLE]
```

**`models/env/ladder.glb`** — Thang trượt thư viện ⭐ · ~2.6
```
A cozy stylized low-poly rolling library ladder, a warm-wood slanted ladder with rounded rungs and
side rails, little wheels at the bottom, a small brass-cream top hook. Charming tall-shelf ladder. [+ STYLE]
```

**`models/env/floor_lamp.glb`** — Đèn cây đọc sách ⭐ · ~1.7
```
A cozy stylized low-poly standing floor reading lamp, a slim warm-wood pole on a round base, a soft
rounded cream lampshade with a gentle honey-yellow glow. Warm reading-nook lamp. [+ STYLE]
```

### 🌳 ZONE CÔNG VIÊN (outdoor) — mở rộng công viên + hồ
**Tái dùng:** `tree`, `tree_blossom`, `bench`, `bush`, `lamp`, `fountain`, `flowerbed`, `rock`, `lilypad`.
**Cần gen MỚI:**

**`models/env/gazebo.glb`** — Chòi nghỉ (landmark, đứng dưới được) ⭐⭐⭐ · ~3.2, rộng ~3.4
```
A cozy stylized low-poly garden gazebo pavilion, a hexagonal open structure with slim cream pillars,
a gentle pointed pastel roof with a little finial, a low rounded railing, a small bench ring inside,
soft climbing roses on one pillar. Charming park landmark. [+ STYLE]
```

**`models/env/bridge.glb`** — Cầu vòm qua hồ ⭐⭐ · dài ~3.5
```
A cozy stylized low-poly small arched wooden footbridge, warm-wood planks gently curving up and over,
rounded side railings with little posts, soft worn edges. Cute pond bridge, spanning along +Z. [+ STYLE]
```

**`models/env/picnic_table.glb`** — Bàn dã ngoại (ngồi được) ⭐⭐ · ~0.9, dài ~1.8
```
A cozy stylized low-poly picnic table with attached bench seats on both sides, warm-wood planks with
soft rounded edges, a tiny checkered cloth and a basket on top. Friendly park picnic set. [+ STYLE]
```
> extras: seatHeight ~0.45, seatFacing +Z.

**`models/env/statue.glb`** — Tượng landmark ⭐ · ~2.6
```
A cozy stylized low-poly cute statue on a rounded stone pedestal, a friendly chibi robot or an open
book sculpture in soft cream stone, gentle rounded forms, a little plaque shape (no text), moss at
the base. Charming plaza landmark. [+ STYLE]
```

**`models/env/icecream_cart.glb`** — Xe kem ⭐ · ~1.8
```
A cozy stylized low-poly ice-cream vendor cart, a rounded pastel wooden cart with a striped candy
awning, two big rounded wheels, a little menu board shape (no text), a cute ice-cream cone topper.
Cheerful park food cart. [+ STYLE]
```

**`models/env/flower_arch.glb`** — Cổng hoa ⭐ · ~2.8
```
A cozy stylized low-poly rose flower arch, two slim trellis posts joined by a gentle curved top,
covered in soft pastel-pink and white rounded blossoms and green leaves. Romantic garden archway. [+ STYLE]
```

### 🔬 ZONE LAB (interior) — dùng `lab.glb` làm vỏ ngoài
**Tái dùng:** `chair`, `screen`, `wallclock`, `plant_indoor`, `rug`.
**Cần gen MỚI:**

**`models/env/lab_bench.glb`** — Bàn thí nghiệm ⭐⭐⭐ · ~0.95, dài ~2.2
```
A cozy stylized low-poly science workbench, a clean cream-and-wood counter with soft rounded edges,
a little rack of rounded pastel beakers and flasks with colored liquid, a small funnel and a cute
petri dish, under-shelf storage. Friendly non-scary lab bench. [+ STYLE]
```

**`models/env/hologram_table.glb`** — Bàn chiếu ba chiều (landmark) ⭐⭐⭐ · ~1.4
```
A cozy stylized low-poly holographic display table, a rounded cream pedestal with a soft glowing
pastel-blue projected shape floating above (a gentle globe or a simple brain hologram), tiny light
dots rising. Wonder-inducing AI display, subtle soft glow. [+ STYLE]
```

**`models/env/robot_arm.glb`** — Cánh tay robot thân thiện ⭐⭐ · ~1.6
```
A cozy stylized low-poly friendly robotic arm on a rounded base, chunky pastel-cream segments with
soft rounded joints, a cute two-finger gripper holding a little block, a tiny glowing indicator dot.
Playful helper robot arm. [+ STYLE]
```

**`models/env/server_tower.glb`** — Máy chủ AI dễ thương ⭐⭐ · ~1.8
```
A cozy stylized low-poly AI server tower, a rounded cream cabinet with soft glowing pastel indicator
dots in a row, a gentle vent pattern, a little antenna ball on top, rounded feet. Cute friendly
computer, no scary cables. [+ STYLE]
```

**`models/env/microscope.glb`** — Kính hiển vi ⭐ · ~0.6 (đặt trên bàn)
```
A cozy stylized low-poly toy microscope, a rounded pastel body with a soft eyepiece, a little stage
and a cute adjustment knob, cream-and-teal colors. Friendly science prop. [+ STYLE]
```

### Gợi ý thứ tự gen
1. **Thư viện** (mở khu đầu tiên liền mạch với cửa sẵn có): `library_table, armchair, globe` (+ tái dùng bookshelf/chair/rug/plant).
2. **Công viên**: `gazebo, bridge, picnic_table` (+ tái dùng tree/bench/bush/lamp).
3. **Lab**: `lab_bench, hologram_table, robot_arm, server_tower`.

→ Gen nhóm nào xong tôi sẽ **dựng zone đó** (layout + NPC + nhiệm vụ học AI) và nối cổng cho đi lại liền mạch.
