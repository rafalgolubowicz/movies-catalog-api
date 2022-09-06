import { ErrorMiddleware } from "express";

import logger from "../utils/logger";

const errorLogger: ErrorMiddleware = (
  error,
  _request,
  _response,
  next
) => {
  if (error.isOperational) {
    logger.info(error);
  } else {
    logger.error(error.stack);
  }

  next(error);
};

export default errorLogger;
