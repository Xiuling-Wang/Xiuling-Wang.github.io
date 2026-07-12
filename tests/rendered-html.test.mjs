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
  assert.match(html, /Hi，我是秀玲/);
  assert.match(html, /AI 智能体与研究工作流/);
  assert.match(html, /约 5 年 R 使用经验/);
  assert.match(html, /<b>一作<\/b>/);
  assert.match(html, /<b>通讯<\/b>/);
  assert.match(html, /<b>二作<\/b>/);
  assert.match(html, /JCR 2025 · IF 5\.4 · Q1/);
  assert.match(html, /JCR 2024（发表年度）· IF 8\.0 · Q1/);
  assert.doesNotMatch(html, /JIF|LAST AUTHOR|CO-CORRESPONDING|共同通讯|WHAT&#x27;S NEXT/);
  assert.doesNotMatch(html, /论文与在审稿件按当前状态列出/);
  assert.match(html, /真菌与跨环境微生物组/);
  assert.doesNotMatch(html, /class="photo-note"/);
  assert.match(html, /href="#site-qr-modal"/);
  assert.match(html, /id="site-qr-modal"/);
});

test("renders a separate English route and local maintenance assets", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Hi, I’m Xiuling/);
  assert.match(html, /I work at the intersection of microbial ecology and data/);
  assert.match(html, /AI agents &amp; research workflows/);
  assert.match(html, /CORRESPONDING AUTHOR/);
  assert.match(html, /SECOND AUTHOR/);
  assert.match(html, /href="\/" lang="zh-CN">中文<\/a>/);
  assert.match(html, /src="\/site-qr\.svg"/);
  assert.match(html, /ORCID.*Google Scholar.*LinkedIn.*ResearchGate.*GitHub/s);
  assert.match(html, /https:\/\/github\.com\/Xiuling-Wang/);
  assert.match(html, /https:\/\/xiuling-wang\.pages\.dev\//);
});
