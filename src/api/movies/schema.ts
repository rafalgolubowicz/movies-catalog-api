import { array, number, object, preprocess, string } from "zod";
import { getGenres } from "./service";

export const getMoviesListSchema = object({
  query: object({
    duration: preprocess((value) => {
      if (isNaN(value as number)) return value;

      return parseInt(value as string, 10);
    }, number().positive().optional()),
    genres: preprocess((value) => {
      if (typeof value === "string") return [value];

      return value;
    }, array(string()).optional())
  })
});

export const createMovieSchema = object({
  body: object({
    title: string().max(255),
    year: number().positive().optional(),
    runtime: number().positive().optional(),
    director: string().max(255),
    genres: array(string()).superRefine(async (genres, ctx) => {
      const allowedGenres = await getGenres();

      const areGenresAllowed = genres.every((genre) =>
        allowedGenres.includes(genre)
      );

      if (!areGenresAllowed) {
        ctx.addIssue({
          code: "custom",
          message: "Some of genres not recognized.",
          params: {
            allowedGenres
          }
        });
      }
    }),
    actors: string().optional(),
    plot: string().optional(),
    posterUrl: string().optional()
  })
});
