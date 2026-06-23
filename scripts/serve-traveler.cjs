const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "src", "apps", "traveler");
const preferredPort = Number(process.env.PORT || 3001);
let nextPort = preferredPort;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const decodedPath = decodeURIComponent(url.pathname);
  const requestedPath = decodedPath === "/" ? "/index.html" : decodedPath;
  const filePath = path.resolve(root, `.${requestedPath}`);

  if (!filePath.startsWith(`${root}${path.sep}`) && filePath !== root) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(res, error.code === "ENOENT" ? 404 : 500, error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }

    send(res, 200, data, contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream");
  });
});

function listen(port) {
  server.listen(port, "127.0.0.1", () => {
    console.log(`Traveler landing page: http://127.0.0.1:${port}`);
    console.log(`Serving ${root}`);
  });
}

server.on("error", (error) => {
  if ((error.code === "EADDRINUSE" || error.code === "EACCES") && !process.env.PORT) {
    nextPort += 1;
    listen(nextPort);
    return;
  }

  throw error;
});

listen(nextPort);
