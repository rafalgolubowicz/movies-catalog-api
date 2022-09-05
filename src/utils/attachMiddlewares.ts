import { ErrorMiddleware, Express, Middleware } from "express";

const attachMiddlewares = <T extends Middleware | ErrorMiddleware>(
  app: Express,
  middlewares: T[]
): void => {
  for (const middleware of middlewares) {
    app.use(middleware);
  }
};

export default attachMiddlewares;
