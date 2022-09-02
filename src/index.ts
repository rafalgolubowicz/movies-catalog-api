import normalizePort from "./utils/normalizePort";
import { SERVER_PORT } from "./setup/environment";
import createExpressApp from "./utils/createExpressApp";

const app = createExpressApp();

const port = normalizePort(SERVER_PORT);

// Start server
app.listen(port, () =>
  console.log(`Server is listening on port ${SERVER_PORT}!`)
);
