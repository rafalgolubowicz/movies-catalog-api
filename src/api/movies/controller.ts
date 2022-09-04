import { NextFunction, Request, Response } from "express";

import { findMovies } from "./service";
import { GetMoviesListRequestQueryParams } from "./types";

export const getMovies = async (
  req: Request<
    unknown,
    unknown,
    unknown,
    GetMoviesListRequestQueryParams
  >,
  res: Response,
  next: NextFunction
) => {
  const { duration, genres = [] } = req.query;

  const movies = await findMovies({
    genres: typeof genres === "string" ? [genres] : genres || [],
    minRuntime: parseInt(duration) - 10,
    maxRuntime: parseInt(duration) + 10
  });

  // TODO: Sort movies by a number of genres that match

  res.status(200).send(movies);
  next();
};
