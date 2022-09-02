import { Express, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { swaggerSpec } from "./consts";

const setupSwagger = (
  app: Express,
  path: string,
  callback?: () => void
) => {
  // Swagger page
  app.use(path, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get(`${path}.json`, (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  callback?.();
};

export default setupSwagger;
