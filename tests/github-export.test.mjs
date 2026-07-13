import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages export is framework-free static HTML", async () => {
  const [zh, en, notFound, robots, sitemap, assets] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/en/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/404.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../docs/sitemap.xml", import.meta.url), "utf8"),
    readdir(new URL("../docs/assets/", import.meta.url)),
  ]);

  for (const html of [zh, en]) {
    assert.doesNotMatch(html, /<script\b/i);
    assert.doesNotMatch(html, /modulepreload/i);
    assert.doesNotMatch(html, /__VINEXT|__RSC/i);
    assert.match(html, /href="#profile"/);
    assert.match(html, /href="#publications"/);
    assert.match(html, /href="#background"/);
    assert.match(html, /href="#contact"/);
  }

  assert.match(zh, /我在微生物生态和数据之间工作/);
  assert.match(en, /I work at the intersection of microbial ecology and data/);
  assert.match(zh, /<html lang="zh-CN">/);
  assert.match(en, /<html lang="en">/);
  assert.match(en, /<link rel="canonical" href="https:\/\/xiuling-wang\.pages\.dev\/en\/"/);
  assert.match(en, /<meta property="og:title" content="Xiuling Wang \| Microbial Ecologist"/);
  assert.match(en, /<meta property="og:locale" content="en_US"/);
  assert.doesNotMatch(en, /<meta property="og:title" content="王秀玲/);
  assert.match(notFound, /页面未找到/);
  assert.match(notFound, /name="robots" content="noindex, nofollow"/);
  assert.doesNotMatch(notFound, /class="publication-list"/);
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Sitemap: https:\/\/xiuling-wang\.pages\.dev\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/xiuling-wang\.pages\.dev\/en\/<\/loc>/);
  assert.match(sitemap, /<lastmod>2026-07-14<\/lastmod>/);
  assert.equal(assets.some((name) => /\.(?:m?js|map)$/.test(name)), false);
});
