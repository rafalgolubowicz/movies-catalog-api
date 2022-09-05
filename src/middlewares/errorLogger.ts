import { ErrorMiddleware } from "express";

import logger from "../utils/logger";

const errorLogger: ErrorMiddleware = (
  error,
  _request,
  _response,
  next
) => {
  logger.error(error.stack);

  next(error);
};

export default errorLogger;
