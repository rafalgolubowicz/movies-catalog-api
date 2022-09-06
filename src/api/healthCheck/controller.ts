import { Middleware } from "express";
import { StatusCodes } from "http-status-codes";

import { HealthCheckStatus } from "./consts";

export const getSystemStatus: Middleware = async (
  _request,
  response
) => {
  const data = {
    uptime: process.uptime(),
    status: HealthCheckStatus.UP,
    timestamp: Date.now()
  };

  return response.status(StatusCodes.OK).send(data);
};
