const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa';
const assetsDir = 'public/assets';

const srcFile = 'hero_male_engineer_1784228256771.png';
const destFile = 'hero_safety_refinery.jpg';

async function run() {
  console.log('Optimizing and deploying new hero background image...');

  const inputPath = path.join(brainDir, srcFile);
  const outputPath = path.join(assetsDir, destFile);

  if (fs.existsSync(inputPath)) {
    try {
      console.log(`Processing: ${srcFile} -> ${destFile}...`);
      const img = await Jimp.read(inputPath);
      
      // Save with quality 75 config
      await img.write(outputPath, { quality: 75 });
      
      const origStats = fs.statSync(inputPath);
      const optStats = fs.statSync(outputPath);
      
      const savings = ((origStats.size - optStats.size) / origStats.size * 100).toFixed(1);
      console.log(`Saved ${destFile} - Size: ${(optStats.size / 1024).toFixed(1)} KB (Original: ${(origStats.size / 1024).toFixed(1)} KB, Saved: ${savings}%)`);
    } catch (e) {
      console.error(`Error processing:`, e);
    }
  } else {
    console.log(`Source file not found: ${srcFile}`);
  }

  console.log('Hero background deployment complete!');
}

run();
