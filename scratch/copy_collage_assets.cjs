const fs = require('fs');
const path = require('path');

const handshakeSource = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/collage_handshake_1784224199253.png';
const skylineSource = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/collage_skyline_1784224225239.png';

const targetDir = 'public/assets';

try {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  fs.copyFileSync(handshakeSource, path.join(targetDir, 'why_choose_left.png'));
  fs.copyFileSync(skylineSource, path.join(targetDir, 'why_choose_right.png'));
  
  console.log('Collage assets copied successfully!');
} catch (e) {
  console.error('Error copying collage assets:', e);
}
