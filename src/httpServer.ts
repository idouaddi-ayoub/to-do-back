import express, { type Express, json } from "express";
import cors from "cors";
import routes from "./routes";
import { HTTP_SERVER_PORT } from "./env";
import errorHandler from "./utils/errorHandler";

export function createHttpServer(): Express {
  const httpServer = express();
  httpServer.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "SEARCH"],
    })
  );
  httpServer.use(json({ limit: "1mb" }));
  httpServer.use("/api", routes);
  httpServer.use(errorHandler);
  return httpServer;
}

export function httpServerOnListen() {
  console.log(
    `API started listening on port http://localhost:${HTTP_SERVER_PORT}`
  );
}
