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
  assert.match(html, /JCR 2024（发表年度）· IF 8\.0 · Q1/);
  assert.doesNotMatch(html, /JIF|LAST AUTHOR|CO-CORRESPONDING|共同通讯|WHAT&#x27;S NEXT/);
  assert.doesNotMatch(html, /论文与在审稿件按当前状态列出/);
  assert.match(html, /真菌与跨环境微生物组/);
  assert.match(html, /<b>一作 &amp; 通讯<\/b>/);
  assert.doesNotMatch(html, /<em>已发表<\/em>/);
  assert.match(html, /https:\/\/doi\.org\/10\.1016\/j\.rhisph\.2026\.101421/);
  assert.match(html, /Rhizosphere · 101421 · DOI 10\.1016\/j\.rhisph\.2026\.101421/);
  assert.ok(html.indexOf("Rhizosphere fungal communities") > html.indexOf("Pakistan Journal of Botany"));
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
  assert.match(html, /SECOND AUTHOR/);
  assert.match(html, /JCR 2025 · IF 3\.9 · Q1/);
  assert.doesNotMatch(html, /<em>PUBLISHED<\/em>/);
  assert.match(html, /Climate · depth · host microbiomes/);
  assert.match(html, /Statistics &amp; microbiome data.*R &amp; reproducible computation.*Microbial ecology laboratory work.*Computational workflows &amp; AI-assisted research/s);
  assert.doesNotMatch(html, /MINOR REVISION RETURNED · AWAITING DECISION/);
  assert.match(html, /<a[^>]*href="\/"[^>]*lang="zh-CN"[^>]*>中文<\/a>/);
  assert.match(html, /MAJOR REVISION RETURNED · AWAITING DECISION/);
  assert.match(html, /<link rel="canonical" href="https:\/\/xiuling-wang\.pages\.dev\/en\/"/);
  assert.match(html, /<meta property="og:title" content="Xiuling Wang \| Microbial Ecologist"/);
  assert.match(html, /<meta property="og:locale" content="en_US"/);
  assert.match(html, /<meta name="twitter:title" content="Xiuling Wang \| Microbial Ecologist"/);
  assert.match(html, /src="\/site-qr\.svg"/);
  assert.match(html, /ORCID.*Google Scholar.*LinkedIn.*ResearchGate.*GitHub/s);
  assert.match(html, /https:\/\/github\.com\/Xiuling-Wang/);
  assert.match(html, /https:\/\/xiuling-wang\.pages\.dev\//);
});
