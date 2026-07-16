const { Jimp } = require('jimp');

async function run() {
  try {
    const img = await Jimp.read('public/assets/why_choose_center.png');
    // Test passing quality in options parameter
    await img.write('public/assets/why_choose_center_test.jpg', { quality: 75 });
    console.log('Successfully wrote with quality option!');
  } catch (e) {
    console.error('Error writing with quality option:', e);
  }
}

run();
