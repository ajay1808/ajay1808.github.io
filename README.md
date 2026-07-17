# ajay1808.github.io

Personal site — resume, projects, blog, and life/experiences. Built with [Astro](https://astro.build),
deployed to GitHub Pages via GitHub Actions.

## Editing content

- **Projects**: `src/data/projects.ts`
- **Blog posts**: `src/data/blog.ts`
- **Life / experiences**: `src/data/life.ts` — drop photos in `public/life/` and reference them as `/life/filename.jpg`
- **Resume**: `src/pages/resume.astro` (text) and `public/resume.pdf` (downloadable file)

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the build locally                   |

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
