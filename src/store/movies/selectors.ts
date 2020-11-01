import {RootState} from "../rootReducer";

export const getQuery = (state: RootState) => state.movies.query;

export const getType = (state: RootState) => state.movies.type;

export const getPage = (state: RootState) => state.movies.page;

export const getMoviesList = (state: RootState) => state.movies.movies;