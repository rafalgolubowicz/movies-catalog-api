import { Express, Router } from "express";

const attachRouters = (app: Express, routers: Router[]): void => {
  for (const router of routers) {
    app.use(router);
  }
};

export default attachRouters;
