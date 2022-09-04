export type GetMoviesListRequestQueryParams = {
  duration: string;
  genres: string[];
};

export type FindMoviesFilters = {
  genres?: string[];
  minRuntime?: number;
  maxRuntime?: number;
};
