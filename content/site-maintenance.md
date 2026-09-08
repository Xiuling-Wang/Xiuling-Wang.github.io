# Xiuling Wang academic website — maintenance notes

This folder keeps the public content and update rules needed to maintain or migrate the website. Website code is stored in `app/`, deployable assets in `public/`, and editable source assets in `assets/source/`.

## Current override — 8 September 2026

The archaeal manuscript was submitted to Applied Soil Ecology on 7 September 2026. Display `已投稿` / `SUBMITTED`; do not infer peer-review status. The metagenomic manuscript targets Geoderma and remains `准备投稿` / `IN PREPARATION`, using the title from the current V06 manuscript. Both manuscript cards now display the journal with an explicit submitted/target label; journal metrics remain hidden. These facts supersede all older manuscript snapshots below.

Two-page Chinese and English academic CVs are available at `public/cv/Xiuling_Wang_CV_ZH.pdf` and `public/cv/Xiuling_Wang_CV_EN.pdf`, linked from the corresponding profile sections. Rebuild with `scripts/build-academic-cv.py` using Python with ReportLab. Publication titles and authors are read from the website content. The CV records doctoral studies without claiming an awarded degree, current location in China, availability for full-time research, and the integrated EarthShape research programme. Review both PDFs visually after rebuilding.

## Historical override — early September 2026

The [September redesign record](redesign-2026-09.md) supersedes conflicting historical snapshots below. Published papers now precede a separate manuscripts group; all seven published papers remain accessible. Metrics are collapsed, not removed. Rhizosphere uses its permanent DOI. Target journal names, metrics and homepage links are not rendered for in-preparation manuscripts. The historical target-journal fields below must not be used to infer a submission.

Both manuscript title pages were rechecked on 6 September 2026. Archaeal manuscript authors: Xiuling Wang, Alexander Bartholomäus, Lars Ganzert, Thomas Friedl, Rómulo Oses, Dirk Wagner. Metagenomic manuscript authors: Xiuling Wang, Alexander Bartholomäus, Sizhong Yang, Lars Ganzert, Thomas Friedl, Rómulo Oses, Dirk Wagner. Xiuling is marked first and corresponding author in both current sources. Current titles are in `app/components/AcademicHome.tsx`; both remain in preparation, with no submission receipt asserted. Degree not yet awarded; no new current employment claim. The mobile photograph follows the text; the desktop photograph remains left.

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
   - Applied Soil Ecology: `JCR 2025 · IF 5.6 · Q1` in Soil Science.
   - Environmental Microbiome: `JCR 2025 · IF 6.2`; JCR quartiles are `Q1` in Genetics & Heredity and Microbiology. Springer reports the 2025 IF directly on the [journal homepage](https://link.springer.com/journal/40793).
   - Rhizosphere: `JCR 2025 · IF 3.9 · Q1` (2025 JCR, released by Clarivate in June 2026; the preceding 2024 IF was 3.5).
3. Show XinRui Ranking separately from JCR and always include its year. The current snapshot is the independent third-party `XinRui Ranking 2026`, released on 24 March 2026; `T1–T4` in English corresponds to `1区–4区` in Chinese. Keep the research-area ranking and every relevant JCR-category ranking rather than selecting only the best category.
   - Applied Soil Ecology: research area Agricultural and Forestry Science `2区 TOP`; category Soil Science `2区`. [Official XinRui record](https://www.xr-scholar.com/Journals/j-64z5n0w4)
   - Environmental Microbiome: research area Environment Science and Ecology `2区`; categories Genetics & Heredity `2区` and Microbiology `2区`. [Official XinRui record](https://www.xr-scholar.com/Journals/j-p49y3g8j)
   - BMC Microbiology: research area Biology `2区 TOP`; category Microbiology `2区`. [Official XinRui record](https://www.xr-scholar.com/Journals/j-z4vg38e4)
   - Rhizosphere: research area Biology `2区`; categories Plant Sciences `2区`, Microbiology `3区`, Soil Science `3区`. [Official XinRui record](https://www.xr-scholar.com/Journals/j-n4xzx702)
   - Microorganisms: research area Biology `2区`; category Microbiology `3区`. [Official XinRui record](https://www.xr-scholar.com/Journals/j-v4g1lk04?culture=en)
   - Scientific Reports: research area Multidisciplinary Science `3区`; category Multidisciplinary Sciences `3区`. [Official 2026 category record](https://www.xr-scholar.com/Category/JCR/Journals/2026/AObzj2EwG9?ps=50)
   - Pakistan Journal of Botany: research area Biology `4区`; category Plant Sciences `4区`. [Official XinRui record](https://www.xr-scholar.com/Journals/j-z4vzlwmj)
   - Science of the Total Environment has no current 2026 XinRui ranking. Keep `暂无分区` / `Not currently listed`; do not substitute a historical XinRui value or a CAS ranking.
4. Science of the Total Environment keeps its 2024 publication-year metric: `JCR 2024 · IF 8.0 · Q1`.
5. Update both Chinese and English status labels when a manuscript changes stage.
6. Once a DOI and bibliographic metadata are officially assigned, replace the journal-home link and add only confirmed details. Springer and Crossref record the BMC Microbiology article as published online on 20 July 2026 with DOI `10.1186/s12866-026-05436-3`; neither source currently registers a volume, issue, page range, or article number, so the website must not invent one. Crossref/Elsevier records the published Rhizosphere article as volume `39`, article `101421`, DOI `10.1016/j.rhisph.2026.101421`; no issue number is registered. The Rhizosphere card currently opens the official Elsevier author Share Link `https://authors.elsevier.com/a/1nS2y8jaVhezS3`, which provides free access through 4 September 2026. After that date, test the Share Link and replace it with the permanent DOI URL if it no longer resolves usefully.
7. Keep active manuscripts before published work, using the exact verified stage (`IN PREPARATION` is not `SUBMITTED` or `UNDER REVIEW`), then sort published papers in reverse chronological order. The two manuscripts being prepared for Applied Soil Ecology and Environmental Microbiome currently appear first; BMC Microbiology remains the newest published item, followed by the 2026 Rhizosphere paper and the earlier 2026 publication.
8. Every publication and manuscript card must include its complete verified author list. Use DOI/Crossref metadata for published articles, the journal PDF for the 2016 Pakistan Journal of Botany paper, and the current private manuscript package for unpublished work. Highlight `Xiuling Wang`; preserve the published `Xiu-Ling Wang` spelling in the 2016 author list.
9. The visible website update month is stored in both language blocks in `app/components/AcademicHome.tsx`.

## Manuscript evidence

The public titles, author roles, and status snapshot are stored in `app/components/AcademicHome.tsx`. Source submissions and reviewer correspondence remain in private manuscript folders outside this public repository. Verify the latest private submission package before changing any title, role, journal, status, IF, quartile, or DOI.

Current public status snapshot: *Archaeal communities in intracellular and extracellular DNA fractions share broad regional patterns but diverge locally in Chilean soils* is being prepared for *Applied Soil Ecology*. *Intact-cell-associated soil metagenomic potential tracks coupled mineral–nutrient–water gradients across Chilean climate and soil depth* is being prepared for *Environmental Microbiome*. Neither manuscript has been formally submitted, so both public cards use `准备投稿` / `IN PREPARATION` and link to the target journal homepage because no public article URL or DOI exists. Both current manuscripts list `Xiuling Wang, Alexander Bartholomäus, Thomas Friedl, Dirk Wagner`, with Xiuling Wang as first author and Dirk Wagner as corresponding author. BMC Microbiology published *Depth-dependent differences between direct total DNA and an intracellular-DNA-enriched fraction in bulk-soil bacterial and fungal communities of a Lonicera japonica field* online on 20 July 2026. Its author order is `Chenyi Mao, Xiuling Wang`, with Xiuling Wang identified as corresponding author, and its DOI is `10.1186/s12866-026-05436-3`. Springer currently labels the accessible article as an unedited early version, but also records it as published; until Springer/Crossref supplies fuller bibliographic metadata, the compact card shows the journal name without an invented volume or article number. The Rhizosphere article is fully published in 2026 with Xiuling Wang listed as first and corresponding author, followed by Gaodu Liang and Li Zhuang. Its complete registered citation is *Rhizosphere* 39, 101421, DOI `10.1016/j.rhisph.2026.101421`; the card uses Elsevier's time-limited author Share Link and follows BMC Microbiology among the published papers. Affiliations and author email addresses are intentionally omitted from the compact public cards.

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
