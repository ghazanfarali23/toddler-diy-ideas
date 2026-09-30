/* Little Hands, Big Ideas — card data & interactions */

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
    idea.steps.map(s =>
      `<li><span class="step-icon" aria-hidden="true">${stepIcon(s)}</span><span>${s}</span></li>`
    ).join("");
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
