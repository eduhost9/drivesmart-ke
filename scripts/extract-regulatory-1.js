const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT = "public/sign-boards/regulatory-1.jpg";
const OUTPUT = "public/signs/regulatory-1";

if (!fs.existsSync(OUTPUT)) {
  fs.mkdirSync(OUTPUT, { recursive: true });
}

async function extract() {
  const metadata = await sharp(INPUT).metadata();

  console.log("WIDTH :", metadata.width);
  console.log("HEIGHT:", metadata.height);

  const cols = 4;
  const rows = 7;

  const cellWidth = Math.floor(metadata.width / cols);
  const cellHeight = Math.floor(metadata.height / rows);

  let count = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {

      const left = col * cellWidth;
      const top = row * cellHeight;

      try {
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
              `sign-${count}.png`
            )
          );

        console.log(`Extracted sign-${count}`);
      } catch (err) {
        console.log(
          `Failed sign-${count}`,
          err.message
        );
      }

      count++;
    }
  }
}

extract();