import swaggerJsdoc from "swagger-jsdoc";

import { version } from "../../package.json";

export const SwaggerEndpoints = {
  Swagger: "/swagger",
  Json: "/swagger.json"
};

export const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version
    }
  },
  apis: ["src/api/**/*.ts", "src/setup/database/**/*.ts"]
};

export const swaggerSpec = swaggerJsdoc(options);
