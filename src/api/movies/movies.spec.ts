import { Movie } from "../../setup/database/types";

import { findMovies } from "./service";
import { sortMoviesByMatchedGenres } from "./utils";

describe("Movies service test suite", () => {
  it("should returns a single random movie", async () => {
    const movies = await findMovies({});

    expect(movies).toHaveLength(1);
  });

  it("should returns a single random movie with specified duration", async () => {
    const expectedDuration = 90;

    const movies = await findMovies({
      minRuntime: expectedDuration - 10,
      maxRuntime: expectedDuration + 10
    });

    expect(movies).toHaveLength(1);

    const [{ runtime }] = movies;

    expect(parseInt(runtime)).toBeGreaterThanOrEqual(
      expectedDuration - 10
    );
    expect(parseInt(runtime)).toBeLessThanOrEqual(
      expectedDuration + 10
    );
  });

  it("should returns an empty array (not found movie with specified duration)", async () => {
    const expectedDuration = 10;

    const movies = await findMovies({
      minRuntime: expectedDuration - 10,
      maxRuntime: expectedDuration + 10
    });

    expect(movies).toHaveLength(0);
  });

  it("should returns movie list with specified genres", async () => {
    const expectedGenres = ["Comedy", "Biography"];
    const movies = await findMovies({
      genres: expectedGenres
    });

    for (const movie of movies) {
      const intersection = movie.genres.filter((genre) =>
        expectedGenres.includes(genre)
      );

      expect(intersection.length).toBeGreaterThan(0);
    }
  });

  it("should sort movie list by matched genres", async () => {
    const genres = ["Comedy", "Fantasy", "Crime"];
    const movies = [
      {
        id: 1,
        genres: ["Comedy"]
      },
      {
        id: 2,
        genres: ["Fantasy", "Comedy", "Biography"]
      },
      {
        id: 3,
        genres: ["Adventure", "Biography"]
      },
      {
        id: 4,
        genres: ["Adventure", "Comedy", "Biography"]
      },
      {
        id: 5,
        genres: ["Crime", "Comedy", "Adventure"]
      },
      {
        id: 6,
        genres: ["Comedy", "Crime", "Biography", "Fantasy"]
      }
    ] as Movie[]; // Cast to Movie[], so we don't need to add unnecessary properties
    const expectedResult = [6, 2, 5, 1, 4, 3];

    const sortedMovies = sortMoviesByMatchedGenres(
      movies,
      genres
    ).map((movie) => movie.id);

    expect(sortedMovies).toEqual(
      expect.arrayContaining(expectedResult)
    );
  });
});
