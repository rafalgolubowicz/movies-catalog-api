import { Router } from "express";

import { HealthCheckEndpoints } from "./consts";
import { getSystemStatus } from "./controller";

const healthCheckRouter = Router();

/**
 * @openapi
 * /status:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
healthCheckRouter.get(HealthCheckEndpoints.STATUS, getSystemStatus);

export default healthCheckRouter;
