export interface Facets {
  movies: FacetsMovies;
  actors: Actors;
  directors: Directors;
}

export interface Actors {
  label: string;
  filters: ActorsFilters;
}

export interface ActorsFilters {
  movies: MoviesElement;
}

export interface MoviesElement {
  label: string;
  values: MoviesValue[];
}

export interface MoviesValue {
  label: string;
  count: number;
}

export interface Directors {
  label: string;
  filters: MoviesElement[];
}

export interface FacetsMovies {
  label: string;
  filters: MoviesFilters;
}

export interface MoviesFilters {
  type: MoviesElement;
  years: MoviesElement;
  metascore: Metascore;
  genre: MoviesElement;
  watched: MoviesElement;
  saved: MoviesElement;
}

export interface Metascore {
  label: string;
  values: MetascoreValue[];
}

export interface MetascoreValue {
  label: string;
  count: number;
  filterCode: string;
}
