import { Express } from "express";

import healthCheckRouter from "../api/healthCheck/router";
import moviesRouter from "../api/movies/router";

const attachRouters = (app: Express): void => {
  app.use(healthCheckRouter);
  app.use(moviesRouter);
};

export default attachRouters;
