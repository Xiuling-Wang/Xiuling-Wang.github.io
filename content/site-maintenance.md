# Xiuling Wang academic website — maintenance notes

This folder keeps the public content and update rules needed to maintain or migrate the website. Website code is stored in `app/`, deployable assets in `public/`, and editable source assets in `assets/source/`.

The GitHub repository is public. Do not add private manuscript files, local absolute paths, account-recovery details, unpublished reviewer correspondence, or credentials to this repository.

## Public routes

- Chinese: `/`
- English: `/en`
- The language switch in the upper-right links between these two routes.

## Local assets

- `assets/source/xiuling-mountains.jpg` — cleaned, EXIF-free source photograph for future recropping
- `public/xiuling-mountains.webp` — optimised runtime hero photograph
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
   - first and corresponding author: `一作 & 通讯` / `FIRST & CORRESPONDING AUTHOR`
   - corresponding author but not first: `通讯` / `CORRESPONDING AUTHOR`
   - second author: `二作` / `SECOND AUTHOR`
   - all other positions: `co-author` / `CO-AUTHOR`
2. Active journals use the latest available JCR year. Write `IF`, not `JIF`.
   - Rhizosphere: `JCR 2025 · IF 3.9 · Q1` (2025 JCR, released by Clarivate in June 2026; the preceding 2024 IF was 3.5).
3. Science of the Total Environment keeps its 2024 publication-year metric: `JCR 2024 · IF 8.0 · Q1`.
4. Update both Chinese and English status labels when a manuscript changes stage.
5. Once a DOI and bibliographic metadata are officially assigned, replace the journal-home link and add only confirmed details. The published Rhizosphere article has DOI `10.1016/j.rhisph.2026.101421` and article number `101421`; volume and issue remain unlisted.
6. Keep the active manuscript first, then sort published papers in reverse chronological order. The 2026 Rhizosphere paper therefore appears second, ahead of the earlier 2026 publication.
7. Every publication and active-manuscript card must include its complete verified author list. Use DOI/Crossref metadata for published articles, the journal PDF for the 2016 Pakistan Journal of Botany paper, and the current private submission package for manuscripts under review. Highlight `Xiuling Wang`; preserve the published `Xiu-Ling Wang` spelling in the 2016 author list.
8. The visible website update month is stored in both language blocks in `app/components/AcademicHome.tsx`.

## Manuscript evidence

The public titles, author roles, and status snapshot are stored in `app/components/AcademicHome.tsx`. Source submissions and reviewer correspondence remain in private manuscript folders outside this public repository. Verify the latest private submission package before changing any title, role, journal, status, IF, quartile, or DOI.

Current public status snapshot: the Rhizosphere article is published in 2026 with Xiuling Wang listed on the website as first and corresponding author, followed by Gaodu Liang and Li Zhuang in the verified author order. It has DOI `10.1016/j.rhisph.2026.101421` and article number `101421`, and appears second after the active BMC Microbiology manuscript. The BMC Microbiology major revision has been returned and is awaiting a decision; its author order is `Chenyi Mao, Xiuling Wang`, with Xiuling Wang identified separately as corresponding author. Affiliations and author email addresses are intentionally omitted from the compact public cards.

## Profile link order

1. ORCID
2. Google Scholar
3. LinkedIn
4. ResearchGate
5. GitHub

Keep this order unless the public profile URLs change. Replace the ResearchGate URL if a newer maintainable profile becomes available.

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

The app uses separate Chinese and English root layouts, so both local SSR and the static export must retain the correct document language. The exporter keeps a final `lang` safeguard and also removes unused framework JavaScript from `docs/`.

## Visual and responsive guardrails

- Keep the candid mountain photograph on the left on wide screens; do not add Chile or soil-depth labels to the photograph.
- Keep the identity broad: `Microbial Ecologist`, with soil as a major strength rather than the only scope.
- Maintain a clear but restrained type hierarchy. Avoid body or label text below 11–12 px.
- Preserve the compact navigation at tablet and phone widths, 44 px touch targets, visible keyboard focus, reduced-motion support, and the native QR popover.
- Check at minimum: 1440 px desktop, 1024 px small laptop, 768 px tablet, 390 px phone, 320 px narrow phone, and a short landscape viewport.
- Keep the page editorial and lively, but avoid generic stock science imagery, excessive animation, fake affiliations, or decorative claims.

## Build and deployment

Run the full local check:

```bash
npm ci
npm run lint
npm test
```

`npm test` rebuilds `docs/`, checks both languages, verifies the dedicated 404 and crawl files, and confirms that no framework scripts enter the static artifact.

Deploy the same `docs/` artifact to Cloudflare Pages:

```bash
npx wrangler pages deploy docs/ --project-name=xiuling-wang --branch=github
```

Push `main` to update the GitHub Pages mirror. Never hand-edit generated files under `docs/`.
