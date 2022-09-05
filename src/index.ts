import normalizePort from "./utils/normalizePort";
import { SERVER_PORT } from "./setup/environment";
import createExpressApp from "./utils/createExpressApp";
import setupSwagger from "./utils/setupSwagger";
import logger from "./utils/logger";
import healthCheckRouter from "./api/healthCheck/router";
import moviesRouter from "./api/movies/router";

const app = createExpressApp([healthCheckRouter, moviesRouter]);

const port = normalizePort(SERVER_PORT);

// Start server
app.listen(port, () => {
  logger.info(`Server is listening on port ${SERVER_PORT}!`);
});

// Start Swagger
setupSwagger(app, "/swagger", () => {
  logger.info(`Docs available at http://localhost:${port}/swagger`);
});
