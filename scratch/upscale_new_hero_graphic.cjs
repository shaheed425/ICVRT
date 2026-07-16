const { Jimp } = require('jimp');

async function run() {
  const sourcePath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784206523301.jpg';
  const targetPath = 'public/assets/hero_engineer.png';

  console.log('Reading and upscaling the new clean raw graphic...');

  try {
    const image = await Jimp.read(sourcePath);
    
    // Upscale to high-density 1920px width (maintaining original aspect ratio)
    image.resize({ w: 1920, h: 1011 }); // 1920 width, keeping aspect ratio clean
    
    await image.write(targetPath);
    console.log('Upscaled new raw graphic successfully saved to:', targetPath);
  } catch (e) {
    console.error('Error upscaling new image:', e);
  }
}

run();
