const { Jimp } = require('jimp');
const fs = require('fs');

async function run() {
  const sourcePath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784200411115.jpg';
  const targetPath = 'public/assets/hero_engineer.png';

  console.log('Reading, upscaling and sharpening the mockup graphic...');

  try {
    const image = await Jimp.read(sourcePath);
    
    // Crop coordinates
    image.crop({ x: 340, y: 60, w: 684, h: 340 });
    
    // Upscale to 2x (1368 width, 680 height) for high-DPI crispness
    image.resize({ w: 1368, h: 680 });
    
    // Save as lossless PNG to avoid compression blur
    await image.write(targetPath);
    console.log('Successfully upscaled and saved to:', targetPath);
  } catch (e) {
    console.error('Error upscaling image:', e);
  }
}

run();
