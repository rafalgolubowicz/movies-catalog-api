import database, { dbStructure } from "../../setup/database";
import { Movie } from "../../setup/database/types";

import { FindMoviesFilters, CreateMovieInput } from "./types";

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

export const addMovie = async (
  data: CreateMovieInput
): Promise<Movie> => {
  // It will throw an error if not exists
  const lastMovie = await database.getObject<Movie>(
    `${dbStructure.Movies}[-1]`
  );

  /*
    It's not a best way how to define ID of new object that should be unique.
    In a real-life, DB contains unique field validation, and auto-increment as well.
    For JSON purposes, the ID as a uuid would be a better solution.
  */
  const newId = lastMovie.id + 1;

  const movieData: Movie = {
    id: newId,
    genres: data.genres,
    director: data.director,
    runtime: data.runtime.toString(),
    title: data.title,
    year: data.year.toString(),
    actors: data.actors,
    plot: data.plot,
    posterUrl: data.posterUrl
  };

  await database.push(`${dbStructure.Movies}[]`, movieData);
  await database.save();

  return movieData;
};

export const getGenres = (): Promise<string[]> =>
  database.getObject<string[]>(dbStructure.Genres);
