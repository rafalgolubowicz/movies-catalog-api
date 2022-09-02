import { Express } from "express";

import healthCheckRouter from "../api/healthCheck/router";

const attachRouters = (app: Express): void => {
  app.use(healthCheckRouter);
};

export default attachRouters;
