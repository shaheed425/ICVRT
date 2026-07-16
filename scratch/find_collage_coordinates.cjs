const { Jimp } = require('jimp');

async function run() {
  const sourcePath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784221588661.jpg';

  try {
    const img = await Jimp.read(sourcePath);
    console.log(`Mockup Image dimensions: Width = ${img.width}, Height = ${img.height}`);
  } catch (e) {
    console.error('Error reading mockup image:', e);
  }
}

run();
