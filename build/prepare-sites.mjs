import { access, copyFile, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const server = resolve(dist, "server");
const metadata = resolve(dist, ".openai");
const hostingConfig = resolve(root, ".openai", "hosting.json");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

await rm(server, { recursive: true, force: true });
await rm(metadata, { recursive: true, force: true });
await mkdir(server, { recursive: true });
await copyFile(resolve(root, "worker", "index.js"), resolve(server, "index.js"));

if (await exists(hostingConfig)) {
  await mkdir(metadata, { recursive: true });
  await copyFile(hostingConfig, resolve(metadata, "hosting.json"));
}
