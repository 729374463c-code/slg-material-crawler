import { rm } from "node:fs/promises";

await rm(new URL("../dist/server/media", import.meta.url), {
  recursive: true,
  force: true,
});
