const fs = require('fs');
const path = require('path');

const sourcePath = 'C:/Users/SHAHEED/.gemini/antigravity-ide/brain/84b4d8e9-2d81-4f97-ad16-3269332baffa/hero_safety_refinery_1784208904712.png';
const targetDir = 'public/assets';
const targetPath = path.join(targetDir, 'hero_safety_refinery.png');

try {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.copyFileSync(sourcePath, targetPath);
  console.log('Asset copied successfully to:', targetPath);
} catch (e) {
  console.error('Error copying asset:', e);
}
