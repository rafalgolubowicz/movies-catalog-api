import cors from "cors";
import express, { Router } from "express";
import helmet from "helmet";

import errorHandler from "../middlewares/errorHandler";
import errorLogger from "../middlewares/errorLogger";
import invalidPathHandler from "../middlewares/invalidPathHandler";
import { CORS_ORIGIN } from "../setup/environment";

import attachMiddlewares from "./attachMiddlewares";
import attachRouters from "./attachRouters";

const createExpressApp = (routers: Router[]) => {
  // Boot express
  const app = express();

  // Add initial middlewares
  attachMiddlewares(app, [
    helmet(),
    express.json(),
    cors({ origin: CORS_ORIGIN })
  ]);

  // Add routers
  attachRouters(app, routers);

  // Add error handlers
  attachMiddlewares(app, [
    errorLogger,
    errorHandler,
    invalidPathHandler
  ]);

  return app;
};

export default createExpressApp;
