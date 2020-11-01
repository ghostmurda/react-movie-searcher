export const GET_POPULAR = 'movies/GET_POPULAR';
export const SEARCH = 'movies/SEARCH';
export const CLEAR = 'movies/CLEAR';

export interface Movie{
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: Array<number>;
    title: string;
    vote_average: number;
    overview: string;
    releaseDate: string;
}

export interface MoviesState{
    type: 'popular' | 'search' | 'none';
    prevType: 'popular' | 'search' | 'none';
    page: number | null;
    movies: Array<Movie>;
}

export interface MoviesPayload{
    page: number;
    total_results: string;
    total_pages: string;
    results: Array<Movie>;
}

interface GetPopularMoviesAction{
    type: typeof GET_POPULAR;
    payload: MoviesPayload;
}

interface GetSearchMoviesAction{
    type: typeof SEARCH;
    payload: MoviesPayload;
}

interface ClearMoviesAction{
    type: typeof CLEAR;
}

export type MoviesActionTypes = GetPopularMoviesAction | GetSearchMoviesAction | ClearMoviesAction;