import { NextFunction, Request, Response } from "express";

import { findMovies } from "./service";
import { GetMoviesListRequestQueryParams } from "./types";
import { sortMoviesByMatchedGenres } from "./utils";

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
  const { duration } = req.query;
  const genres =
    typeof req.query.genres === "string"
      ? [req.query.genres]
      : req.query.genres || [];

  const movies = await findMovies({
    genres: typeof genres === "string" ? [genres] : genres || [],
    minRuntime: parseInt(duration) - 10,
    maxRuntime: parseInt(duration) + 10
  });

  const sortedByGenres = sortMoviesByMatchedGenres(movies, genres);

  res.status(200).send(sortedByGenres);
  next();
};
