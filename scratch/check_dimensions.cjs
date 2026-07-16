const { Jimp } = require('jimp');

async function run() {
  const sourcePath = 'C:/Users/SHAHEED/AppData/Local/Temp/media__1784206523301.jpg'; // Wait, let's verify if the temporary path or the copy in brain folder is better
  const brainPath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784206523301.jpg';

  try {
    const img = await Jimp.read(brainPath);
    console.log(`Original dimensions: Width = ${img.width}, Height = ${img.height}`);
  } catch (e) {
    console.error('Error reading image:', e);
  }
}

run();
