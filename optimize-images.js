const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = './_source-photos';
const outputDir = './public/work';

const mappings = {
  '04b143f0-c5f2-439d-b114-b1b7218459c4.jpg': { cat: 'chairs', name: 'cream-upholstered-chair-front' },
  '071336e1-e96b-4d5a-ba91-03528d04a55b.jpg': { cat: 'dining', name: 'luxury-dining-set-formal' },
  '13bfc10e-9313-4c04-9447-b408fa914059.jpg': { cat: 'sofas', name: 'modern-sofa-arrangement' },
  '3bdb6504-e8f2-4464-9e4f-e04b25332887.jpg': { cat: 'chairs', name: 'chair-embroidery-detail' },
  '610873387_18077604608585088_7880401016485259274_n.jpg': { cat: 'curtains', name: 'luxury-office-curtains-doha' },
  '611160350_18077604620585088_7305433656447596940_n.jpg': { cat: 'curtains', name: 'elegant-curtains-interior-design' },
  '612453202_18077604599585088_1279551739301229999_n.jpg': { cat: 'curtains', name: 'floor-to-ceiling-curtains-qatar' },
  '7d5d2c36-2c1d-4b0a-a14f-587e54a54ed8.jpg': { cat: 'moving', name: 'moving-truck-loading' },
  '8449efff-ff00-47a8-9431-7485a85ae30d.jpg': { cat: 'chairs', name: 'upholstered-chair-detail' },
  'b8dd42a0-d006-40e3-98ef-1c19faf5e20a.jpg': { cat: 'sofas', name: 'formal-seating-arrangement' },
  'e4a410f3-850a-4f58-a603-aaef37f39dd6.jpg': { cat: 'moving', name: 'careful-furniture-handling' },
  'e8576615-b885-40e7-849d-ca6003db2386.jpg': { cat: 'dining', name: 'elegant-dining-interior' }
};

async function optimizeImage(inputPath, outputPath) {
  return sharp(inputPath)
    .resize(1000, 1000, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({ quality: 80 })
    .toFile(outputPath);
}

async function processImages() {
  const categories = new Set(Object.values(mappings).map(m => m.cat));

  categories.forEach(cat => {
    const dir = path.join(outputDir, cat);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  const files = fs.readdirSync(sourceDir);
  let processed = 0;

  for (const file of files) {
    const mapping = mappings[file];
    if (!mapping) {
      console.warn(`⚠ No mapping for ${file}`);
      continue;
    }

    const inputPath = path.join(sourceDir, file);
    const outputName = `${mapping.name}.webp`;
    const outputPath = path.join(outputDir, mapping.cat, outputName);

    try {
      await optimizeImage(inputPath, outputPath);
      console.log(`✓ ${mapping.cat}/${outputName}`);
      processed++;
    } catch (err) {
      console.error(`✗ Error: ${file} - ${err.message}`);
    }
  }

  console.log(`\n✅ Done! ${processed}/${files.length} images processed.`);
}

processImages().catch(console.error);
