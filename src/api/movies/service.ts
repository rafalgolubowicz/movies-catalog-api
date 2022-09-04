import database, { dbStructure } from "../../setup/database";
import { Movie } from "../../setup/database/types";

import { FindMoviesFilters } from "./types";

export const findMovies = ({
  minRuntime,
  maxRuntime,
  genres = []
}: FindMoviesFilters): Promise<Movie[]> =>
  database
    .filter<Movie>(dbStructure.Movies, (entry: Movie) => {
      const parsedRuntime = parseInt(entry.runtime);

      if (minRuntime && parsedRuntime < minRuntime) {
        return false;
      }

      if (maxRuntime && parsedRuntime > maxRuntime) {
        return false;
      }

      if (!genres.length) {
        return true;
      }

      return genres.some((genre) => entry.genres.includes(genre));
    })
    .then((value) => value || [])
    .then((value) => {
      if (genres.length || !value.length) return value;

      const randomIndex = Math.floor(Math.random() * value.length);

      return [value[randomIndex]];
    });
