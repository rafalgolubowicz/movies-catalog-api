import normalizePort from "./utils/normalizePort";
import { SERVER_PORT } from "./setup/environment";
import createExpressApp from "./utils/createExpressApp";
import logger from "./utils/logger";
import healthCheckRouter from "./api/healthCheck/router";
import moviesRouter from "./api/movies/router";
import { SwaggerEndpoints } from "./swagger/consts";
import swaggerRouter from "./swagger/router";

const app = createExpressApp([
  swaggerRouter,
  healthCheckRouter,
  moviesRouter
]);

const port = normalizePort(SERVER_PORT);

// Start server
app.listen(port, () => {
  logger.info(`Server is listening on port ${SERVER_PORT}!`);
  logger.info(
    `Docs available at http://localhost:${port}${SwaggerEndpoints.Swagger}`
  );
});
