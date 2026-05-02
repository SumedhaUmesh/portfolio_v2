# Portfolio — Sumedha Kulkarni

Next.js 14 (App Router) portfolio with static export for drag-and-drop deploy to Netlify.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are emitted to `out/`. Deploy by dragging that folder onto your Netlify site (see [DEPLOY.md](./DEPLOY.md)).

## Content updates

- Profile & links: [`content/profile.ts`](./content/profile.ts) — update `linkedInUrl` with your public LinkedIn URL.
- Experience: [`content/experience.ts`](./content/experience.ts)
- Projects: [`content/projects.ts`](./content/projects.ts)
- Skills: [`content/skills.ts`](./content/skills.ts)
- Resume PDF: replace [`public/Sumedha_Resume.pdf`](./public/Sumedha_Resume.pdf)

## Stack

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lucide
