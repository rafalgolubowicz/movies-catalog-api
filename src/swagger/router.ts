import swaggerUi from "swagger-ui-express";
import { Request, Response, Router } from "express";

import { SwaggerEndpoints, swaggerSpec } from "./consts";

const swaggerRouter = Router();

swaggerRouter.use(
  SwaggerEndpoints.Swagger,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// Docs in JSON format
swaggerRouter.get(
  SwaggerEndpoints.Json,
  (_request: Request, response: Response) => {
    response.setHeader("Content-Type", "application/json");

    return response.send(swaggerSpec);
  }
);

export default swaggerRouter;
