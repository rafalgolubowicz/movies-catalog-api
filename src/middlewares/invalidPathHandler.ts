import { Middleware } from "express";
import { StatusCodes } from "http-status-codes";

const invalidPathHandler: Middleware = (_request, response) => {
  response.status(StatusCodes.NOT_FOUND);

  response.send("Page not found");
};

export default invalidPathHandler;
