const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT =
  "public/sign-boards/regulatory-3.jpg";

const OUTPUT =
  "public/signs/regulatory-3";

if (!fs.existsSync(OUTPUT)) {
  fs.mkdirSync(OUTPUT, {
    recursive: true,
  });
}

async function extract() {
  const cols = 4;
  const rows = 5;

  // Grid cell size
  const cellWidth = 184;
  const cellHeight = 205;

  // Actual tile size
  const signWidth = 160;
  const signHeight = 168;

  // Center crop inside each grid cell
  const offsetX = Math.floor(
    (cellWidth - signWidth) / 2
  );

  const offsetY = Math.floor(
    (cellHeight - signHeight) / 2
  );

  let count = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {

      const left =
        col * cellWidth + offsetX;

      const top =
        row * cellHeight + offsetY;

      await sharp(INPUT)
        .extract({
          left,
          top,
          width: signWidth,
          height: signHeight,
        })
        .toFile(
          path.join(
            OUTPUT,
            `sign-${count}.png`
          )
        );

      console.log(
        `Extracted sign-${count}.png`
      );

      count++;
    }
  }

  console.log("Finished.");
}

extract().catch(console.error);