const { Jimp } = require('jimp');
const fs = require('fs');

async function run() {
  const sourcePath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784198936086.jpg';
  const targetPath = 'public/assets/hero_student.jpg';

  console.log('Reading and cropping the original uploaded graphic...');

  try {
    const image = await Jimp.read(sourcePath);
    
    // Crop coordinates on 1024x682 size:
    // x: 440 to 1024 (width = 584) to include the floating cards and the student
    // y: 75 to 580 (height = 505) to crop out top navbar and bottom stats bar
    image.crop({ x: 440, y: 75, w: 584, h: 505 });
    
    await image.write(targetPath);
    console.log('Successfully cropped and saved to:', targetPath);
  } catch (e) {
    console.error('Error cropping image:', e);
  }
}

run();
