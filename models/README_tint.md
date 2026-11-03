# Chibi v2: detective / teacher / student

- glTF 2.0 binary, texture palette 256px nhung san, 1 material, ~17-19k tam giac, ~1.0-1.1 MB moi file
- Y-up, mat quay +Z, rest pose A-pose, cao dung 1.8 (chan o y=0), dau ~50% chieu cao
- Animation: "Idle" (2.4s loop), "Walk" (0.8s loop, di tai cho, khong root motion)
- Xuong: Root, Hips, Spine, Chest, Neck, Head, Left/Right UpperArm, LowerArm, Hand, Left/Right UpperLeg, LowerLeg, Foot
- Detective cam kinh lup (RightHand). Teacher cam tablet (LeftHand), tay trai giu tablet ca khi Idle lan Walk.

## Tint mau cho NPC dung student.glb

Texture la cac o mau phang 32x32 px; vi tri tung o nam trong gltf.scene.userData.tintCells
(student: shirt, shirt_trim, shorts, hair, pack, pack_dark, pack_strap, shoe, socks...).

Goi y vai bo mau tuoi:
- { shirt:'#FF6FA8', shorts:'#4B6BFF', shoe:'#FFD447', pack:'#7ED957' }
- { shirt:'#FFD447', shorts:'#36C2B4', shoe:'#FF5A5F', pack:'#8E5BD6' }
- { shirt:'#9B7BFF', shorts:'#FF9F43', shoe:'#5EC8FF', hair:'#2E2230' }
- { shirt:'#7ED957', shorts:'#5A4BD6', shoe:'#FF8FAB', hair:'#C2703D' }

```js
// clone.userData.tintCells = gltf.scene.userData.tintCells  (SkeletonUtils.clone khong copy userData)
function tintNPC(root, colors) {
  const cells = root.userData.tintCells;
  root.traverse(o => {
    if (!o.isMesh) return;
    const src = o.material.map.image;
    const cv = document.createElement('canvas');
    cv.width = src.width; cv.height = src.height;
    const ctx = cv.getContext('2d');
    ctx.drawImage(src, 0, 0);
    for (const [k, c] of Object.entries(colors)) {
      const r = cells[k]; if (!r) continue;
      ctx.fillStyle = c; ctx.fillRect(r[0], r[1], r[2], r[3]);
    }
    const tex = new THREE.CanvasTexture(cv);
    tex.flipY = false; tex.colorSpace = THREE.SRGBColorSpace;
    o.material = o.material.clone();
    o.material.map = tex;
  });
}
```
Nen cache texture theo bo mau neu nhieu NPC trung mau.
