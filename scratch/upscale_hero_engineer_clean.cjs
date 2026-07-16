const { Jimp } = require('jimp');

async function run() {
  const sourcePath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784200411115.jpg';
  const targetPath = 'public/assets/hero_engineer.png';

  console.log('Upscaling image and shifting crop to remove cut-off text characters...');

  try {
    const image = await Jimp.read(sourcePath);
    
    // Shifted x to 385 to skip "CE" characters on the left, maintaining aspect ratio
    image.crop({ x: 385, y: 60, w: 639, h: 318 });
    
    // Resize to high-density 1368 x 680
    image.resize({ w: 1368, h: 680 });
    
    await image.write(targetPath);
    console.log('Upscaled clean image successfully saved to:', targetPath);
  } catch (e) {
    console.error('Error cropping image:', e);
  }
}

run();
