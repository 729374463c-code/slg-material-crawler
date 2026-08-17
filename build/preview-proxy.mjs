import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer, request as httpRequest } from "node:http";
import { extname, join, normalize } from "node:path";

const clientRoot = join(process.cwd(), "dist", "client");
const upstreamPort = Number(process.env.PREVIEW_UPSTREAM_PORT ?? 4181);
const previewPort = Number(process.env.PREVIEW_PORT ?? 4182);
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

createServer((incoming, outgoing) => {
  const pathname = decodeURIComponent(new URL(incoming.url ?? "/", "http://127.0.0.1").pathname);
  const normalizedPath = normalize(pathname).replace(/^([/\\]*\.\.[/\\])+/, "");
  const localPath = join(clientRoot, normalizedPath);

  if (existsSync(localPath) && statSync(localPath).isFile()) {
    outgoing.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Type": mimeTypes[extname(localPath)] ?? "application/octet-stream",
    });
    createReadStream(localPath).pipe(outgoing);
    return;
  }

  const upstream = httpRequest(
    {
      hostname: "127.0.0.1",
      port: upstreamPort,
      method: incoming.method,
      path: incoming.url,
      headers: incoming.headers,
    },
    (response) => {
      outgoing.writeHead(response.statusCode ?? 502, response.headers);
      response.pipe(outgoing);
    },
  );
  upstream.on("error", () => {
    outgoing.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    outgoing.end("本地预览服务暂不可用");
  });
  incoming.pipe(upstream);
}).listen(previewPort, "127.0.0.1");
