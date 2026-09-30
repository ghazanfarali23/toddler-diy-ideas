# Talha's Creative House 🎨

A cheerful one-page website with **easy DIY craft ideas for 3-year-olds**, all made from everyday household stuff — cardboard, plastic bottles, paper, egg cartons.

## What's inside

- 📸 A photo for every idea
- 🖼️ An illustration for every step
- 🧺 Materials list with Amazon links
- 👉 Step-by-step instructions (animated)
- ▶️ How-to videos that play right on the page
- 🔍 Filter by material (cardboard / bottles / paper)
- 🎲 "Surprise me" random idea button
- 🛡️ Grown-up safety ground rules
- 🖨️ Print-friendly layout

## View it

Just open `index.html` in any browser — no build step, no server needed.

Or publish it free with GitHub Pages: repo Settings → Pages → deploy from the `main` branch.

## Project structure

```
index.html    — page structure
styles.css    — playful styling
app.js        — the ideas (edit this to add your own!)
images/       — one photo per idea
images/steps/ — one illustration per step, named <idea-id>-<step-number>.jpg
                (e.g. box-town-1.jpg). The page finds them automatically.
```

## Adding your own idea

Open `app.js` and add an entry to the `IDEAS` array: title, photo, materials, steps, and an optional YouTube `video` link. It appears on the page automatically. To illustrate the steps, generate one flat pastel children's-book-style picture per step with `media.generate_image` and save it as `images/steps/<your-id>-1.jpg`, `<your-id>-2.jpg`, … — no code changes needed, the detail view picks them up by file name (and falls back to an emoji icon if a picture is missing).

## Photo credits

Photos are from the open web (craft blogs and tutorials) and belong to their original creators. Each idea links out to a how-to video by its creator.
