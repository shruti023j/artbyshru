import express from "express";
import { createServer } from "http";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 5000;

app.use(express.json());

// Basic API endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Artify server is running!" });
});

// Set up Vite dev server for React app
const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: "spa",
  root: path.resolve("."),
  publicDir: "public",
  build: {
    outDir: "dist"
  }
});

app.use(vite.ssrFixStacktrace);
app.use(vite.middlewares);

const server = createServer(app);
server.listen(port, "0.0.0.0", () => {
  console.log(`Artify server running on port ${port}`);
});