const { Jimp } = require('jimp');

async function run() {
  const collageMockupPath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784221588661.jpg';
  const cleanEngineerMockupPath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/media__1784200411115.jpg';

  console.log('Cropping collage images with clean text-free safety engineer source...');

  try {
    const collageMockup = await Jimp.read(collageMockupPath);
    const cleanMockup = await Jimp.read(cleanEngineerMockupPath);

    // 1. Handshake card (Left background card) - cropped from collage mockup
    const leftCard = collageMockup.clone().crop({ x: 28, y: 350, w: 155, h: 220 });
    await leftCard.write('public/assets/why_choose_left.png');
    
    // 2. Clean Safety engineer card (Center foreground card) - cropped from clean Hero visual
    // Shifting coordinates to extract only the safety engineer (without the three cards on the right)
    const centerCard = cleanMockup.clone().crop({ x: 385, y: 60, w: 225, h: 318 });
    centerCard.resize({ w: 300, h: 424 }); // Resize to make it high resolution
    await centerCard.write('public/assets/why_choose_center.png');
    
    // 3. Skyscrapers card (Right background card) - cropped from collage mockup
    const rightCard = collageMockup.clone().crop({ x: 375, y: 330, w: 130, h: 240 });
    await rightCard.write('public/assets/why_choose_right.png');

    console.log('All collage images successfully cropped cleanly!');
  } catch (e) {
    console.error('Error cropping collage images:', e);
  }
}

run();
