/**
 * Regenerates every brand raster in /public from one source of truth: the
 * two-door cabinet mark defined by `markArt()` below.
 *
 * Run with `node generate-brand-assets.js` after changing a colour or the
 * geometry — never hand-edit the PNGs, they are all derived.
 *
 * Why the mark is flat geometry and not an illustration: these files get
 * rasterised down to 16x16 for the browser tab. The door gap is 32/512 units
 * so it survives as a whole pixel at that size; the handles are the only
 * detail fine enough to blur out, and losing them keeps the silhouette intact.
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const OUT = './public';

// Site tokens: --primary is hsl(18 95% 55%). The navy is lifted off the
// --foreground value so the tile still reads blue, not black, in a dark tab.
const ORANGE = '#F9611F';
const NAVY = '#12283F';
const CREAM = '#FAF8F5';

/** The mark itself, in a 512x512 coordinate space, centred on (256, 256). */
const markArt = () => `
  <rect x="120" y="76" width="120" height="320" rx="24" fill="${ORANGE}"/>
  <rect x="212" y="196" width="16" height="80" rx="8" fill="${NAVY}"/>
  <rect x="272" y="76" width="120" height="320" rx="24" fill="${ORANGE}"/>
  <rect x="284" y="196" width="16" height="80" rx="8" fill="${NAVY}"/>
  <rect x="152" y="396" width="28" height="40" rx="10" fill="${ORANGE}"/>
  <rect x="332" y="396" width="28" height="40" rx="10" fill="${ORANGE}"/>`;

/**
 * 16px variant. At that size the legs are 1.25px tall and the door gap lands
 * on a single antialiased pixel, so the full mark collapses into one orange
 * blob. This drops the legs and handles and widens the gap to 64 units — a
 * clean 2px channel at 16px — leaving 3px margin / 4px door / 2px gap /
 * 4px door / 3px margin. The corner radius shrinks to match.
 */
const smallMarkArt = () => `
  <rect x="88" y="96" width="136" height="320" rx="24" fill="${ORANGE}"/>
  <rect x="288" y="96" width="136" height="320" rx="24" fill="${ORANGE}"/>`;

/**
 * @param {number} radius corner radius in 512-space. Square (0) for
 *   apple-touch-icon and the Android icons, which get masked by the OS.
 * @param {number} scale shrinks the art about the centre for maskable icons,
 *   whose safe zone is the middle 80% circle.
 * @param {function} art geometry to draw.
 */
const tile = (radius, scale = 1, art = markArt) => Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <rect width="512" height="512" rx="${radius}" fill="${NAVY}"/>
    <g transform="translate(256 256) scale(${scale}) translate(-256 -256)">${art()}</g>
  </svg>`,
);

const ROUNDED = tile(112);
const SQUARE = tile(0);
const MASKABLE = tile(0, 0.78);
const SMALL = tile(64, 1, smallMarkArt);

const png = (svg, size) => sharp(svg).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

/**
 * ICO container around PNG frames. Every browser that still asks for
 * favicon.ico understands PNG-in-ICO, so there is no BMP path here.
 */
function buildIco(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);

  let offset = 6 + frames.length * 16;
  const entries = frames.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });

  return Buffer.concat([header, ...entries, ...frames.map((f) => f.data)]);
}

/**
 * 1200x630 share card. Built over first-party work photography rather than the
 * stock render the old social.jpg used — and at the exact dimensions
 * app/layout.tsx declares, so Facebook/X/WhatsApp stop cropping it.
 */
async function buildSocialCard() {
  // The fitted-kitchen shot, not the stock render: it shows the wall cabinets
  // the headline promises, and a 1.91:1 centre crop drops the job-site clutter
  // along the bottom of the frame.
  const photo = await sharp('./public/work/kitchens/fitted-kitchen-white-cabinets-black-worktop.webp')
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .toBuffer();

  const overlay = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <defs>
        <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stop-color="${NAVY}" stop-opacity="0.97"/>
          <stop offset="45%"  stop-color="${NAVY}" stop-opacity="0.92"/>
          <stop offset="72%"  stop-color="${NAVY}" stop-opacity="0.62"/>
          <stop offset="100%" stop-color="${NAVY}" stop-opacity="0.18"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#scrim)"/>

      <g transform="translate(72 56) scale(0.1875)">
        <rect width="512" height="512" rx="112" fill="${ORANGE}"/>
        <g>
          <rect x="120" y="76" width="120" height="320" rx="24" fill="${NAVY}"/>
          <rect x="212" y="196" width="16" height="80" rx="8" fill="${ORANGE}"/>
          <rect x="272" y="76" width="120" height="320" rx="24" fill="${NAVY}"/>
          <rect x="284" y="196" width="16" height="80" rx="8" fill="${ORANGE}"/>
          <rect x="152" y="396" width="28" height="40" rx="10" fill="${NAVY}"/>
          <rect x="332" y="396" width="28" height="40" rx="10" fill="${NAVY}"/>
        </g>
      </g>

      <text x="188" y="122" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
            font-size="44" font-weight="700" letter-spacing="3" fill="#FFFFFF">DOHA INTERIORS</text>

      <text x="72" y="300" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
            font-size="64" font-weight="700" fill="#FFFFFF">Wall cabinets,</text>
      <text x="72" y="374" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
            font-size="64" font-weight="700" fill="${ORANGE}">built to fit.</text>

      <text x="72" y="436" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
            font-size="25" fill="${CREAM}" opacity="0.88">Kitchens &#183; Wardrobes &#183; TV units &#183; Curtains</text>
      <text x="72" y="472" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
            font-size="25" fill="${CREAM}" opacity="0.88">Sofas &amp; majlis &#183; Flooring &#183; Furniture moving</text>

      <rect x="0" y="550" width="1200" height="80" fill="${ORANGE}"/>
      <text x="72" y="600" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
            font-size="28" font-weight="700" fill="${NAVY}">Free survey &#183; Fixed quote in 48 hours &#183; +974 6661 9808</text>
    </svg>`);

  await sharp(photo)
    .composite([{ input: overlay, top: 0, left: 0 }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(OUT, 'social.jpg'));
}

async function main() {
  // favicon.svg is emitted here rather than hand-maintained so the vector a
  // modern browser shows can never drift from the rasters below.
  // NB: no "--" sequences in the comment; that is an XML parse error and
  // silently kills the whole file in every browser.
  fs.writeFileSync(
    path.join(OUT, 'favicon.svg'),
    `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Doha Interiors">
  <!-- Generated by generate-brand-assets.js. Do not edit by hand. -->
  <rect width="512" height="512" rx="112" fill="${NAVY}"/>${markArt()}
</svg>\n`,
  );
  console.log('✓ favicon.svg');

  const targets = [
    ['favicon-16x16.png', SMALL, 16],
    ['favicon-32x32.png', ROUNDED, 32],
    ['icon.png', ROUNDED, 512],
    ['apple-touch-icon.png', SQUARE, 180],
    ['android-chrome-192x192.png', SQUARE, 192],
    ['android-chrome-512x512.png', SQUARE, 512],
    ['icon-maskable-512x512.png', MASKABLE, 512],
  ];

  for (const [name, svg, size] of targets) {
    let img = sharp(svg).resize(size, size);
    // iOS rejects alpha in apple-touch-icon and composites it on black.
    if (name === 'apple-touch-icon.png') img = img.flatten({ background: NAVY });
    fs.writeFileSync(path.join(OUT, name), await img.png({ compressionLevel: 9 }).toBuffer());
    console.log(`✓ ${name} (${size}x${size})`);
  }

  const ico = buildIco(
    await Promise.all(
      [16, 32, 48].map(async (size) => ({
        size,
        data: await png(size === 16 ? SMALL : ROUNDED, size),
      })),
    ),
  );
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), ico);
  fs.writeFileSync(path.join(OUT, 'icon.ico'), ico);
  console.log(`✓ favicon.ico + icon.ico (16/32/48, ${ico.length} bytes)`);

  await buildSocialCard();
  console.log('✓ social.jpg (1200x630)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
