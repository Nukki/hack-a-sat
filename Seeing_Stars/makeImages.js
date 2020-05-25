const Jimp = require('jimp');
const fs = require('fs');


const makeImage = (imageNumber) => {
  const raw = fs.readFileSync(__dirname + `/data/image${imageNumber}.txt`);
  let data = raw.toString()
            .split('\n')
            .filter(el => el.length > 200)  // remove non-image data
            .map(el => el.split(',')
                      .map(el => { // turn numbers to hex RGBA colors, A is always FF
                        let chunk = parseInt(el).toString(16); // e.g. 255 to FF
                        return parseInt(`${chunk.repeat(3)}FF`, 16)
                      }))

  let image = new Jimp(128, 128, (err, image) => {
    if (err) throw err;

    data.forEach((row, y) => {
      row.forEach((color, x) => image.setPixelColor(color, x, y));
    });

    image.write(__dirname + `/png/image${imageNumber}.png`, (err) => {
      if (err) throw err;
    });
  });
}

for (let i = 1; i <= 5; i++) makeImage(i);
