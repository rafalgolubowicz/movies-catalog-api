import { findMovies } from "./service";

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
});
