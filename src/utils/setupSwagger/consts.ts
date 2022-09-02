import swaggerJsdoc from "swagger-jsdoc";

import { version } from "../../../package.json";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version
    }
  },
  apis: ["src/api/**/*.ts"]
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec };
