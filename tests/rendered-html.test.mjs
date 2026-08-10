import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Chinese academic homepage with the requested publication labels", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /Hi，我是秀玲/);
  assert.doesNotMatch(html, /我是秀玲。/);
  assert.match(html, /气候 · 深度 · 宿主微生物组/);
  assert.match(html, /计算工作流与 AI 辅助研究/);
  assert.match(html, /约 5 年 R 使用经验/);
  assert.match(html, /<b>一作<\/b>/);
  assert.match(html, /<b>通讯<\/b>/);
  assert.match(html, /<b>二作<\/b>/);
  assert.match(html, /JCR 2025 · IF 5\.4 · Q1/);
  assert.match(html, /JCR 2025 · IF 5\.6 · Q1（土壤科学）/);
  assert.match(html, /JCR 2025 · IF 6\.2 · Q1（遗传学 \/ 微生物学）/);
  assert.match(html, /JCR 2024（发表年度）· IF 8\.0 · Q1/);
  assert.match(html, /新锐分区 2026 · 大类：农林科学 2区（TOP）· 小类：土壤科学 2区/);
  assert.match(html, /新锐分区 2026 · 大类：环境科学与生态学 2区 · 小类：遗传学 2区 \/ 微生物学 2区/);
  assert.match(html, /新锐分区 2026 · 大类：生物学 2区（TOP）· 小类：微生物学 2区/);
  assert.match(html, /新锐分区 2026 · 大类：生物学 2区 · 小类：植物科学 2区 \/ 微生物学 3区 \/ 土壤科学 3区/);
  assert.match(html, /新锐分区 2026 · 暂无分区/);
  assert.match(html, /新锐分区 2026 · 大类：综合性期刊 3区 · 小类：综合性期刊 3区/);
  assert.match(html, /新锐分区 2026 · 大类：生物学 4区 · 小类：植物科学 4区/);
  assert.equal((html.match(/class="publication-ranking-xinrui"/g) ?? []).length, 9);
  assert.doesNotMatch(html, /JIF|LAST AUTHOR|CO-CORRESPONDING|共同通讯|WHAT&#x27;S NEXT/);
  assert.doesNotMatch(html, /论文与在审稿件按当前状态列出/);
  assert.match(html, /真菌与跨环境微生物组/);
  assert.match(html, /<b>一作 &amp; 通讯<\/b>/);
  assert.doesNotMatch(html, /<em>已发表<\/em>/);
  assert.match(html, /href="https:\/\/authors\.elsevier\.com\/a\/1nS2y8jaVhezS3"/);
  assert.match(html, /Rhizosphere · 39 · 101421/);
  assert.doesNotMatch(html, /Rhizosphere · 101421 · DOI/);
  assert.match(html, /class="publication-authors"[^>]*>.*?<strong>Xiuling Wang<\/strong>.*?Gaodu Liang.*?Li Zhuang.*?<\/p>/);
  assert.equal((html.match(/class="publication-authors"/g) ?? []).length, 9);
  assert.equal((html.match(/<strong>(?:Xiuling Wang|Xiu-Ling Wang)<\/strong>/g) ?? []).length, 9);
  assert.match(html, /Archaeal communities in intracellular and extracellular DNA fractions.*?class="publication-authors"[^>]*>.*?<strong>Xiuling Wang<\/strong>.*?Alexander Bartholomäus.*?Thomas Friedl.*?Dirk Wagner.*?<\/p>/);
  assert.match(html, /Intact-cell-associated soil metagenomic potential.*?class="publication-authors"[^>]*>.*?<strong>Xiuling Wang<\/strong>.*?Alexander Bartholomäus.*?Thomas Friedl.*?Dirk Wagner.*?<\/p>/);
  assert.match(html, /href="https:\/\/www\.sciencedirect\.com\/journal\/applied-soil-ecology"/);
  assert.match(html, /href="https:\/\/link\.springer\.com\/journal\/40793"/);
  assert.equal((html.match(/<em>准备投稿<\/em>/g) ?? []).length, 2);
  assert.equal((html.match(/class="publication-manuscript"/g) ?? []).length, 2);
  assert.match(html, /Depth-dependent differences between direct total DNA.*?class="publication-authors"[^>]*>.*?Chenyi Mao.*?<strong>Xiuling Wang<\/strong>.*?<\/p>/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1186\/s12866-026-05436-3"/);
  assert.doesNotMatch(html, /<em>已接收 · 待出版<\/em>/);
  assert.doesNotMatch(html, /已投稿|审稿中|大修已返 · 待决定/);
  assert.match(html, /Mechanical Damage Modulates.*?class="publication-authors"[^>]*>.*?Jingming Ma.*?Mingzheng Zhang.*?Qian Liu.*?<strong>Xiuling Wang<\/strong>.*?<\/p>/);
  assert.match(html, /Pakistan Journal of Botany|Zhong-Ping Tian/);
  assert.match(html, /Zhong-Ping Tian.*?<strong>Xiu-Ling Wang<\/strong>.*?Xiao-Yi Zhao.*?Li Zhuang/);
  const bmcPosition = html.indexOf("Depth-dependent differences between direct total DNA");
  const archaeaPosition = html.indexOf("Archaeal communities in intracellular and extracellular DNA fractions");
  const metagenomePosition = html.indexOf("Intact-cell-associated soil metagenomic potential");
  const rhizospherePosition = html.indexOf("Rhizosphere fungal communities");
  const microorganismsPosition = html.indexOf("Mechanical Damage Modulates");
  assert.ok(archaeaPosition < metagenomePosition && metagenomePosition < bmcPosition && bmcPosition < rhizospherePosition && rhizospherePosition < microorganismsPosition);
  assert.doesNotMatch(html, /小修已返 · 待决定|小修已返 · 待接收/);
  assert.doesNotMatch(html, /class="photo-note"/);
  assert.match(html, /popovertarget="site-qr-popover"/i);
  assert.match(html, /id="site-qr-popover"/);
  assert.match(html, /popover="auto"/);
  assert.match(html, /src="\/xiuling-mountains\.webp"/);
  assert.match(html, /<ol class="publication-list"/);
});

test("renders a separate English route and local maintenance assets", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<html lang="en">/);
  assert.match(html, /Hi, I’m Xiuling/);
  assert.doesNotMatch(html, /Hi, I’m Xiuling\./);
  assert.match(html, /CORRESPONDING AUTHOR/);
  assert.match(html, /FIRST &amp; CORRESPONDING AUTHOR/);
  assert.equal((html.match(/<em>IN PREPARATION<\/em>/g) ?? []).length, 2);
  assert.match(html, /class="publication-authors"[^>]*>.*?<strong>Xiuling Wang<\/strong>.*?Gaodu Liang.*?Li Zhuang.*?<\/p>/);
  assert.equal((html.match(/class="publication-authors"/g) ?? []).length, 9);
  assert.equal((html.match(/<strong>(?:Xiuling Wang|Xiu-Ling Wang)<\/strong>/g) ?? []).length, 9);
  assert.match(html, /SECOND AUTHOR/);
  assert.match(html, /JCR 2025 · IF 3\.9 · Q1/);
  assert.match(html, /JCR 2025 · IF 5\.6 · Q1 \(Soil Science\)/);
  assert.match(html, /JCR 2025 · IF 6\.2 · Q1 \(Genetics &amp; Heredity \/ Microbiology\)/);
  assert.match(html, /XinRui Ranking 2026 · Area: Agricultural and Forestry Science T2 \(Top\) · Category: Soil Science T2/);
  assert.match(html, /XinRui Ranking 2026 · Area: Environment Science and Ecology T2 · Categories: Genetics &amp; Heredity T2 \/ Microbiology T2/);
  assert.match(html, /XinRui Ranking 2026 · Area: Biology T2 \(Top\) · Category: Microbiology T2/);
  assert.match(html, /XinRui Ranking 2026 · Area: Biology T2 · Categories: Plant Sciences T2 \/ Microbiology T3 \/ Soil Science T3/);
  assert.match(html, /XinRui Ranking 2026 · Not currently listed/);
  assert.match(html, /XinRui Ranking 2026 · Area: Multidisciplinary Science T3 · Category: Multidisciplinary Sciences T3/);
  assert.match(html, /XinRui Ranking 2026 · Area: Biology T4 · Category: Plant Sciences T4/);
  assert.equal((html.match(/class="publication-ranking-xinrui"/g) ?? []).length, 9);
  assert.doesNotMatch(html, /<em>PUBLISHED<\/em>/);
  assert.match(html, /href="https:\/\/authors\.elsevier\.com\/a\/1nS2y8jaVhezS3"/);
  assert.match(html, /Rhizosphere · 39 · 101421/);
  assert.match(html, /Climate · depth · host microbiomes/);
  assert.match(html, /Statistics &amp; microbiome data.*R &amp; reproducible computation.*Microbial ecology laboratory work.*Computational workflows &amp; AI-assisted research/s);
  assert.doesNotMatch(html, /MINOR REVISION RETURNED · AWAITING DECISION/);
  assert.match(html, /<a[^>]*href="\/"[^>]*lang="zh-CN"[^>]*>中文<\/a>/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1186\/s12866-026-05436-3"/);
  assert.doesNotMatch(html, /ACCEPTED · AWAITING PUBLICATION/);
  assert.doesNotMatch(html, /SUBMITTED|IN REVIEW|MAJOR REVISION RETURNED · AWAITING DECISION/);
  assert.equal((html.match(/class="publication-manuscript"/g) ?? []).length, 2);
  assert.match(html, /<link rel="canonical" href="https:\/\/xiuling-wang\.pages\.dev\/en\/"/);
  assert.match(html, /<meta property="og:title" content="Xiuling Wang \| Microbial Ecologist"/);
  assert.match(html, /<meta property="og:locale" content="en_US"/);
  assert.match(html, /<meta name="twitter:title" content="Xiuling Wang \| Microbial Ecologist"/);
  assert.match(html, /src="\/site-qr\.svg"/);
  assert.match(html, /ORCID.*Google Scholar.*LinkedIn.*ResearchGate.*GitHub/s);
  assert.match(html, /https:\/\/github\.com\/Xiuling-Wang/);
  assert.match(html, /https:\/\/xiuling-wang\.pages\.dev\//);
});
