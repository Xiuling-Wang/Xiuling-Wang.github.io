# Xiuling Wang — Academic Website

Bilingual academic and career website for Xiuling Wang, a microbial ecologist working across climate gradients, deep-soil microbiomes, iDNA/eDNA, rhizosphere and edible-fungi ecology, bacterial and fungal community analysis, R, and AI-assisted research workflows.

## Public website

- Chinese: https://xiuling-wang.pages.dev/
- English: https://xiuling-wang.pages.dev/en/
- GitHub profile: https://github.com/Xiuling-Wang

## Local development

```bash
npm install
npm run dev
```

## Validation and publication

```bash
npm test
npm run qr
npm run export:github
```

The production-ready static build is written to `docs/` and is deployed to both Cloudflare Pages and GitHub Pages. `dist/` is an intermediate vinext build directory.

Content and migration notes are stored in [`content/site-maintenance.md`](content/site-maintenance.md). Runtime images, the QR code, and the social-sharing card are stored in `public/`.
