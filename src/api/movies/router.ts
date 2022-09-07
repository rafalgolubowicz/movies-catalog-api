import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";

import { MoviesEndpoints } from "./consts";
import { createMovie, getMovies } from "./controller";
import { createMovieSchema, getMoviesListSchema } from "./schema";

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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Passed query params are in the wrong format
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
  MoviesEndpoints.Root,
  validateRequest(getMoviesListSchema),
  getMovies
);

/**
 * @openapi
 * /movies:
 *  post:
 *   tags:
 *    - Movies
 *   description: Create a new movie
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/CreateMovieInput'
 *   responses:
 *    201:
 *     description: Created movie
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Movie'
 *    400:
 *     description: Body contains errors
 */
moviesRouter.post(
  MoviesEndpoints.Root,
  validateRequest(createMovieSchema),
  createMovie
);

export default moviesRouter;
