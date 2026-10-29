const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT =
  "public/sign-boards/regulatory-5.jpg";

const OUTPUT =
  "public/signs/regulatory";

if (!fs.existsSync(OUTPUT)) {
  fs.mkdirSync(OUTPUT, { recursive: true });
}

async function extract() {
  const image = sharp(INPUT);

  const metadata = await image.metadata();

  console.log(
    `Image Size: ${metadata.width} x ${metadata.height}`
  );

  const columns = 5;

  const rows = 8;

  const startX = 12;
  const startY = 14;

  const cellWidth = 135;
  const cellHeight = 135;

  const gapX = 8;
  const gapY = 37;

  let index = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const left =
        startX + col * (cellWidth + gapX);

      const top =
        startY + row * (cellHeight + gapY);

      await sharp(INPUT)
        .extract({
          left,
          top,
          width: cellWidth,
          height: cellHeight,
        })
        .toFile(
          path.join(
            OUTPUT,
            `sign-${index}.png`
          )
        );

      console.log(
        `Saved sign-${index}.png`
      );

      index++;
    }
  }
}

extract();