export type GetMoviesListRequestQueryParams = {
  duration: string;
  genres: string[];
};

export type FindMoviesFilters = {
  genres?: string[];
  minRuntime?: number;
  maxRuntime?: number;
};

/**
 * @openapi
 * components:
 *  schemas:
 *   CreateMovieInput:
 *    type: object
 *    required:
 *     - title
 *     - year
 *     - runtime
 *     - director
 *     - genres
 *    properties:
 *     title:
 *      type: string
 *      maxLength: 255
 *     year:
 *      type: number
 *     runtime:
 *      type: number
 *     genres:
 *      type: array
 *      items:
 *       type: string
 *     director:
 *      type: string
 *      maxLength: 255
 *     actors:
 *      type: string
 *     plot:
 *      type: string
 *     posterUrl:
 *      type: string
 */
export type CreateMovieInput = {
  title: string;
  year: number;
  runtime: number;
  genres: string[];
  director: string;
  actors?: string;
  plot?: string;
  posterUrl?: string;
};
