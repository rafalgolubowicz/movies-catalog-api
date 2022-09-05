import { Movie } from "../../setup/database/types";

export const sortMoviesByMatchedGenres = (
  movies: Movie[],
  genres: string[]
): Movie[] => {
  if (!genres.length) return movies;

  const matchedGenresCountByMovie = movies.reduce<
    Record<string, number>
  >(
    (previousValue, movie) => ({
      ...previousValue,
      [movie.id]: movie.genres.filter((genre) =>
        genres.includes(genre)
      ).length
    }),
    {}
  );

  // Spread to not mutate original object
  return [...movies].sort(
    (movieA, movieB) =>
      matchedGenresCountByMovie[movieB.id] -
      matchedGenresCountByMovie[movieA.id]
  );
};
