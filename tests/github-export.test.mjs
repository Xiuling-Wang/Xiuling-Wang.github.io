import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages export is framework-free static HTML", async () => {
  const [zh, en] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/en/index.html", import.meta.url), "utf8"),
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
});
