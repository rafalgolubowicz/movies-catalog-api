import normalizePort from "./utils/normalizePort";
import { SERVER_PORT } from "./setup/environment";
import createExpressApp from "./utils/createExpressApp";
import setupSwagger from "./utils/setupSwagger";

const app = createExpressApp();

const port = normalizePort(SERVER_PORT);

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${SERVER_PORT}!`);
});

// Start Swagger
setupSwagger(app, "/swagger", () => {
  console.log(`Docs available at http://localhost:${port}/swagger`);
});
