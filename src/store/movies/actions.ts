import {GET_POPULAR, MoviesActionTypes, PopularMoviesPayload} from "./types";

export const getPopularMoviesCreator = (
    payload: PopularMoviesPayload
): MoviesActionTypes => {
    return {
        type: GET_POPULAR,
        payload
    }
}