# September 2026 career-site update

## Scope

Implemented a bilingual career-focused update, using the supplied review as advice rather than adopting its embedded execution instructions wholesale. Retained Cloudflare Pages as the primary host, the GitHub mirror, Chinese at `/`, and English at `/en/`. No Sites project was created or revived. After reviewing the local preview, Xiuling approved publishing this version to the existing public hosts.

## Changes

- Name, research identity, postdoctoral/research intent and contact now lead the hero. The desktop photograph stays left as previously requested; mobile text comes before the shorter photograph.
- Retained the header QR and native enlargement. Reduced mobile header height and removed continuous emoji animation without removing the personal touches.
- Added a concise capability strip and two evidence-based work summaries alongside EarthShape. Metagenomic upstream work is explicitly credited to collaborators; Xiuling's downstream role is clear.
- Removed speculative dental-plaque expertise and premature student-recruitment copy. Doctoral education is described as ongoing, not as an awarded degree or a new current employment appointment. No graduation deadline is invented.
- Kept all seven published papers, their complete authors and chronological order. The two manuscripts are in a separate group. In-preparation manuscripts have no target-journal link or displayed journal metrics.
- Existing published-journal IF and ranking values are preserved in native, initially closed details in both languages. This update did not independently reverify journal metrics.
- Rhizosphere now uses the permanent DOI rather than the expired time-limited sharing URL.
- Updated the two manuscript titles, author order and first/corresponding labels from current author-edited DOCX title pages, read-only. No private manuscript files, affiliations or coauthor email addresses were copied into the public repository.
- AI remains an explicitly stated supporting skill; repetitive platform branding was removed.
- Updated metadata, sitemap date and bilingual update month; preserved the existing social image, static export, accessibility anchors and language routes.

## Deliberately not adopted

- No private CV was uploaded. A real, reviewed public CV needs Xiuling's selection before enabling direct PDF download. The existing CV-request link remains functional; no placeholder download button is shown.
- No analytics, domain purchase, automatic language redirection, CMS or new dependency.
- No removal of the QR, left desktop photograph, full publication list or existing ranking information merely because the review suggested it.
- No wholesale component rewrite. Added project content in `content/selected-work.ts` and reused a shared publication renderer.

## Validation

Run `npm run lint` and `npm test`. The latter builds and exports the same `docs/` artifact for both hosts and verifies bilingual content, author lists, publication grouping, DOI links, metadata, QR controls and script-free export. Browser screenshot/viewport QA and live deployment verification were not performed in this local update.

## Next handoff

Select a CV safe for public download before enabling that feature. Recheck manuscript status against submission receipts before any future status promotion. Deployment completion is verified against both public language routes after publication; approval alone is not evidence of a completed deployment.
