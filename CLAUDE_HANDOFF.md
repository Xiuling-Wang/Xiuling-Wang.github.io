# Claude handoff — Xiuling Wang bilingual academic website

Updated: 2026-07-12

## What this project is

This is Xiuling Wang's bilingual academic and career website. It is currently used for job applications, but the design must also support future career records, collaboration, student recruitment, and a possible research-group website.

The site should feel:

- rigorous but not institutional or old-fashioned;
- lively and recognisably human, without becoming cute or unserious;
- editorial, spacious, and contemporary;
- suitable for academic hiring committees, international collaborators, and future students;
- broad enough for microbial ecology rather than presenting Xiuling only as a soil scientist.

## Public URLs

- Primary clean URL: `https://xiuling-wang.github.io/`
- English: `https://xiuling-wang.github.io/en/`
- Secondary Sites mirror: `https://soil-microbe-career.wangxiuling0828chris.chatgpt.site`
- GitHub profile: `https://github.com/Xiuling-Wang`

The Sites URL cannot currently be renamed through the existing project controls. Do not claim that its account-derived hostname can be removed without a custom domain.

## Source of truth

- Main bilingual component: `app/components/AcademicHome.tsx`
- Global design system and responsive CSS: `app/globals.css`
- Chinese route: `app/page.tsx`
- English route: `app/en/page.tsx`
- Metadata: `app/layout.tsx` and `app/en/layout.tsx`
- Publication and maintenance rules: `content/site-maintenance.md`
- Public profile snapshot: `content/public-profile-source.md`
- Runtime assets: `public/`
- GitHub static exporter: `scripts/export-github-pages.mjs`
- Tests: `tests/`

All website images, QR assets, and maintenance documents must stay inside this project so it remains portable.

The current social-sharing asset is `public/og-xiuling-v3.png` and uses the broad positioning `MICROBES · ECOLOGY · DATA`.

## Current visual system

- Palette: warm cream, dark green-black, cobalt blue, muted orange, lime, soft yellow, pale pink.
- Typography: Chinese editorial serif for large Chinese text; restrained serif/sans pairing for English and UI.
- Hero: candid mountain photograph on the left; academic positioning and actions on the right.
- Visual language: generous white space, slightly irregular coloured cards, clear publication rows, restrained icon use.
- The page deliberately avoids a framed headshot and formal university-profile styling.

## Current research positioning

Primary identity: **Microbial Ecologist**.

The website must communicate all of the following without overclaiming:

- climate gradients and deep-soil microbiomes;
- living and relic communities using iDNA/eDNA;
- rhizosphere microbial ecology;
- edible-mushroom bacterial and fungal communities;
- fungi and cross-environment microbiomes;
- future interest in dental-plaque microbial communities and comparative reviews;
- R, statistics, microbiome data analysis, and AI-agent research workflows.

Do not revert the main identity to "Soil Microbial Ecologist". Soil is a major strength, not the only scope.

## Non-negotiable content rules

1. Keep both Chinese and fully English versions.
2. Keep the language switch in the upper-right.
3. Keep the hero photograph on the left and unframed.
4. Do not put `Chile`, `0–200 cm`, or EarthShape labels on the photograph; it was taken in Italy.
5. The QR code opens as a large centred overlay and points to `https://xiuling-wang.github.io/`.
6. Profile links remain ordered: ORCID, Google Scholar, LinkedIn, ResearchGate, GitHub.
7. Footer copyright uses `Xiuling Wang`, including on the Chinese route.
8. Do not restore the publication explanatory sentence above the list.
9. Publication roles remain compact: 一作 / 通讯 / 二作 / co-author and their English equivalents.
10. Use `IF`, not `JIF`, and retain the explicit JCR year.
11. Never change titles, author roles, manuscript statuses, IF values, quartiles, or DOI links without checking the project evidence and current sources.
12. Do not add invented awards, affiliations, metrics, teaching, students, or funding.

## Known GitHub Pages failure and fix

The first GitHub export included vinext hydration/RSC scripts. On GitHub Pages these scripts interfered with anchor navigation and scroll position, making the page feel locked after clicking navigation links.

`scripts/export-github-pages.mjs` now removes all `<script>` and `modulepreload` tags from the exported pages. GitHub Pages should remain plain static HTML/CSS. Preserve this fix.

Run:

```bash
npm test
npm run export:github
```

The tests require the GitHub export to contain no vinext/RSC scripts.

## What Xiuling wants Claude to improve

Perform an aesthetic audit before editing. Focus on:

1. Type scale: check that headings feel intentional rather than extremely large or tiny; preserve clear hierarchy at 1440 px, tablet, and phone widths.
2. Rhythm: improve section spacing, card density, and the visual transition between profile, research, project, publications, experience, skills, and contact.
3. Hero balance: keep the name on one line on ordinary desktop widths where possible; ensure the role, focus line, paragraph, and buttons read as a coherent group.
4. Research breadth: make the four research areas feel related while preventing the fourth, future-facing area from looking like a completed project.
5. Publication scanning: make role, status, title, journal, IF, and quartile easy to scan without visual clutter.
6. Skills: keep AI/Codex expertise prominent while maintaining scientific credibility and the importance of R, statistics, and laboratory work.
7. Mobile header: retain QR access and language switching without crowding the name.
8. Personality: use small, deliberate moments of colour, typography, and motion; avoid generic academic templates, excessive animation, fake diagrams, or decorative science stock imagery.

Prefer targeted CSS/component improvements over a wholesale framework rewrite. Preserve the current content architecture unless there is a clear user-facing reason to change it.

## Deployment model

Two public versions are maintained:

- GitHub Pages: export `docs/` with `npm run export:github`, then publish the repository `Xiuling-Wang/Xiuling-Wang.github.io` from `main:/docs`.
- Sites: build with `npm run build`, package, save a version, and deploy through the existing Sites project.

Both versions should be updated from the same source. Do not hand-edit generated files under `docs/`; regenerate them.
