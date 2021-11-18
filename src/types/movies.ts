export interface Facets {
    Title:         string;
    Year:          string;
    Rated:         string;
    Released:      string;
    Runtime:       string;
    Genre:         string;
    Director:      string;
    Writer:        string;
    Actors:        string;
    Plot:          string;
    Language:      string;
    Country:       string;
    Awards:        string;
    Poster:        string;
    Ratings:       Rating[];
    Metascore:     string;
    imdbRating:    string;
    imdbVotes:     string;
    imdbID:        string;
    Type:          Type;
    DVD?:          string;
    BoxOffice?:    string;
    Production?:   string;
    Website?:      Website;
    Watched:       Saved;
    Saved:         Saved;
    totalSeasons?: string;
}

export interface Rating {
    Source: Source;
    Value:  string;
}

export enum Source {
    InternetMovieDatabase = "Internet Movie Database",
    Metacritic = "Metacritic",
    RottenTomatoes = "Rotten Tomatoes",
}

export enum Saved {
    False = "False",
    True = "True",
}

export enum Type {
    Movie = "movie",
    Series = "series",
}

export enum Website {
    NA = "N/A",
}
