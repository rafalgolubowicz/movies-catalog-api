import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";

import { MoviesEndpoints } from "./consts";
import { getMovies } from "./controller";
import { getMoviesListSchema } from "./schema";

const moviesRouter = Router();

/**
 * @openapi
 * /movies:
 *  get:
 *     tags:
 *     - Movies
 *     description: Returns movies based on passed params
 *     responses:
 *       200:
 *         description: Array of movies
 *     parameters:
 *       - in: query
 *         name: duration
 *         schema:
 *           type: integer
 *       - in: query
 *         name: genres
 *         schema:
 *           type: array
 *           items:
 *             type: string
 */
moviesRouter.get(
  MoviesEndpoints.LIST,
  validateRequest(getMoviesListSchema),
  getMovies
);

export default moviesRouter;
