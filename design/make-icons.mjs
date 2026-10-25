// Builds the site icons from the headshot.
// Usage: node design/make-icons.mjs
//   src/app/icon.png        round photo, edge to edge (browser tab)
//   src/app/apple-icon.png  square photo (iOS rounds the corners itself)

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "public", "new-profile.png");
// Tight square around the face so it still reads at 16-32px
const face = { left: 255, top: 75, width: 680, height: 680 };

const size = 192;
await sharp(source)
  .extract(face)
  .resize(size, size)
  .composite([
    {
      input: Buffer.from(`<svg width="${size}" height="${size}"><circle cx="50%" cy="50%" r="50%" fill="#fff"/></svg>`),
      blend: "dest-in",
    },
  ])
  .png({ palette: true, quality: 90 })
  .toFile(join(root, "src", "app", "icon.png"));

await sharp(source).extract(face).resize(180, 180).png({ palette: true, quality: 90 }).toFile(join(root, "src", "app", "apple-icon.png"));

console.log("ok src/app/icon.png, src/app/apple-icon.png");
