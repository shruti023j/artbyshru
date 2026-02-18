import type { Express } from "express";
import { createServer } from "http";

export async function registerRoutes(app: Express) {
  // Basic health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);
  return httpServer;
}