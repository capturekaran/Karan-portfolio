# Karan's portfolio site

A static site: plain HTML, CSS and JavaScript. It needs no build step.

## Folder structure

```
index.html          the page
css/style.css       all styling (colours and fonts at the top, in :root)
js/projects.js      ALL content: titles, order, tiles, reels, email
js/main.js          behaviour: grid, filters, lightbox, live Rive, reel sound
vendor/rive.js      Rive web runtime 2.50.0 (runs the live .riv tiles)
media/reel.mp4      hero showreel (720p, with sound)
media/loops/        5–6 s muted preview loops shown in the tiles
media/full/         full-length videos, loaded only when someone opens a project
media/img/          stills for projects without a loop
media/rive/         Spend Rings and Card Shelf Rive files
```

## Preview locally

```
python3 -m http.server 8123 --directory portfolio-site
```

Then open http://localhost:8123

## Change content

Edit `js/projects.js` and refresh the page.

- **Reorder tiles:** move entries up or down.
- **Change tile size:** set `span` to `s22` (big), `s21` (wide), `s12` (tall) or `s11` (small).
- **Change which filter shows a tile:** set `cat` to `motion`, `product`, `story` or `explainer`.

## Host it for free

The site is about 200 MB, almost all of it the full-length videos.

- **Netlify:** go to app.netlify.com/drop and drag the `portfolio-site` folder onto the page. You get a URL in under a minute.
- **Vercel or Cloudflare Pages:** connect a Git repository or upload the folder.

Videos over 100 MB can't go on GitHub Pages, but every file here is under 20 MB.

To make the site lighter later, upload the full videos to Vimeo or YouTube. Then change each `full:` entry to play the embed instead.
