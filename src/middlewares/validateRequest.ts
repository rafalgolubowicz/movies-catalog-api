import { ApiError, Middleware } from "express";
import { StatusCodes } from "http-status-codes";
import { AnyZodObject, ZodError } from "zod";

import { ErrorCode } from "../setup/consts";

const validateRequest =
  (schema: AnyZodObject): Middleware =>
  async (request, response, next) => {
    try {
      await schema.parseAsync({
        body: request.body,
        query: request.query,
        params: request.params
      });

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError: ApiError = {
          name: "ValidatorError",
          message: "ValidatorError",
          errorCode: ErrorCode.VALIDATION_ERRORS,
          httpCode: StatusCodes.BAD_REQUEST,
          validationErrors: error.errors
        };

        return response
          .status(StatusCodes.BAD_REQUEST)
          .send(validationError);
      }

      return response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(error);
    }
  };

export default validateRequest;
