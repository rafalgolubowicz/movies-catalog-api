import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";

import { CORS_ORIGIN } from "../setup/environment";

const attachMiddlewares = (app: Express): void => {
  app.use(helmet());
  app.use(express.json());
  app.use(cors({ origin: CORS_ORIGIN }));
};

export default attachMiddlewares;
