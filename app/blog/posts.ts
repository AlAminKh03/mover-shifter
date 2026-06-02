import { SITE } from "@/config/site";

/**
 * Blog content lives here as structured blocks (not raw HTML) so every article
 * renders with consistent, on-brand styling and stays safe to author.
 *
 * SEO intent: each post targets a real, high-intent search theme for interiors
 * and home services in Qatar. The content is genuinely useful and general —
 * brand mentions for {@link SITE} are kept light (a callout + a closing CTA)
 * so the pages read as helpful guides, not adverts.
 */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  /** Branded tip box — the only place brand voice appears mid-article. */
  | { type: "callout"; text: string };

/**
 * Photographer attribution for a stock hero image. Rendered as the standard
 * "Photo by [name] on Unsplash" credit with links back to the photographer
 * and to Unsplash, per Unsplash's attribution guidelines.
 */
export type ImageCredit = {
  name: string;
  /** Photographer's Unsplash profile, e.g. https://unsplash.com/@username */
  profileUrl: string;
  /** Canonical Unsplash page for the specific photo. */
  photoUrl: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  /** ~155-char meta description / card summary. */
  excerpt: string;
  category: string;
  /** ISO date (YYYY-MM-DD). */
  datePublished: string;
  dateModified: string;
  readingTime: string;
  heroImage: string;
  heroAlt: string;
  credit: ImageCredit;
  keywords: string[];
  /** Lead paragraph shown under the H1 and used in structured data. */
  intro: string;
  content: Block[];
};

export const posts: BlogPost[] = [
  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "kitchen-cabinets-qatar-guide",
    title: "How to Choose Kitchen Cabinets in Qatar: The Complete 2026 Guide",
    excerpt:
      "Materials, layouts, finishes, hardware and realistic costs for kitchen cabinets in Qatar — a practical guide to planning a kitchen that survives Doha's heat and humidity.",
    category: "Kitchens",
    datePublished: "2026-01-14",
    dateModified: "2026-05-20",
    readingTime: "11 min read",
    heroImage: u("1764526624453-db32c24eca55"),
    heroAlt: "A modern kitchen with wooden cabinets and a central island",
    credit: {
      name: "Clay Banks",
      profileUrl: "https://unsplash.com/@claybanks",
      photoUrl:
        "https://unsplash.com/photos/modern-kitchen-with-wooden-cabinets-and-island-XU_ODlSO9ac",
    },
    keywords: [
      "kitchen cabinets Qatar",
      "kitchen cabinet maker Doha",
      "fitted kitchen Qatar",
      "kitchen design Doha",
      "custom cabinets Qatar",
    ],
    intro:
      "A kitchen is the hardest-working room in any Qatari home, and the cabinets are the part you touch every day. This guide walks through the decisions that actually matter — carcass material, door finish, layout, hardware and budget — with Qatar's climate and the realities of villa and apartment living kept front of mind.",
    content: [
      { type: "h2", text: "Start with the carcass, not the door" },
      {
        type: "p",
        text: "Most people choose a kitchen by its door colour. The far more important decision is the carcass — the box behind the door — because that is what carries weight, resists moisture and decides how long the kitchen lasts. In Qatar, where indoor humidity swings whenever a door opens to 45°C outside air, the carcass material is the single biggest predictor of how a kitchen ages.",
      },
      {
        type: "ul",
        items: [
          "Moisture-resistant MDF (MR-MDF): the practical default for Qatar. Dense, stable, takes paint and laminate well, and handles humidity far better than standard MDF.",
          "Marine or moisture-resistant plywood: stronger screw-holding and lighter than MDF — worth the premium for tall larder units and anything carrying heavy stone tops.",
          "Particleboard / standard MDF: cheapest up front, but swells permanently if water reaches an unsealed edge. Avoid for under-sink and dishwasher runs.",
        ],
      },
      {
        type: "p",
        text: "Whatever the core, the edges must be fully sealed. Exposed MDF edges under a sink are the most common cause of cabinet failure we see in Qatar kitchens — a single slow leak wicks in and the panel balloons within months.",
      },
      { type: "h2", text: "Door finishes that work in Qatar's light and heat" },
      {
        type: "p",
        text: "Qatar's strong natural light is unforgiving on cheap finishes — gloss shows every fingerprint and high heat can lift poorly bonded laminates. Here is how the common options compare:",
      },
      {
        type: "h3",
        text: "Laminate and acrylic",
      },
      {
        type: "p",
        text: "High-pressure laminate is the workhorse: durable, affordable and available in hundreds of colours and woodgrains. Acrylic gives a deep, mirror-like gloss for a modern look but needs careful cleaning to avoid micro-scratches. Both handle Qatar's climate well when edge-banded properly.",
      },
      { type: "h3", text: "Painted MDF (lacquer)" },
      {
        type: "p",
        text: "A sprayed lacquer finish gives the seamless, hand-built look many villa kitchens want. It is repairable and timeless, but costs more and takes longer. Insist on a proper primer-and-topcoat system rather than a single coat, or the colour will chip at the edges.",
      },
      { type: "h3", text: "Veneer and solid wood" },
      {
        type: "p",
        text: "Real wood veneer brings warmth that print laminates can't match. In Qatar it must be sealed against humidity and kept out of direct, prolonged sun, which can fade and dry the timber over years.",
      },
      { type: "h2", text: "Plan the layout around how you actually cook" },
      {
        type: "p",
        text: "The classic 'work triangle' between sink, hob and fridge still holds, but modern Qatari kitchens increasingly separate a show kitchen from a back or 'dirty' kitchen for heavy cooking. If you cook with a lot of oil and spice, plan for that early — it changes ventilation, surfaces and cabinet placement.",
      },
      {
        type: "ol",
        items: [
          "Measure the room precisely, including ceiling height, window sills, and the position of plumbing and the gas or electric supply.",
          "Decide the appliance list first — a dishwasher, large fridge or built-in oven each dictate cabinet sizes.",
          "Zone the kitchen: prep, cook, wash and store. Keep daily items between waist and shoulder height.",
          "Maximise tall storage. In apartments especially, full-height larder units add far more capacity than extra base cabinets.",
          "Leave a realistic worktop run either side of the hob and sink — at least 40cm — for safe, comfortable prep.",
        ],
      },
      { type: "h2", text: "Hardware is where you feel the quality" },
      {
        type: "p",
        text: "Hinges and drawer runners are operated tens of thousands of times over a kitchen's life. This is the worst place to economise. Soft-close hinges and full-extension, soft-close drawer runners from established brands are worth every riyal — they are the difference between a kitchen that still feels new in five years and one that rattles and sags.",
      },
      {
        type: "callout",
        text: `At ${SITE.name}, every kitchen is measured on-site before a single panel is cut, and we fit moisture-resistant carcasses with soft-close hardware as standard — because in Qatar's climate those two choices decide whether a kitchen lasts five years or fifteen.`,
      },
      { type: "h2", text: "What kitchen cabinets cost in Qatar" },
      {
        type: "p",
        text: "Pricing varies widely with size, material and finish, but it helps to think in tiers rather than a single number. A compact apartment kitchen in laminate sits at the entry level; a large villa kitchen in painted lacquer with stone tops, a larder and an island sits well above it. The biggest cost drivers are the worktop material, the door finish, and the amount of tall and specialist storage.",
      },
      {
        type: "ul",
        items: [
          "Worktops: quartz and granite cost more than laminate or solid-surface, but resist Qatar's heat and heavy use far better near the hob.",
          "Finish: painted lacquer and acrylic cost more than laminate.",
          "Storage complexity: corner solutions, internal organisers and pull-outs add cost but transform usability.",
        ],
      },
      {
        type: "p",
        text: "The honest advice: get a measured, itemised quote rather than a price per metre. A per-metre figure hides what you are actually getting behind the doors.",
      },
      { type: "h2", text: "A quick pre-quote checklist" },
      {
        type: "ol",
        items: [
          "Confirm carcass material and that all edges are sealed.",
          "Choose a finish suited to your light levels and cleaning habits.",
          "Lock the appliance list before the design is finalised.",
          "Specify branded soft-close hinges and runners in writing.",
          "Ask for a measured, itemised quote with a clear timeline.",
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "built-in-wardrobes-qatar",
    title: "Built-In Wardrobes in Qatar: Sizing, Materials & Smart Layouts",
    excerpt:
      "How to plan built-in wardrobes that fit Qatari bedrooms — hanging vs shelving ratios, sliding vs hinged doors, materials for humidity, and layout ideas that maximise every centimetre.",
    category: "Wardrobes & storage",
    datePublished: "2026-02-03",
    dateModified: "2026-04-28",
    readingTime: "9 min read",
    heroImage: u("1547822280-d923f07fffbd"),
    heroAlt: "Clothes and shoes neatly arranged inside a fitted wardrobe",
    credit: {
      name: "CHUTTERSNAP",
      profileUrl: "https://unsplash.com/@chuttersnap",
      photoUrl:
        "https://unsplash.com/photos/clothes-and-shoes-inside-wardrobe-pgquDG8pEbg",
    },
    keywords: [
      "built-in wardrobes Qatar",
      "fitted wardrobes Doha",
      "walk-in closet Qatar",
      "bedroom storage Qatar",
      "sliding wardrobe Doha",
    ],
    intro:
      "A built-in wardrobe uses space a freestanding cupboard wastes — floor to ceiling, wall to wall, into awkward corners. For Qatar's apartments and villas, where storage is always at a premium, a well-planned fitted wardrobe is one of the highest-value upgrades you can make to a bedroom.",
    content: [
      { type: "h2", text: "Built-in vs freestanding: why fitted wins" },
      {
        type: "p",
        text: "A freestanding wardrobe stops at a fixed height and leaves dead space above it that only collects dust. A built-in wardrobe runs to the ceiling, follows the exact width of the wall, and can wrap around windows or radiators. In a typical Qatari bedroom that means 30–50% more usable storage from the same footprint.",
      },
      { type: "h2", text: "Get the hanging-to-shelving ratio right" },
      {
        type: "p",
        text: "The most common planning mistake is too much hanging space and not enough shelving and drawers. Before designing, audit your actual wardrobe contents. Most people need less long-hang space than they think and far more for folded items and accessories.",
      },
      {
        type: "ul",
        items: [
          "Long hanging (dresses, abayas, thobes, coats): plan a dedicated full-height section — these need 150–180cm of clear drop.",
          "Short / double hanging (shirts, trousers, folded over a rail): doubling up two rails reclaims huge capacity for everyday clothes.",
          "Shelving and drawers: for folded knits, gym wear and bags — the workhorses of daily dressing.",
          "Accessory storage: shallow drawers for watches and jewellery, pull-out trays for ties and belts, dedicated shoe racks.",
        ],
      },
      { type: "h2", text: "Sliding vs hinged doors" },
      {
        type: "p",
        text: "Door choice is driven by the room, not just looks.",
      },
      {
        type: "h3",
        text: "Sliding doors",
      },
      {
        type: "p",
        text: "Ideal for tight bedrooms because they need no clearance to swing open. They suit large mirrored or panelled fronts and give a clean, modern face to the room. The trade-off: you can only ever see half the wardrobe at once, and the track needs occasional cleaning.",
      },
      { type: "h3", text: "Hinged doors" },
      {
        type: "p",
        text: "Give full access to the entire interior at once and allow door-mounted storage. They need swing clearance, so they suit rooms with space at the foot of the bed. Soft-close hinges keep them quiet and prevent slamming.",
      },
      { type: "h2", text: "Materials for Qatar's humidity" },
      {
        type: "p",
        text: "Bedrooms in Qatar cycle between strong air-conditioning and humid outdoor air every time a window or balcony door opens. That makes moisture-resistant materials and proper ventilation important even though a bedroom feels 'dry'.",
      },
      {
        type: "ul",
        items: [
          "Moisture-resistant MDF or quality plywood carcasses resist warping far better than standard board.",
          "Sealed edges everywhere — especially on any panel near an external wall, which can attract condensation.",
          "Anti-tarnish and breathable interiors help protect leather bags and metal fittings from humidity.",
        ],
      },
      {
        type: "callout",
        text: `${SITE.name} designs every wardrobe around what you actually own — we start by mapping your hanging, folding and accessory needs, then build the internal layout to match, in moisture-resistant materials suited to Qatar's climate.`,
      },
      { type: "h2", text: "Smart layout ideas" },
      {
        type: "ol",
        items: [
          "Use the full ceiling height: a top 'seasonal' shelf for luggage and out-of-season clothing keeps the main wardrobe uncluttered.",
          "Add integrated LED lighting on a motion sensor — invaluable in deep wardrobes and walk-ins.",
          "Build in a pull-out mirror or a dressing section if floor space allows.",
          "Plan a laundry zone — a pull-out hamper inside the wardrobe keeps the room tidy.",
          "For walk-in closets, an island with drawers turns the space into a boutique-style dressing room.",
        ],
      },
      {
        type: "p",
        text: "However you plan it, a fitted wardrobe should be measured to the millimetre against your specific wall. Templated, off-the-shelf sizes almost always leave gaps and wasted corners.",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "curtains-blinds-qatar-climate",
    title: "Curtains & Blinds for Qatar's Climate: A Practical Buyer's Guide",
    excerpt:
      "Block heat, control glare and add privacy — how to choose curtains and blinds for Qatar's intense sun, from blackout linings to motorised tracks and the right fabrics for villas and apartments.",
    category: "Curtains & blinds",
    datePublished: "2026-02-22",
    dateModified: "2026-05-11",
    readingTime: "8 min read",
    heroImage: u("1636713083052-a19dad4f9055"),
    heroAlt: "A bright living room with a white couch and white curtains",
    credit: {
      name: "volant",
      profileUrl: "https://unsplash.com/@volantaroma",
      photoUrl:
        "https://unsplash.com/photos/a-living-room-with-a-white-couch-and-white-curtains-CUFOVnctleY",
    },
    keywords: [
      "curtains Qatar",
      "blinds Doha",
      "blackout curtains Qatar",
      "motorised curtains Doha",
      "window treatments Qatar",
    ],
    intro:
      "In Qatar, window treatments do far more than decorate — they are your first line of defence against heat gain, glare and rising cooling bills. The right curtains and blinds keep rooms cooler, protect furniture from fading, and give you privacy without blocking the view entirely.",
    content: [
      { type: "h2", text: "Heat first: window treatments as insulation" },
      {
        type: "p",
        text: "South- and west-facing windows in Qatar take a punishing amount of direct sun. Heavy or lined curtains create an insulating air gap between the glass and the room, cutting the heat that reaches your living space and easing the load on the air-conditioning. Layering a sheer with a heavier drape gives you daytime softness and night-time blackout from the same window.",
      },
      { type: "h2", text: "Blackout vs dimout vs sheer" },
      {
        type: "ul",
        items: [
          "Blackout: a coated lining that blocks virtually all light — essential for bedrooms, nurseries and anyone working night shifts.",
          "Dimout: reduces light significantly without total darkness — a good living-room compromise.",
          "Sheer: filters light and softens glare while keeping daytime privacy and the view.",
        ],
      },
      {
        type: "p",
        text: "Many Qatari homes use a double-track system: a sheer for the day and a blackout or dimout drape for evening and sleep. It is the most flexible solution for our long, bright days.",
      },
      { type: "h2", text: "Choosing the right blinds" },
      {
        type: "h3",
        text: "Roller blinds",
      },
      {
        type: "p",
        text: "Simple, affordable and space-efficient. Sunscreen roller fabrics cut UV and glare while preserving the outward view — excellent for offices and kitchens.",
      },
      { type: "h3", text: "Roman blinds" },
      {
        type: "p",
        text: "Fold up into soft horizontal pleats for a tailored, fabric-rich look that suits living rooms and bedrooms. They can be lined for blackout.",
      },
      { type: "h3", text: "Venetian and vertical blinds" },
      {
        type: "p",
        text: "Adjustable slats give precise control over light and privacy. Aluminium venetians suit wet areas; verticals work well on tall or wide windows and sliding doors.",
      },
      { type: "h2", text: "Fabrics that last in Qatar" },
      {
        type: "p",
        text: "Sunlight is hard on textiles. Look for fade-resistant, UV-stable fabrics, and be cautious with delicate silks on the sunniest windows — they can degrade quickly. In humid coastal areas, fabrics that resist mildew and are easy to clean will age far better.",
      },
      {
        type: "callout",
        text: `${SITE.name} measures and fits curtains and blinds across Qatar with the climate built into the recommendation — the right lining for the room's aspect, fade-resistant fabrics, and clean, well-tensioned tracks that won't sag.`,
      },
      { type: "h2", text: "Motorised tracks: worth it?" },
      {
        type: "p",
        text: "Motorisation has moved from luxury to genuinely practical, especially for large or hard-to-reach windows and high villa glazing. Benefits go beyond convenience:",
      },
      {
        type: "ul",
        items: [
          "Schedule curtains to close during the hottest part of the day automatically, reducing heat gain.",
          "Operate tall or wide windows safely without ladders or long cords.",
          "Integrate with smart-home systems and voice control.",
          "Cordless operation is safer in homes with young children.",
        ],
      },
      { type: "h2", text: "Measuring and hanging tips" },
      {
        type: "ol",
        items: [
          "Hang curtains high and wide — above the window frame and beyond its edges — to make windows look larger and let in more light when open.",
          "Floor-length almost always looks better than sill-length in living rooms; aim for a slight 'kiss' or break at the floor.",
          "For a fuller, more luxurious look, fabric width should be roughly two to two-and-a-half times the window width.",
          "Always have large or important windows measured professionally — small errors are very visible on big drops.",
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "majlis-design-ideas-qatar",
    title: "Majlis Design Ideas: Modern & Traditional Qatari Living Rooms",
    excerpt:
      "From classic floor seating to contemporary sofa majlis — layout, seating, fabrics, lighting and colour ideas for designing a welcoming Qatari majlis that balances heritage and modern comfort.",
    category: "Sofas & majlis",
    datePublished: "2026-03-12",
    dateModified: "2026-05-18",
    readingTime: "10 min read",
    heroImage: u("1615471618985-97108e2ba478"),
    heroAlt: "A bright, modern living room with a comfortable sofa",
    credit: {
      name: "Spacejoy",
      profileUrl: "https://unsplash.com/@spacejoy",
      photoUrl:
        "https://unsplash.com/photos/living-room-with-white-curtains-vPKNB_gc23Q",
    },
    keywords: [
      "majlis design Qatar",
      "majlis ideas Doha",
      "custom sofa Qatar",
      "Arabic living room Qatar",
      "majlis furniture Doha",
    ],
    intro:
      "The majlis is the heart of hospitality in a Qatari home — the room where guests are welcomed, family gathers and conversation flows. Designing one well means balancing tradition with modern comfort, and making the space generous, cohesive and built for real gatherings.",
    content: [
      { type: "h2", text: "Understand the role before you design" },
      {
        type: "p",
        text: "A majlis is not just a living room with Arabic furniture. It is a social space designed around hospitality — often with separate areas for men and women, generous seating for large groups, and a layout that encourages conversation by facing seats toward one another rather than toward a television.",
      },
      { type: "h2", text: "Traditional, modern, or a blend?" },
      {
        type: "h3",
        text: "Traditional majlis",
      },
      {
        type: "p",
        text: "Floor seating with firm cushions and bolsters arranged around the perimeter, rich fabrics, ornate detailing, and warm jewel tones. It seats large numbers comfortably and carries strong cultural character.",
      },
      { type: "h3", text: "Modern majlis" },
      {
        type: "p",
        text: "Raised sofa seating in long, low, modular runs, cleaner lines, neutral palettes with metallic or wood accents, and statement lighting. It blends the hospitality function with contemporary villa interiors.",
      },
      { type: "h3", text: "The popular blend" },
      {
        type: "p",
        text: "Most new majlis projects in Qatar sit between the two — perimeter sofa seating in the Arabic tradition, but tailored in modern fabrics and proportions, with bespoke joinery for media walls and display niches.",
      },
      { type: "h2", text: "Seating and layout" },
      {
        type: "p",
        text: "The defining feature of majlis seating is the perimeter arrangement: seating runs along the walls, leaving an open centre. This maximises capacity and makes every guest feel included. Key principles:",
      },
      {
        type: "ul",
        items: [
          "Run seating along the walls and keep the centre clear for movement and serving.",
          "Build seating as custom modules so it fits the room exactly and seats the numbers you actually host.",
          "Choose firm, high-density foam — majlis seating gets heavy use and soft cushions sag quickly.",
          "Plan for serving: side tables or a central low table within easy reach of every seat for coffee and dates.",
        ],
      },
      {
        type: "callout",
        text: `${SITE.name} builds custom sofas and full majlis seating to order — sized to your room and the gatherings you host, in high-density foam and durable fabrics, with reupholstery available to refresh an existing majlis.`,
      },
      { type: "h2", text: "Fabrics and upholstery" },
      {
        type: "p",
        text: "Majlis upholstery has to look refined and survive constant use. Velvet and chenille bring depth and a sense of occasion; performance fabrics and quality leather are easier to keep clean for high-traffic family majlis. Whatever the fabric, the foam and frame underneath determine how the seating feels and how long it lasts.",
      },
      { type: "h2", text: "Lighting and atmosphere" },
      {
        type: "p",
        text: "Lighting makes or breaks a majlis. Avoid a single harsh ceiling light. Layer it instead:",
      },
      {
        type: "ol",
        items: [
          "A statement central fixture — a chandelier or sculptural pendant — to anchor the room.",
          "Warm, dimmable ambient lighting (around 2700–3000K) for a welcoming evening glow.",
          "Concealed cove or LED strip lighting in ceilings and niches for depth.",
          "Accent lighting on display niches, art or a feature wall.",
        ],
      },
      { type: "h2", text: "Colour, detail and finishing touches" },
      {
        type: "p",
        text: "Rich, warm palettes — deep greens, blues, burgundy and gold accents against neutral walls — read as both traditional and current. Bespoke gypsum ceilings, panelled feature walls, and display niches add the architectural detail that makes a majlis feel finished rather than furnished. Finish with a generous, high-quality rug, layered cushions, and considered accessories.",
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "spc-vs-wood-flooring-qatar",
    title: "SPC vs Wood Flooring in Qatar: Cost, Durability & Humidity",
    excerpt:
      "Should you choose SPC, engineered wood, laminate or solid wood in Qatar? A clear comparison of cost, water resistance, durability and feel — with practical advice for villas and apartments.",
    category: "Flooring",
    datePublished: "2026-04-02",
    dateModified: "2026-05-25",
    readingTime: "9 min read",
    heroImage: u("1722248211690-b8f359f688d8"),
    heroAlt: "An empty room with wood floors and a wooden door",
    credit: {
      name: "Lisa Anna",
      profileUrl: "https://unsplash.com/@lisaanna195",
      photoUrl:
        "https://unsplash.com/photos/an-empty-room-with-wood-floors-and-a-wooden-door-nmS4DiG5kGs",
    },
    keywords: [
      "SPC flooring Qatar",
      "wood flooring Doha",
      "engineered wood Qatar",
      "laminate flooring Qatar",
      "vinyl flooring Doha",
    ],
    intro:
      "Flooring is a long-term decision you walk on every day, and Qatar's climate narrows the sensible options. Heat, humidity and the occasional spill make water resistance and stability as important as looks. Here's how SPC, engineered wood, laminate and solid wood really compare for homes in Qatar.",
    content: [
      { type: "h2", text: "The four main options at a glance" },
      {
        type: "ul",
        items: [
          "SPC (Stone Plastic Composite) vinyl: rigid, 100% waterproof, hard-wearing and budget-friendly — the fastest-growing choice in Qatar.",
          "Engineered wood: a real wood veneer over a stable plywood core — genuine timber feel with much better humidity stability than solid wood.",
          "Laminate: a printed wood-look layer over a fibreboard core — affordable and tough underfoot, but vulnerable to standing water at the joints.",
          "Solid wood: beautiful and long-lived, but the most sensitive to Qatar's humidity swings and the most demanding to maintain.",
        ],
      },
      { type: "h2", text: "Why humidity changes everything here" },
      {
        type: "p",
        text: "Wood expands and contracts as it absorbs and releases moisture. In a climate that cycles between dry air-conditioning and humid outdoor air, solid wood can gap, cup or warp if it isn't acclimatised and installed carefully. SPC is dimensionally stable and waterproof, which is exactly why it has become so popular in Qatari homes — it simply doesn't react to moisture the way wood does.",
      },
      { type: "h2", text: "SPC in detail" },
      {
        type: "p",
        text: "SPC's rigid stone-composite core makes it waterproof, stable in heat, and forgiving over slightly uneven subfloors. It usually clicks together as a floating floor, which means fast, clean installation and easy replacement of a damaged plank. A good wear layer resists scratches from furniture and foot traffic, and the realistic wood and stone prints have come a long way.",
      },
      {
        type: "ul",
        items: [
          "Best for: kitchens, bathrooms, busy family areas, rentals and anywhere water is a risk.",
          "Strengths: waterproof, durable, affordable, quick to fit, low maintenance.",
          "Trade-offs: underfoot it feels firmer and less 'warm' than real timber; quality varies, so the wear-layer thickness matters.",
        ],
      },
      { type: "h2", text: "Engineered and solid wood" },
      {
        type: "p",
        text: "If you want genuine wood character, engineered wood is the sensible route in Qatar. Its plywood core resists the movement that troubles solid planks, and the real-wood top layer can often be sanded and refinished. Solid wood remains the premium, heirloom option — but it needs stable indoor conditions, careful installation and ongoing care to thrive here.",
      },
      {
        type: "callout",
        text: `${SITE.name} supplies and installs SPC and wood flooring across Qatar, and we'll steer you to the option that fits the room — waterproof SPC where moisture is a risk, engineered wood where you want real-timber warmth.`,
      },
      { type: "h2", text: "Cost and value" },
      {
        type: "p",
        text: "As a rough hierarchy from most to least budget-friendly: laminate and SPC sit at the affordable end, engineered wood in the middle, and solid wood at the top. But value isn't just the purchase price — factor in installation, lifespan and maintenance. SPC's low maintenance and long life often make it the best total-cost choice for busy households, while wood is an investment in feel and resale appeal.",
      },
      { type: "h2", text: "Installation matters as much as the material" },
      {
        type: "ol",
        items: [
          "Prepare the subfloor: it must be clean, dry and level — most flooring failures trace back to a poor subfloor.",
          "Acclimatise the material: let planks adjust to the room's conditions before fitting, especially wood.",
          "Leave expansion gaps at the perimeter so the floor can move without buckling.",
          "Use the right underlay for comfort, sound and moisture protection.",
          "Finish edges and thresholds cleanly — it's the detail that makes a floor look professionally done.",
        ],
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────── */
  {
    slug: "moving-shifting-qatar-checklist",
    title: "Moving & Shifting in Qatar: The Complete Home Relocation Checklist",
    excerpt:
      "A step-by-step guide to moving home in Qatar — planning timelines, packing tips, protecting furniture in the heat, and a full checklist to make your villa or apartment move stress-free.",
    category: "Moving & shifting",
    datePublished: "2026-04-26",
    dateModified: "2026-05-30",
    readingTime: "10 min read",
    heroImage: u("1589803010842-41cdf85bf0f9"),
    heroAlt: "Brown cardboard moving boxes stacked on a wooden floor",
    credit: {
      name: "Dyana Wing So",
      profileUrl: "https://unsplash.com/@dyanawingso",
      photoUrl:
        "https://unsplash.com/photos/brown-cardboard-boxes-on-brown-wooden-parquet-floor-3BzftacwOzg",
    },
    keywords: [
      "moving Qatar",
      "house shifting Doha",
      "furniture moving Qatar",
      "movers Doha",
      "relocation Qatar checklist",
    ],
    intro:
      "Moving home is stressful anywhere, and Qatar adds its own twist — summer heat, villa-to-apartment logistics and the need to protect furniture in transit. With a clear plan and the right help, a move can be smooth. Here's a complete checklist, from the weeks before to the day itself.",
    content: [
      { type: "h2", text: "Start planning early" },
      {
        type: "p",
        text: "The single biggest factor in a calm move is starting early. As soon as your moving date is set, work backwards and build a simple timeline. A rushed move is where things get broken, lost or damaged.",
      },
      { type: "h3", text: "Three to four weeks before" },
      {
        type: "ul",
        items: [
          "Confirm your moving date and book a reputable mover — good teams get booked out, especially around month-end.",
          "Declutter ruthlessly: donate, sell or dispose of anything you don't want to pay to move.",
          "Start collecting boxes and packing materials, or arrange them through your mover.",
          "Notify your landlord and arrange the handover and any required maintenance.",
        ],
      },
      { type: "h3", text: "One to two weeks before" },
      {
        type: "ul",
        items: [
          "Begin packing room by room, starting with items you rarely use.",
          "Label every box clearly with its room and contents.",
          "Arrange transfer or setup of utilities and internet at the new home.",
          "Update your address with banks, employers and delivery services.",
        ],
      },
      { type: "h2", text: "Pack smart, not just fast" },
      {
        type: "ol",
        items: [
          "Pack room by room and keep each room's boxes together — it makes unpacking far faster.",
          "Use small boxes for heavy items (books, dishes) and large boxes for light items (linens, pillows).",
          "Wrap fragile items individually and fill gaps so nothing shifts in transit.",
          "Keep an 'essentials' box — chargers, documents, medication, toiletries, a change of clothes — and move it yourself.",
          "Photograph the back of your TV and electronics before unplugging so reconnecting is simple.",
        ],
      },
      { type: "h2", text: "Protecting furniture in Qatar's heat" },
      {
        type: "p",
        text: "Heat is the hidden risk in a Qatari move. Furniture and electronics left in a hot truck or stairwell can be damaged, and adhesives and finishes soften in extreme temperatures. A few precautions make a real difference:",
      },
      {
        type: "ul",
        items: [
          "Schedule moves for early morning where possible to avoid the worst of the midday heat.",
          "Don't leave wooden furniture or electronics sitting in direct sun or a closed vehicle.",
          "Disassemble large items — beds, wardrobes, dining tables — for safer, more compact transport.",
          "Wrap and pad furniture properly; blankets and corner protection prevent scuffs in tight villa stairwells and lifts.",
        ],
      },
      {
        type: "callout",
        text: `${SITE.name} handles home, villa and office furniture moving across Qatar — careful disassembly, proper wrapping and reassembly at the other end. And because we also build and reupholster furniture, we can repair or refit pieces as part of the move if anything needs attention.`,
      },
      { type: "h2", text: "Moving day" },
      {
        type: "ol",
        items: [
          "Be present or appoint someone to direct the team and answer questions.",
          "Do a final walkthrough of the old home — check cupboards, balconies and storage rooms before you leave.",
          "Keep valuables, documents and your essentials box with you, not on the truck.",
          "At the new home, check large and fragile items as they come off the truck and note any damage immediately.",
          "Direct boxes to the right rooms as they arrive — it saves hours of carrying things twice.",
        ],
      },
      { type: "h2", text: "After the move" },
      {
        type: "p",
        text: "Unpack the essentials and the kitchen first so the home is livable from night one, then work through room by room. Reassemble beds and wardrobes early, check that everything arrived in working order, and take your time with the rest. A move is also the perfect moment to rethink storage and finally fit that built-in wardrobe or kitchen the new home deserves.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
