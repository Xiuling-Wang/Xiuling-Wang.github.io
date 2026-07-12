# Xiuling Wang academic website — maintenance notes

This folder keeps the public content and update rules needed to maintain or migrate the website. Runtime images are stored in `public/`; website code is stored in `app/`.

## Public routes

- Chinese: `/`
- English: `/en`
- The language switch in the upper-right links between these two routes.

## Local assets

- `public/xiuling-mountains.jpg` — hero photograph, derived from `/Users/xwang/Job/IMG_7729.JPG`
- `public/site-qr.svg` — QR code for the primary Cloudflare Pages URL
- `public/og-xiuling-v3.png` — current bilingual social-sharing card (`MICROBES · ECOLOGY · DATA`)

All images used by the website must remain inside `public/`. Do not hotlink profile images or QR codes.

## Updating the QR code

The generator is stored at `scripts/generate-qr.mjs`. After a custom domain is connected, regenerate the QR code with:

```bash
SITE_URL=https://your-domain.example npm run qr
```

## Publication update rules

1. Author role labels are deliberately compact:
   - first and corresponding author: `一作` / `FIRST AUTHOR`
   - corresponding author but not first: `通讯` / `CORRESPONDING AUTHOR`
   - second author: `二作` / `SECOND AUTHOR`
   - all other positions: `co-author` / `CO-AUTHOR`
2. Active journals use the latest available JCR year. Write `IF`, not `JIF`.
3. Science of the Total Environment keeps its 2024 publication-year metric: `JCR 2024 · IF 8.0 · Q1`.
4. Update both Chinese and English status labels when a manuscript changes stage.
5. After acceptance, replace the journal-home link with the DOI and add the final year, volume, issue, and article number.
6. The visible website update month is stored in both language blocks in `app/components/AcademicHome.tsx`.

## Current manuscript evidence

- Rhizosphere manuscript source package: `/Users/xwang/Academia/paper/04_Master_ITS/Rhizosphere/R2_submission_2026-07-11`
- BMC Microbiology revision package: `/Users/xwang/带学生/毛晨怡/final_outputs/BMC_Microbiology投稿/提交上传`

The public titles, author roles, and statuses extracted from these packages are stored in `app/components/AcademicHome.tsx`, so the deployed website does not depend on files outside this project. The BMC Microbiology major revision has been returned and is awaiting a decision.

## Profile link order

1. ORCID
2. Google Scholar
3. LinkedIn
4. ResearchGate
5. GitHub

ResearchGate remains after ORCID, Google Scholar, and LinkedIn because the current profile cannot be maintained through the former institutional email. GitHub follows as the code and website source profile. Replace the ResearchGate URL when a new profile is available.

## Public URLs

- Primary: `https://xiuling-wang.pages.dev/`
- English: `https://xiuling-wang.pages.dev/en/`
- GitHub Pages (legacy): `https://xiuling-wang.github.io/` — kept as secondary mirror.

A separately purchased custom domain can still be connected later if desired.

## Dual deployment and scroll safety

- `npm test` builds the site, regenerates the shared static export, and validates the Cloudflare and GitHub artifact.
- `scripts/export-github-pages.mjs` deliberately removes vinext hydration and RSC scripts from `docs/index.html` and `docs/en/index.html`.
- GitHub Pages must remain plain static HTML/CSS so framework navigation cannot intercept anchor links or lock the scroll position.
- Do not copy the raw server-rendered HTML into `docs/` without the sanitisation step.
