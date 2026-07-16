const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa';
const assetsDir = 'public/assets';

const filesToConvert = [
  { src: 'course_fire_safety_1784225274930.png', dest: 'course_fire_safety.jpg' },
  { src: 'course_ohs_1784225294939.png', dest: 'course_ohs.jpg' },
  { src: 'course_nebosh_1784225315781.png', dest: 'course_nebosh.jpg' },
  { src: 'course_environmental_1784225335757.png', dest: 'course_environmental.jpg' },
  { src: 'course_safety_audit_1784225352818.png', dest: 'course_safety_audit.jpg' },
  { src: 'course_construction_1784225370998.png', dest: 'course_construction.jpg' }
];

async function run() {
  console.log('Optimizing and deploying course images...');

  for (const item of filesToConvert) {
    const inputPath = path.join(brainDir, item.src);
    const outputPath = path.join(assetsDir, item.dest);

    if (fs.existsSync(inputPath)) {
      try {
        console.log(`Processing: ${item.src} -> ${item.dest}...`);
        const img = await Jimp.read(inputPath);
        
        // Pass JPEG quality as a parameter to the write options
        await img.write(outputPath, { quality: 75 });
        
        const origStats = fs.statSync(inputPath);
        const optStats = fs.statSync(outputPath);
        
        const savings = ((origStats.size - optStats.size) / origStats.size * 100).toFixed(1);
        console.log(`Saved ${item.dest} - Size: ${(optStats.size / 1024).toFixed(1)} KB (Original: ${(origStats.size / 1024).toFixed(1)} KB, Saved: ${savings}%)`);
      } catch (e) {
        console.error(`Error processing ${item.src}:`, e);
      }
    } else {
      console.log(`Source file not found: ${item.src}`);
    }
  }

  console.log('Course image deployment complete!');
}

run();
