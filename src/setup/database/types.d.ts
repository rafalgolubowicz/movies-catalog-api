/**
 * @openapi
 * components:
 *  schemas:
 *    Movie:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        title:
 *          type: string
 *        year:
 *          type: string
 *        runtime:
 *          type: string
 *        genres:
 *          type: array
 *          items:
 *            type: string
 *        director:
 *          type: string
 *        actors:
 *          type: string
 *        plot:
 *          type: string
 *        posterUrl:
 *          type: string
 */
export type Movie = {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors?: string;
  plot?: string;
  posterUrl?: string;
};

export type Schema = {
  movies: Movie[];
  genres: string[];
};
