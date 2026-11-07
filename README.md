# Devendra's Portfolio (React + Vite + Framer Motion, light + dark themes)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Customise
- All content lives in `src/data.js`. Replace the `TODO` links (GitHub, CodeChef, LeetCode, HackerRank).
- Add your photo as `public/profile.jpg` (optional). Replace `public/resume.pdf` to update the resume.
- When a project is published, set its `github` / `demo` URLs; add `certUrl` to enable certificate buttons.

## Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
npm run deploy     # builds and publishes /dist to the gh-pages branch
```
Then on GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` / `(root)` → Save**.
Your site will be live at `https://<username>.github.io/<repo>/` within a minute or two.
(`vite.config.js` uses `base: './'`, so no repo-name changes are needed.)

## Contact form (Formspree) — required for messages to arrive
1. Sign up at https://formspree.io using **devendraarikala@gmail.com** (submissions go to your account email).
2. Create a new form, copy its ID (the code after `/f/` in `https://formspree.io/f/xxxxxxxx`).
3. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID=xxxxxxxx`.
4. Restart `npm run dev`. Send a test message, then confirm the first email Formspree sends you.
5. For GitHub Pages, run `npm run deploy` from the same machine so the build picks up `.env`.
Until the ID is set, the form says honestly that it is not connected and nothing is sent. The Email and WhatsApp buttons always work.
