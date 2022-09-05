import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import parseQueryParamToArray from "../../utils/parseQueryParamToArray";

import { findMovies } from "./service";
import { GetMoviesListRequestQueryParams } from "./types";
import { sortMoviesByMatchedGenres } from "./utils";

export const getMovies = async (
  request: Request<
    unknown,
    unknown,
    unknown,
    GetMoviesListRequestQueryParams
  >,
  response: Response,
  next: NextFunction
) => {
  try {
    const { duration } = request.query;
    const genres = parseQueryParamToArray(request.query.genres);

    const movies = await findMovies({
      genres,
      minRuntime: parseInt(duration) - 10,
      maxRuntime: parseInt(duration) + 10
    });

    const sortedByGenres = sortMoviesByMatchedGenres(movies, genres);

    return response.status(StatusCodes.OK).send(sortedByGenres);
  } catch (error) {
    return next(error);
  }
};
