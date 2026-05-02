# Deploy to Netlify (`sumedhak.netlify.app`)

This site uses **Next.js static export**. You deploy the **`out/`** folder produced by `npm run build`.

## One-time: GitHub backup (public repo)

Create and push source (replace with your GitHub username if different):

```bash
cd /path/to/portfolio_v2
git add -A
git commit -m "feat: portfolio v2"
gh repo create sumedhakulkarni/portfolio-v2 --public --source=. --remote=origin --push
```

If the repo already exists:

```bash
git remote add origin git@github.com:sumedhakulkarni/portfolio-v2.git
git push -u origin main
```

Pushing to GitHub **does not** deploy the site unless that repo is linked in Netlify. With drag-and-drop deploys, backup and hosting stay independent.

## Build static files

```bash
npm install
npm run build
```

Upload **`out/`** (the folder itself’s **contents** can be zipped, or drag the folder per Netlify UI instructions).

## Netlify drag-and-drop

1. Sign in at [Netlify](https://app.netlify.com/).
2. Open your **`sumedhak`** site (or create one if needed).
3. Go to **Deploys**.
4. Drag the **`out`** folder onto the deploy drop zone.

Your live URL stays **`https://sumedhak.netlify.app/`**.

## Continuous deploy vs drag-and-drop

If `sumedhak` is still linked to an **old GitHub repo**, any push to that repo’s production branch can trigger an automatic deploy and **overwrite** your drag-and-drop upload.

**Recommended:** Netlify → **Site configuration → Build & deploy → Continuous deployment → Manage repository → Unlink**. Then drag-and-drop is the only deploy path.

Alternatively, leave it linked but never push to the old repo again.

## Forms

The contact form uses **Netlify Forms** (`data-netlify="true"`). After the first deploy that includes the built HTML, submissions appear under **Forms** in the Netlify dashboard. Successful submits redirect to **`/thanks/`**.

## Resume URL

The PDF is served at **`/Sumedha_Resume.pdf`** (from `public/`). Replace `public/Sumedha_Resume.pdf` when you update your CV, rebuild, and redeploy.
