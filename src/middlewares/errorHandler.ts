import { ErrorMiddleware } from "express";
import { StatusCodes } from "http-status-codes";

import { ErrorCode } from "../setup/consts";

const errorHandler: ErrorMiddleware = (
  error,
  _request,
  response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next
) => {
  const status = error.httpCode || StatusCodes.INTERNAL_SERVER_ERROR;

  return response.status(status).send({
    httpCode: status,
    errorCode: error.errorCode || ErrorCode.INTERNAL_ERROR,
    message: error.message || error.name,
    validationErrors: error.validationErrors || []
  });
};

export default errorHandler;
