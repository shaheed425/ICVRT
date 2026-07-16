const { Jimp } = require('jimp');
const fs = require('fs');

async function run() {
  const sourcePath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784200411115.jpg';
  const targetPath = 'public/assets/hero_engineer.jpg';

  console.log('Reading and cropping the new uploaded mockup graphic...');

  try {
    const image = await Jimp.read(sourcePath);
    
    // Crop coordinates on 1024x485 size:
    // x: 340 to 1024 (width = 684) to include the safety engineer and slanting cards
    // y: 60 to 400 (height = 340) to crop out top navbar and bottom dark blue band
    image.crop({ x: 340, y: 60, w: 684, h: 340 });
    
    await image.write(targetPath);
    console.log('Successfully cropped and saved to:', targetPath);
  } catch (e) {
    console.error('Error cropping image:', e);
  }
}

run();
