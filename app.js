/* Talha's Creative House — card data & interactions */

const IDEAS = [
  {
    id: "box-town",
    title: "🏠 Cardboard Box Town",
    image: "images/box-town.jpg",
    alt: "A cardboard playhouse made from boxes with cut-out windows",
    tags: ["cardboard"],
    time: "30–45 min",
    blurb: "Turn delivery boxes into a whole tiny town. Doors to crawl through, windows to peek out of — and when it gets demolished, it just goes in the recycling.",
    materials: ["Big cardboard box(es)", "Crayons or markers", "Tape", "Scissors (grown-up job)"],
    steps: [
      "Grown-up cuts a door and windows in the box.",
      "Let your 3-year-old draw bricks, a roof, flowers — total creative freedom.",
      "Tape several boxes together to grow the town: house, shop, garage.",
      "Draw roads on a flattened box for toy cars."
    ],
    tip: "The box flaps make a perfect drawbridge — tape one down at an angle.",
    video: "https://www.youtube.com/watch?v=EGFjB-mkcok", videoTitle: "How to Make a Cardboard Box House | Easy DIY Tutorial"
  },
  {
    id: "binoculars",
    title: "🔭 Toilet Roll Binoculars",
    image: "images/binoculars.jpg",
    alt: "Homemade binoculars from two decorated toilet paper rolls",
    tags: ["paper"],
    time: "10–15 min",
    blurb: "Two empty rolls, some tape, and suddenly the backyard is a safari. The simplest craft here — and the one kids keep playing with for weeks.",
    materials: ["2 toilet paper rolls", "Tape or glue", "Yarn or string", "Stickers or crayons"],
    steps: [
      "Tape the two rolls side by side.",
      "Decorate with stickers, crayons or paint.",
      "Poke a hole on each outer side (grown-up) and tie on a yarn strap.",
      "Head outside on an explorer mission!"
    ],
    tip: "Cover the rolls in foil for 'space explorer' binoculars. 🚀",
    video: "https://www.youtube.com/watch?v=8uuoF-uRI6Q", videoTitle: "Toilet Paper Roll Binoculars | Recycled Materials Craft"
  },
  {
    id: "bottle-bowling",
    title: "🎳 Bottle Bowling",
    image: "images/bottle-bowling.jpg",
    alt: "Plastic bottles lined up as bowling pins with a ball",
    tags: ["bottles"],
    time: "15 min",
    blurb: "Six empty bottles + one soft ball = instant bowling alley in the hallway. Great for rainy days and burning off wiggles.",
    materials: ["6 plastic bottles", "A soft ball", "Rice or sand (a spoonful per bottle)", "Stickers or paint"],
    steps: [
      "Rinse the bottles and add a spoonful of rice so they stand up.",
      "Decorate each 'pin' with a funny face.",
      "Line them up in a triangle.",
      "Roll the ball — strike! 🎉"
    ],
    tip: "Number the bottles 1–6 and practice counting knocked-down pins.",
    video: "https://www.youtube.com/watch?v=6IcIrF3Yio4", videoTitle: "Backyard Bowling Set from Plastic Bottles"
  },
  {
    id: "caterpillar",
    title: "🐛 Egg Carton Caterpillar",
    image: "images/caterpillar.jpg",
    alt: "A colorful caterpillar made from a painted egg carton strip",
    tags: ["cardboard"],
    time: "15–20 min",
    blurb: "A true classic: snip a strip off an egg carton, paint every bump a wild color, and you have a new windowsill pet.",
    materials: ["Cardboard egg carton", "Paint or markers", "Googly eyes (or draw them)", "Pipe cleaner"],
    steps: [
      "Grown-up cuts a strip of 4–5 egg cups from the carton.",
      "Paint each segment a different color — chaos encouraged.",
      "Glue on googly eyes (or draw them with marker).",
      "Poke in a pipe-cleaner for antennae."
    ],
    tip: "Make a whole family of them — kids love naming each one.",
    video: "https://www.youtube.com/watch?v=EXeO3A3HL80", videoTitle: "Caterpillar Craft — A Fun Project for Preschoolers!"
  },
  {
    id: "puppets",
    title: "🎭 Paper Bag Puppets",
    image: "images/puppets.jpg",
    alt: "Funny puppets made from decorated paper lunch bags",
    tags: ["paper"],
    time: "15–20 min",
    blurb: "The folded bottom of a paper bag is a ready-made puppet mouth. Add eyes and wild hair, then put on the silliest show in the living room.",
    materials: ["Paper lunch bags", "Colored paper scraps", "Glue stick", "Markers"],
    steps: [
      "Fold the bag's bottom flap up — that's the puppet's mouth.",
      "Glue on eyes above the flap, a nose and mouth on it.",
      "Add yarn hair, paper ears, or a crown.",
      "Curtain up! Time for a puppet show. 🎬"
    ],
    tip: "Act out their favorite bedtime story with the puppets.",
    video: "https://www.youtube.com/watch?v=upNdsu12t0I", videoTitle: "DIY Animals Paper Bag Puppets"
  },
  {
    id: "marble-run",
    title: "🎢 Cardboard Ball Ramp",
    image: "images/marble-run.png",
    alt: "A ball ramp track built from cardboard on a wall",
    tags: ["cardboard"],
    time: "20–30 min",
    blurb: "Fold cardboard into tracks, tape them to the wall at a slope, and drop a ball. Toddlers will run it approximately one thousand times.",
    materials: ["Long cardboard strips (or halved paper-towel tubes)", "Painter's tape", "A bouncy ball or pom-pom"],
    steps: [
      "Fold cardboard strips into a U or V shape for tracks.",
      "Tape tracks to a wall or door in a zig-zag slope (grown-up).",
      "Test the slope with the ball — adjust until it rolls smoothly.",
      "Race different balls and see which wins!"
    ],
    tip: "Painter's tape won't damage walls and lets kids rearrange the track.",
    video: "https://www.youtube.com/watch?v=59p0NZhYD10", videoTitle: "Epic Cardboard Marble Run"
  },
  {
    id: "sensory-bottle",
    title: "✨ Calm-Down Sensory Bottle",
    image: "images/sensory-bottle.jpg",
    alt: "A clear bottle filled with glittery swirling liquid",
    tags: ["bottles"],
    time: "10 min",
    blurb: "Water, glitter glue and sparkles in a sealed bottle. Shake it up, then watch everything slowly settle — a magic trick that also calms big feelings.",
    materials: ["Clear plastic bottle", "Warm water", "Clear or glitter glue", "Glitter", "Food coloring (optional)"],
    steps: [
      "Grown-up: fill the bottle ¾ with warm water.",
      "Squeeze in a good squirt of glitter glue and stir.",
      "Add glitter and a drop of food coloring.",
      "Seal the cap with tape or hot glue so it can't be opened."
    ],
    tip: "Use it as a 'calm timer' — feelings should settle by the time the glitter does.",
    video: "https://www.youtube.com/watch?v=D7zp7KbxbKY", videoTitle: "How to Make a Sensory Bottle | Easy + Quick DIY"
  },
  {
    id: "guitar",
    title: "🎸 Cardboard Box Guitar",
    image: "images/guitar.jpg",
    alt: "A toy guitar made from a cardboard box with rubber band strings",
    tags: ["cardboard"],
    time: "15 min",
    blurb: "Rubber bands stretched over a box genuinely twang. Add a paper-tube neck and you've got a rock star — earplugs for parents sold separately.",
    materials: ["Small cardboard box or tissue box", "Rubber bands (different thicknesses)", "Paper towel tube", "Stickers or paint"],
    steps: [
      "Stretch rubber bands around the box — different thicknesses = different notes.",
      "Tape a paper tube to one end as the guitar neck.",
      "Decorate with stickers, stars and lightning bolts. ⚡",
      "Strum! Try plucking each 'string' one by one."
    ],
    tip: "Cut a sound hole in a shoebox lid for a louder twang (grown-up).",
    video: "https://www.youtube.com/watch?v=sMGimCkPox0", videoTitle: "DIY Cardboard Guitar — Easy Science Project for Kids"
  },
  {
    id: "plate-animals",
    title: "🦁 Paper Plate Animals",
    image: "images/plate-animals.jpg",
    alt: "Cute animal faces made from painted paper plates",
    tags: ["paper"],
    time: "15–20 min",
    blurb: "A paper plate is already a face — it just needs ears, a mane and a big smile. Lions, cats, owls: the zoo is open.",
    materials: ["Paper plates", "Paint or markers", "Colored paper scraps", "Glue stick"],
    steps: [
      "Paint the plate the animal's main color and let it dry.",
      "Cut ears, mane, beak or whiskers from paper scraps.",
      "Glue everything on and draw the face.",
      "Roar, meow or hoot — then make another one!"
    ],
    tip: "Tape a popsicle stick to the back to turn them into masks.",
    video: "https://www.youtube.com/watch?v=4PsJMosAYnY", videoTitle: "Paper Plate Craft Ideas for Kids"
  },
  {
    id: "cap-mosaic",
    title: "🎨 Bottle Cap Mosaic",
    image: "images/bottle-cap-art.jpg",
    alt: "Colorful mosaic art made from bottle caps on cardboard",
    tags: ["bottles", "cardboard"],
    time: "20 min",
    blurb: "Save up colorful bottle caps and turn them into mosaics on cardboard. Sorting by color is half the fun for a 3-year-old.",
    materials: ["Bottle caps (lots, various colors)", "Cardboard base", "Glue", "Marker"],
    steps: [
      "Sort the caps by color together — great color practice!",
      "Grown-up sketches a simple shape on the cardboard: sun, flower, fish.",
      "Glue caps along the lines, then fill in.",
      "Hang the masterpiece on the fridge. 🖼️"
    ],
    tip: "Start with a rainbow: each arch is one color of caps.",
    video: "https://www.youtube.com/shorts/YDsgMWBoBSw", videoTitle: "Recycled Bottle Cap Art Made by a Family"
  },
  {
    id: "coffee-filter-butterflies",
    title: "🦋 Coffee Filter Butterflies",
    image: "images/coffee-filter-butterflies.jpg",
    alt: "Colorful handmade butterflies made from coffee filters and pipe cleaners",
    tags: ["paper"],
    time: "20–30 min",
    blurb: "Color coffee filters with markers, spritz with water, and watch tie-dye magic happen. Scrunch, twist a pipe cleaner, and a butterfly is born.",
    materials: ["White coffee filters", "Washable markers", "Spray bottle with water", "Pipe cleaners", "Newspaper or tray"],
    steps: [
      "Flatten a coffee filter on newspaper and color it boldly with washable markers.",
      "Spritz the filter with water and watch the colors bleed into a tie-dye swirl.",
      "Lay it flat to dry completely — sunshine speeds it up.",
      "Scrunch the middle and twist a pipe cleaner around it; curl the ends for antennae.",
      "Fan the wings open and stick your butterfly on the window."
    ],
    tip: "Make one butterfly a day for a week and hang a mobile of them from a coat hanger.",
    video: "https://www.youtube.com/watch?v=LfpezD0dv2w", videoTitle: "At-Home Kids Projects | Coffee Filter Butterflies"
  },
  {
    id: "playdough",
    title: "🌈 Homemade Playdough",
    image: "images/playdough.jpg",
    alt: "Toddler hands shaping a rainbow of homemade playdough",
    tags: [],
    time: "15 min",
    blurb: "Soft, squishy playdough from kitchen staples — no cooking, no cream of tartar. Mix, knead, and play!",
    materials: ["All-purpose flour", "Table salt", "Warm water", "Vegetable oil", "Food coloring"],
    steps: [
      "Mix 1/2 cup flour and 1/4 cup salt in a big bowl.",
      "Stir a few drops of food coloring into 1/4 cup warm water.",
      "Pour the colored water and 2 teaspoons of oil into the bowl.",
      "Mix, then knead with your hands until smooth — add flour if sticky."
    ],
    tip: "Store in a sealed bag and it stays soft for weeks. Make a few colors and swirl them together!",
    video: "https://www.youtube.com/watch?v=y4eTHPeHvAc", videoTitle: "BEST Playdough recipe WITHOUT cream of tartar or cooking!"
  },
  {
    id: "toilet-roll-rocket",
    title: "🚀 Toilet Roll Rocket",
    image: "images/toilet-roll-rocket.jpg",
    alt: "Homemade rocket ship made from a toilet paper roll with paper fins and tissue flames",
    tags: ["cardboard"],
    time: "20–25 min",
    blurb: "Blast off to space with an empty toilet roll! Wrap it in color, pop on a cone nose, and add tissue-paper flames for a rocket that is ready for countdown.",
    materials: ["Empty toilet paper roll", "Colored construction paper", "Glue stick or tape", "Scissors", "Tissue paper"],
    steps: [
      "Wrap the toilet roll in colored paper and glue or tape it in place.",
      "Cut a circle from paper, snip to the center, and curl it into a cone for the nose; tape it on top.",
      "Cut out three triangles and glue them around the bottom as fins.",
      "Decorate with star stickers and draw round windows with crayons.",
      "Stuff orange and yellow tissue paper into the bottom for flames — then shout \"blast off!\""
    ],
    tip: "Count down from 10 before launch — toddlers love the drama, and it sneaks in number practice.",
    video: "https://www.youtube.com/watch?v=sXHYd6GSCEw", videoTitle: "How to Make a Rocket at Home for Kids | Fun At-Home Science Activities"
  },
  {
    id: "egg-carton-flowers",
    title: "🌸 Egg Carton Flowers",
    image: "images/egg-carton-flowers.png",
    alt: "Bright painted flowers made from egg carton cups on pipe cleaner stems",
    tags: ["cardboard"],
    time: "25–30 min",
    blurb: "Turn an old egg carton into a bouquet that never wilts! Cut, paint, and add pom-pom centers for spring flowers you can make in any season.",
    materials: ["Cardboard egg carton", "Washable paint", "Paintbrushes", "Pipe cleaners", "Pom-poms"],
    steps: [
      "Cut the egg carton apart into individual cups — each cup becomes a flower.",
      "Trim the edges of each cup into rounded petal shapes.",
      "Paint the flowers inside and out in bright colors, then let them dry completely.",
      "Glue a pom-pom into the center of each flower.",
      "Poke a pipe cleaner through the bottom for a stem and arrange your bouquet in a jar."
    ],
    tip: "Make a few extra and gift them in a jam jar — a sweet handmade surprise for grandparents.",
    video: "https://www.youtube.com/watch?v=6elzntDiwjc", videoTitle: "Egg Carton Crafts | Easy DIY Daisy Flowers From an Egg Tray"
  },
  {
    id: "bottle-bird-feeder",
    title: "🐦 Plastic Bottle Bird Feeder",
    image: "images/bottle-bird-feeder.jpg",
    alt: "A homemade bird feeder made from a recycled plastic bottle hanging from a tree",
    tags: ["bottles"],
    time: "20–25 min",
    blurb: "Turn an empty plastic bottle into a little restaurant for birds! Poke some holes, slide in perches, fill it with seed — then watch from the window as feathered guests check in.",
    materials: ["Clean empty plastic bottle (with cap)", "Bird seed", "2 wooden sticks or pencils", "String or twine", "Scissors (grown-up job)", "Pushpin or nail (grown-up job)"],
    steps: [
      "Grown-up rinses the bottle, dries it, and removes the label.",
      "Grown-up pokes two holes on opposite sides near the bottom and slides a stick through as a perch; repeat a little higher up for a second perch.",
      "Cut small feeding holes just above each perch so the seed can peek out.",
      "Pour in bird seed with a funnel, screw the cap on, and tie string around the neck for hanging.",
      "Hang it on a tree branch outside a window — then watch the birds arrive! 🐦"
    ],
    tip: "Hang the feeder where your 3-year-old can see it from inside — breakfast bird-watching is the best part.",
    video: "https://www.youtube.com/watch?v=qzYebSAj4GQ", videoTitle: "DIY Bird  Feeder.  Simple  Project from Plastic Bottles"
  },
  {
    id: "paper-cup-telephone",
    title: "📞 Paper Cup Telephone",
    image: "images/paper-cup-telephone.jpg",
    alt: "Two kids playing with a string telephone made from paper cups",
    tags: ["paper"],
    time: "10–15 min",
    blurb: "Two paper cups and a long string — and suddenly voices travel across the room like magic. A classic first science experiment that genuinely works.",
    materials: ["2 paper cups", "Long string or yarn (10–15 feet)", "2 paper clips or buttons", "Pencil or pin (grown-up job)", "Stickers or crayons (for decorating)"],
    steps: [
      "Grown-up pokes a small hole in the bottom of each cup with a pencil.",
      "Thread the string through one cup and tie it to a paper clip inside so it can't pull out.",
      "Thread the other end through the second cup and tie it off the same way.",
      "Decorate the cups with stickers, drawings, or your 'phone number'. ☎️",
      "Each person takes a cup and walks apart until the string is tight — then whisper! The other person listens."
    ],
    tip: "The string MUST be tight and not touching anything — that's the secret. Try loose vs. tight and hear the difference.",
    video: "https://www.youtube.com/watch?v=nBaq_gqpPjo", videoTitle: "how to make a play telephone"
  },
  {
    id: "pasta-necklace",
    title: "🍝 Pasta Necklace",
    image: "images/pasta-necklace.jpg",
    alt: "A smiling child holding up a colorful pasta necklace made from dyed pasta tubes",
    tags: [],
    time: "20–30 min",
    blurb: "Dye pantry pasta in rainbow colors, thread it onto yarn, and wear the tastiest jewelry in the house. Great pattern and counting practice too.",
    materials: ["Dried pasta with holes (penne, rigatoni, macaroni)", "Food coloring", "Zip bags", "Yarn or string", "Tape", "Paper towels"],
    steps: [
      "Grown-up: put a handful of pasta in a zip bag with a few drops of food coloring and a spoonful of rubbing alcohol (optional), seal and shake until coated.",
      "Spread the colored pasta on paper towels or a tray and let it dry completely.",
      "Cut a piece of yarn long enough to slip over your child's head, and wrap tape around one end to make a stiff 'needle'.",
      "Tie a big knot (or one pasta piece) at the other end so the beads can't slide off.",
      "Thread the pasta — try a pattern: red, blue, red, blue! Tie the ends together and wear it. 🎉"
    ],
    tip: "Make matching bracelets from the leftover pasta — one for every grandparent.",
    video: "https://www.youtube.com/watch?v=qES3ctrw7ek", videoTitle: "Pasta Crafts | Simple Art Ideas for Kids",
    isNew: true
  },
  {
    id: "bubble-wands",
    title: "🫧 Pipe Cleaner Bubble Wands",
    image: "images/bubble-wands.jpg",
    alt: "A child blowing a big bubble through a purple pipe cleaner wand outdoors",
    tags: [],
    time: "15–20 min",
    blurb: "Bend a pipe cleaner into any shape, dip it in soapy water, and blow — every shape still makes a round bubble, which blows toddlers' minds.",
    materials: ["Pipe cleaners (chenille stems)", "Pony beads (optional)", "Dish soap", "Warm water", "Sugar (a spoonful)", "A cup or jar"],
    steps: [
      "Bend the top of a pipe cleaner into a circle, heart, star or square, and twist the end to hold the shape.",
      "Thread a few pony beads onto the straight handle and fold the tip over so they stay on.",
      "Grown-up: mix the bubble solution — 1 cup warm water, 2 tablespoons dish soap and 1 teaspoon sugar — and stir gently.",
      "Dip the loop into the solution and lift it slowly so a soapy film stretches across it.",
      "Blow gently through the loop — or just wave it in the breeze — and chase the bubbles! 🫧"
    ],
    tip: "Bubbles are always round no matter the wand shape — try a star wand and watch your 3-year-old's amazed face.",
    video: "https://www.youtube.com/watch?v=kFVXWZPJtKk", videoTitle: "How To Make a BUBBLE WAND",
    isNew: true
  }
];

const FILTER_LABELS = { cardboard: "📦 Cardboard", bottles: "🫙 Bottles", paper: "📄 Paper & rolls" };

/* ---------- Render ---------- */
const grid = document.getElementById("grid");
const empty = document.getElementById("empty");

function youtubeEmbedUrl(watchUrl) {
  const m = watchUrl.match(/[?&]v=([\w-]{11})/) || watchUrl.match(/youtu\.be\/([\w-]{11})/) || watchUrl.match(/\/shorts\/([\w-]{11})/);
  return m ? `https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0` : null;
}

function cardHTML(idea) {
  const tags = idea.tags.map(t => `<span class="mtag">${FILTER_LABELS[t]}</span>`).join("");
  const newBadge = idea.isNew ? `<span class="new-badge">✨ New</span>` : "";
  const videoBtn = idea.video
    ? `<button class="btn-video" data-video="${idea.video}" data-title="${idea.videoTitle || idea.title}">▶ Watch how-to</button>`
    : "";
  return `
  <article class="card" data-id="${idea.id}" data-tags="${idea.tags.join(" ")}">
    <div class="card-media">
      <img src="${idea.image}" alt="${idea.alt}" loading="lazy">
      <span class="time-tag">⏱ ${idea.time}</span>
      <span class="age-tag">👶 3 yrs</span>
      ${newBadge}
    </div>
    <div class="card-body">
      <h3>${idea.title}</h3>
      <div class="material-tags">${tags}</div>
      <p class="blurb">${idea.blurb}</p>
      <div class="materials">
        <strong>🧺 You'll need</strong>
        <ul>${idea.materials.map(m => `<li>${m}</li>`).join("")}</ul>
      </div>
      <details class="steps">
        <summary>How to make it</summary>
        <ol>${idea.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      </details>
      <p class="tip">💡 ${idea.tip}</p>
      <div class="card-actions">${videoBtn}<button class="btn-steps" data-detail="${idea.id}">📋 Steps</button></div>
    </div>
  </article>`;
}

grid.innerHTML = IDEAS.map(cardHTML).join("");

/* ---------- Filters ---------- */
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const f = chip.dataset.filter;
    let visible = 0;
    document.querySelectorAll(".card").forEach(card => {
      const show = f === "all" || card.dataset.tags.includes(f);
      card.hidden = !show;
      if (show) visible++;
    });
    empty.hidden = visible > 0;
  });
});

/* ---------- Surprise me ---------- */
document.getElementById("surpriseBtn").addEventListener("click", () => {
  const visible = [...document.querySelectorAll(".card")].filter(c => !c.hidden);
  if (!visible.length) return;
  const pick = visible[Math.floor(Math.random() * visible.length)];
  pick.scrollIntoView({ behavior: "smooth", block: "center" });
  pick.classList.remove("spotlight");
  void pick.offsetWidth; // restart animation
  pick.classList.add("spotlight");
  setTimeout(() => pick.classList.remove("spotlight"), 1600);
});

/* ---------- Helpers ---------- */
function stepIcon(step) {
  const s = (step || "").toLowerCase();
  const map = [
    [/scissor|cut|snip|trim/, "✂️"],
    [/paint/, "🎨"],
    [/glue|stick|tape|attach|seal/, "🩹"],
    [/sort/, "🗂️"],
    [/draw|color|colour|marker|crayon|sketch|write/, "🖍️"],
    [/fold/, "📰"],
    [/pour|fill|water/, "💧"],
    [/shake/, "🫙"],
    [/tie|yarn|knot|string|thread/, "🧵"],
    [/poke|hole|drill|pierce/, "📍"],
    [/decorat|sticker/, "⭐"],
    [/dry/, "💨"],
    [/sort/, "🗂️"],
    [/hang/, "🖼️"],
    [/roll|ball|bowl/, "⚽"],
    [/sprinkle|glitter/, "✨"],
  ];
  for (const [re, icon] of map) if (re.test(s)) return icon;
  return "👉";
}

function amazonUrl(material) {
  const q = String(material).replace(/\([^)]*\)/g, "").trim() || String(material);
  return "https://www.amazon.com/s?k=" + encodeURIComponent(q);
}

document.getElementById("ideaCount").textContent = IDEAS.length;

/* ---------- Video modal ---------- */
const backdrop = document.getElementById("modalBackdrop");
const frame = document.getElementById("videoFrame");
const caption = document.getElementById("modalCaption");

function openVideo(url, title) {
  const embed = youtubeEmbedUrl(url);
  if (!embed) { window.open(url, "_blank", "noopener"); return; }
  frame.src = embed;
  caption.textContent = title;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  frame.src = "";
  backdrop.hidden = true;
  if (detailBackdrop.hidden) document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeVideo);
backdrop.addEventListener("click", e => { if (e.target === backdrop) closeVideo(); });

/* ---------- Detail modal ---------- */
const detailBackdrop = document.getElementById("detailBackdrop");

function openDetail(id) {
  const idea = IDEAS.find(i => i.id === id);
  if (!idea) return;
  const img = document.getElementById("detailImg");
  img.src = idea.image;
  img.alt = idea.alt;
  document.getElementById("detailTime").textContent = "⏱ " + idea.time;
  document.getElementById("detailNew").hidden = !idea.isNew;
  document.getElementById("detailTitle").textContent = idea.title;
  document.getElementById("detailTags").innerHTML =
    idea.tags.map(t => `<span class="mtag">${FILTER_LABELS[t]}</span>`).join("");
  document.getElementById("detailBlurb").textContent = idea.blurb;
  document.getElementById("detailMats").innerHTML =
    idea.materials.map(m =>
      `<li><span>${m}</span><a class="buy" href="${amazonUrl(m)}" target="_blank" rel="noopener" title="Find it on Amazon">🛒</a></li>`
    ).join("");
  document.getElementById("detailSteps").innerHTML =
    idea.steps.map((s, i) => {
      const fb = `<span class="step-icon" aria-hidden="true">${stepIcon(s)}</span>`;
      return `<li style="animation-delay:${i * 90}ms"><span class="step-media"><img class="step-img" src="images/steps/${idea.id}-${i + 1}.jpg" alt="" loading="lazy" onerror='this.outerHTML=${JSON.stringify(fb)}'></span><span>${s}</span></li>`;
    }).join("");
  document.getElementById("detailTip").textContent = "💡 " + idea.tip;
  const vb = document.getElementById("detailVideoBtn");
  if (idea.video) {
    vb.hidden = false;
    vb.dataset.video = idea.video;
    vb.dataset.title = idea.videoTitle || idea.title;
  } else {
    vb.hidden = true;
  }
  detailBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#detailBackdrop .detail").scrollTop = 0;
}

function closeDetail() {
  detailBackdrop.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("detailClose").addEventListener("click", closeDetail);
detailBackdrop.addEventListener("click", e => { if (e.target === detailBackdrop) closeDetail(); });
document.getElementById("detailVideoBtn").addEventListener("click", e => {
  openVideo(e.currentTarget.dataset.video, e.currentTarget.dataset.title);
});

/* ---------- Card interactions ---------- */
grid.addEventListener("click", e => {
  const vbtn = e.target.closest(".btn-video");
  if (vbtn) { openVideo(vbtn.dataset.video, vbtn.dataset.title); return; }
  if (e.target.closest("a")) return; // let links behave normally
  const card = e.target.closest(".card");
  if (card) openDetail(card.dataset.id);
});

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!backdrop.hidden) closeVideo();
  else if (!detailBackdrop.hidden) closeDetail();
});
