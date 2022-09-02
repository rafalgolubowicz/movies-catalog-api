import { NextFunction, Request, Response } from "express";

import { HealthCheckStatus } from "./consts";

export const getSystemStatus = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = {
    uptime: process.uptime(),
    status: HealthCheckStatus.UP,
    timestamp: Date.now()
  };

  res.status(200).send(data);
  next();
};
