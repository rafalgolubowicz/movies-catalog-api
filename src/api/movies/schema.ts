import { array, number, object, preprocess, string } from "zod";

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
