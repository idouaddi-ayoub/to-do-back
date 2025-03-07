import "dotenv/config";
import { createHttpServer, httpServerOnListen } from "./httpServer";
import { HTTP_SERVER_PORT } from "./env";

const httpServer = createHttpServer();

httpServer.listen(HTTP_SERVER_PORT, httpServerOnListen);
