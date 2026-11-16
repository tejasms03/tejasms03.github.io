# tejasms03.github.io — working notes

Personal portfolio: **Astro 5 + React islands + Tailwind 4**, served by GitHub Pages.
These notes exist so a fresh session can add a project without rediscovering the
traps. Read the whole file before changing anything — several steps here are
non-obvious and two of them will silently break the site if skipped.

---

## 1. The one thing that matters most

**GitHub Pages serves this repo from the ROOT, not from `dist/`, and not via a
Pages build action.** The built output is committed at the top level
(`index.html`, `404.html`, `_astro/`, `about/`, `contact/`, `proyectos/`,
`icons/`, `svg/`) alongside the `src/` it was built from.

So **editing `src/` alone changes nothing on the live site.** Every change is:

```bash
npm run build          # writes dist/
# copy dist/* over the repo root
# commit BOTH src/ and the regenerated root output
git push origin main
```

If you only commit `src/`, the site looks unchanged and nothing errors. This is
the single easiest way to "fix" something and ship nothing.

### The exact sync, copy-paste

Run from the repo root after `npm run build`:

```bash
rm -rf _astro
cp -R dist/_astro dist/about dist/contact dist/proyectos dist/icons dist/svg .
cp dist/index.html dist/404.html dist/favicon.svg dist/github.png .
rm -rf dist
```

`rm -rf _astro` first is deliberate: Astro hashes asset filenames, so without it
the root accumulates orphaned `_astro/*` files from every previous build.

---

## 2. `node_modules` is committed. Never `git add -A`.

There is **no `.gitignore` at the repo root** and `node_modules/` is tracked —
roughly 290 directories of it. Consequences:

- **Never run a bare `git add -A`.** Always stage explicit paths:

  ```bash
  git add -A -- src/data/projectData.js src/assets/img-projects \
    _astro about contact proyectos icons svg \
    index.html 404.html favicon.svg github.png
  ```

- `npm install` dirties `node_modules/.vite/deps/_metadata.json`. Revert it
  before committing: `git checkout -- node_modules`
- Cloning is slow (hundreds of MB). Budget for it; a clone can exceed a 2-minute
  tool timeout, so run it in the background.

Leave this as-is unless the user asks to fix it. Adding a `.gitignore` and
untracking `node_modules` is a large, separate change with its own review.

---

## 3. Adding a project — full procedure

### 3.1 Data entry

Projects live in [`src/data/projectData.js`](src/data/projectData.js) as one
array, `proyectos`. **Array order is display order.** Each entry:

```js
{
  titulo: "Project Name — Short Qualifier",
  descripcion:
    "3–4 sentences. Specific and technical: name the method, the numbers, the "
    + "design decision and why it was made. Match the voice of the existing "
    + "entries — they explain mechanism, not adjectives.",
  imagen: importedName.src,          // note the .src
  tecnologias: ["Python", "ROS2"],   // rendered as pill tags
  demo: "https://...",               // or omit/"#" to hide the Demo link
  codigo: "https://...",             // or omit/"#" to hide the Code link
  categoria: ["software", "embedded"],
}
```

Images are imported at the top of the file and referenced as `.src`:

```js
import myProject from "../assets/img-projects/my-project.gif";
```

Astro's asset pipeline returns an `ImageMetadata` object, hence `.src`. Put
media in `src/assets/img-projects/` (processed and hashed), **not** `public/`.

### 3.2 Categories must match filter buttons

Valid `categoria` values, each matching a `data-filter` button in
[`src/pages/proyectos.astro`](src/pages/proyectos.astro):

`software` · `mechanical` · `reinforcement` · `embedded` · `multiagent`

The filter script lowercases and splits `data-categoria` on commas, so **values
must be lowercase, single words, with no spaces**. A value with no matching
button silently matches nothing and the card is only reachable under "All" —
this was a real bug here: three projects declared `multiagent` before that
button existed, and values like `"mechanical design"` and `"Computer Vision"`
matched nothing at all.

Adding a new category means adding a button too — copy an existing
`<button class="filter-btn ...">` and change `data-filter` and the label.

### 3.3 Card links hide themselves

[`src/components/project/proyectCard.astro`](src/components/project/proyectCard.astro)
has an `isLink()` helper: a `demo` or `codigo` that is missing or `"#"` renders
**no link at all**, rather than a dead one. The Code link carries `ml-auto` so it
stays right-aligned when Demo is absent.

So for a project with no public repo yet, set `codigo: "#"` — don't invent a URL.

### 3.4 Build, sync, commit, push, verify

Follow §1, then confirm the live site actually changed — Pages takes under a
minute:

```bash
curl -s https://tejasms03.github.io/proyectos/ | grep -o '<h3[^>]*>[^<]*</h3>' | sed 's/<[^>]*>//g'
```

---

## 4. Media conventions

The card image slot is `h-50 w-full object-cover` on a 320–400 px card, i.e.
**roughly 2:1**. Anything far from 2:1 gets centre-cropped — a 3.5:1 strip loses
its sides, a 4:3 frame loses its top and bottom. Author at 2:1.

Working GIF recipe (two-pass palette, far smaller and cleaner than one-pass):

```bash
ffmpeg -ss START -t DUR -i IN.mov \
  -vf "crop=W:H:X:Y,setpts=0.5*PTS,fps=10,scale=560:-2:flags=lanczos,palettegen=max_colors=64" \
  -y pal.png

ffmpeg -ss START -t DUR -i IN.mov -i pal.png \
  -lavfi "crop=W:H:X:Y,setpts=0.5*PTS,fps=10,scale=560:-2:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=5" \
  -y out.gif
```

- `setpts=0.5*PTS` doubles speed; `0.75` is a gentler 1.33×.
- Aim for **1–3 MB**. Existing legacy GIFs are 18 MB and 35 MB — do not treat
  those as the standard.
- Screen recordings are usually full-desktop. **Crop to the app window**, and
  prefer the panel that shows the system working over a full-screen shot that
  will be illegible at 400 px wide.
- Check the whole clip before cutting: don't ship a segment that ends on a
  failure state, an error banner, or the subject leaving frame.

`qlmanage -t -s 1600 -o OUTDIR file.svg` rasterises SVG without extra tools
(output is square and top-aligned — crop after). The bundled `sharp` in a
downloaded zip's `node_modules` may be blocked by macOS code signing; a fresh
`npm install` fixes it.

---

## 5. Project repos and demo videos

Each project's demo video lives **in that project's own repo** under `demo/`,
with a short `demo/README.md`; the card's `demo` field links to the file (or to
`tree/main/demo` when there are several). The site repo stays free of large
video files.

**GitHub rejects files over 100 MB.** Re-encode before committing:

```bash
ffmpeg -i IN.mov -vf "scale=1280:-2" -r 30 -c:v libx264 -preset slow -crf 24 \
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -y OUT.mp4
```

That took a 268 MB screen recording to 2.3 MB with no meaningful quality loss at
web size.

Current repos: `tejasms03/spheroswarm`, `tejasms03/depth-gated-ukf`,
`tejasms03/MotionBridge`, `tejasms03/GuidePlay`, plus the older ones already
linked from cards.

---

## 6. Deploying and auth

- **Pages redeploys automatically on push to `main`.** There is nothing to
  restart. Watch at `/actions`; force a rebuild by re-running the job there.
- If the live page looks stale, it is almost always browser cache — hard-refresh.
- `gh` needs an **OAuth token with `repo` scope**:
  `gh auth login --web --scopes "repo,read:org,workflow"`.
  A **fine-grained PAT (`github_pat_…`) cannot create repos or fork** — it fails
  with `403 Resource not accessible by personal access token`. At the
  "How would you like to authenticate" prompt, choose **Login with a web
  browser**, not "Paste an authentication token".
- Pushes to github.com occasionally time out here and still succeed server-side.
  On a timeout, re-check with `git log origin/main` or the API before assuming
  failure and re-pushing.

---

## 7. Card order

Current order, strongest first — the page shows 12 before "view more", so with
11 cards everything is visible, but the first four are what a reader actually
takes in:

1. Sphero Swarm Lab
2. Depth-Gated UKF Localization with Maze Path Planning
3. MotionBridge
4. GuidePlay
5. Quadruped and Hexapod RL
6. Voronoi Drone Swarm
7. Gesture-Controlled Humanoid Finger
8. Multi-Robot Task Allocation
9. Multi-Agent Localization
10. IoT-Controlled Light Balance System
11. MuJoCo UR10e

The ordering principle: **end-to-end systems with hardware in the loop go
first**; single-script and coursework projects go last. One exception is
deliberate — the IoT card is kept despite being the weakest technically, because
its GIF is eye-catching and a projects page is a visual grid. It is placed low so
it draws the eye without being read as representative.

When adding a project, place it by that principle rather than appending.

---

## 8. Conventions worth keeping

- **Don't publish media you can't license.** Screenshots and recordings of the
  user's own systems only — no marketing GIFs lifted from a product site, no
  third-party video.
- **Check recordings and screenshots for sensitive content before using them.**
  Screen recordings here have included bank details, payment pages, identifiable
  faces, and unrelated streaming video. Crop them out or pick another source.
- **Don't link a repo that doesn't exist.** A card pointing at a 404 looks worse
  than a card with no link — `isLink()` exists for exactly this. One card shipped
  a dead `robotic-arm-ik` link for months.
- **Team projects:** keep the team credit in the description. Where the user is
  one of several authors, say what *he* built rather than what the system does,
  and never strip collaborator attribution from a README.

---

## 9. Open items

- **Sphero card has no `demo` link.** Wanted: a recording of a **formation
  recall or coverage run** — the swarm behaviour the project is built around.
  None of the available recordings show it; the current GIF is a two-robot
  tracking run from the calibration bench.
- **MotionBridge and GuidePlay descriptions credit the team's system, not the
  user's own contribution.** Both are three-person projects
  (Bao Do, Anudamodaran Kumarakurup, Tejas Mathur Sriganesh). Ask what he
  personally built and rewrite those two `descripcion` fields.
- `src/assets/img-projects/` still holds unused assets from the original
  template (`Astrofit.jpg`, `ecommers.jpg`, `legalweb.webp`, `medicare.jpg`,
  `urbanStyle.png`, `note-app.png`, `challenge-newyze.png`, `PortfolioDev.jpg`)
  plus `robarm-sim.gif` and `robotic-arm.png` from two removed cards. Harmless,
  but they can go.
- `README.md` still describes the upstream template this was forked from
  ("Personal Portfolio – Lautaro", in Spanish). It does not describe this site.
