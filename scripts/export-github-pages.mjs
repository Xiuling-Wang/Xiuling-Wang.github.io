import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputRoot = new URL("../docs/", import.meta.url);
const clientRoot = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  const response = await worker.fetch(
    new Request(`https://xiuling-wang.github.io${pathname}`, {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Static render failed for ${pathname}: ${response.status}`);
  }

  return response.text();
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

const [chineseHtml, englishHtml] = await Promise.all([render("/"), render("/en")]);
await writeFile(new URL("index.html", outputRoot), chineseHtml);
await mkdir(new URL("en/", outputRoot), { recursive: true });
await writeFile(new URL("en/index.html", outputRoot), englishHtml);
await writeFile(new URL("404.html", outputRoot), chineseHtml);
await writeFile(new URL(".nojekyll", outputRoot), "");

console.log("GitHub Pages export created in docs/ for / and /en/.");
