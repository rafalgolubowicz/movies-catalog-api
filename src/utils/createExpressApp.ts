import express from "express";

import attachRouters from "./attachRouters";
import attachMiddlewares from "./attachMiddlewares";

const createExpressApp = () => {
  // Boot express
  const app = express();

  // Add middlewares
  attachMiddlewares(app);

  // Add routers
  attachRouters(app);

  return app;
};

export default createExpressApp;
