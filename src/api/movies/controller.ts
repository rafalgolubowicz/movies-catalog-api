import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import parseQueryParamToArray from "../../utils/parseQueryParamToArray";

import { addMovie, findMovies } from "./service";
import {
  CreateMovieInput,
  GetMoviesListRequestQueryParams
} from "./types";
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
    // TODO: Add checks for specifics cases to pass more descriptive error
    return next(error);
  }
};

export const createMovie = async (
  { body }: Request<unknown, unknown, CreateMovieInput>,
  response: Response,
  next: NextFunction
) => {
  try {
    const newMovie = await addMovie(body);

    return response.status(StatusCodes.CREATED).send(newMovie);
  } catch (error) {
    return next(error);
  }
};
