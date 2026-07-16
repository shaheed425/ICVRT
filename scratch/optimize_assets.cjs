const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const assetsDir = 'public/assets';
const filesToConvert = [
  'training_experience.png',
  'hero_illustration.png',
  'hero_safety_refinery.png',
  'why_choose_left.png',
  'why_choose_center.png',
  'why_choose_right.png'
];

async function run() {
  console.log('Optimizing images by converting to 75% quality compressed JPEGs...');

  for (const filename of filesToConvert) {
    const inputPath = path.join(assetsDir, filename);
    const outputPath = path.join(assetsDir, filename.replace('.png', '.jpg'));

    if (fs.existsSync(inputPath)) {
      try {
        console.log(`Processing: ${filename}...`);
        const img = await Jimp.read(inputPath);
        
        // Pass JPEG quality as a parameter to the write options
        await img.write(outputPath, { quality: 75 });
        
        const origStats = fs.statSync(inputPath);
        const optStats = fs.statSync(outputPath);
        
        const savings = ((origStats.size - optStats.size) / origStats.size * 100).toFixed(1);
        console.log(`Saved ${filename.replace('.png', '.jpg')} - Size: ${(optStats.size / 1024).toFixed(1)} KB (Original: ${(origStats.size / 1024).toFixed(1)} KB, Saved: ${savings}%)`);
      } catch (e) {
        console.error(`Error processing ${filename}:`, e);
      }
    } else {
      console.log(`File not found: ${filename}`);
    }
  }

  console.log('Image asset optimization complete!');
}

run();
