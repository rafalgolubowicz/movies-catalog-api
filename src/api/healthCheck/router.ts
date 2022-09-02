import { Router } from "express";

import { HealthCheckEndpoints } from "./consts";
import { getSystemStatus } from "./controller";

const healthCheckRouter = Router();

healthCheckRouter.use(HealthCheckEndpoints.STATUS, getSystemStatus);

export default healthCheckRouter;
