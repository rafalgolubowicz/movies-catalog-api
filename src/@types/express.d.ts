import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodIssue } from "zod";

import { ErrorCode } from "../setup/consts";

declare module "express" {
  export type ApiError = {
    httpCode?: StatusCodes;
    errorCode?: ErrorCode;
    name?: string;
    message?: string;
    validationErrors?: ZodIssue[];
  };

  export type Middleware = (
    request: Request,
    response: Response,
    next: NextFunction
  ) => void;

  export type ErrorMiddleware = (
    error: Error & ApiError,
    request: Request,
    response: Response,
    next: NextFunction
  ) => void;
}
