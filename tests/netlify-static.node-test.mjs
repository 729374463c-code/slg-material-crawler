import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("builds a standalone Netlify entry page", async () => {
  const html = await readFile(
    new URL("../dist/netlify/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /<script[^>]+src="\/assets\//);
});
