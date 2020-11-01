import {CLEAR, GET_POPULAR, MoviesActionTypes, MoviesPayload, SEARCH} from "./types";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from 'redux'
import {RootState} from "../rootReducer";
import {getPopularMoviesReq, getSearchMoviesReq} from "../../api/apiRequests";

export const getPopularMoviesCreator = (
    payload: MoviesPayload
): MoviesActionTypes => {
    return {
        type: GET_POPULAR,
        payload
    }
}

export const getSearchMoviesCreator = (
    payload: MoviesPayload
): MoviesActionTypes => {
    return {
        type: SEARCH,
        payload
    }
}

export const clearMoviesCreator = (): MoviesActionTypes => {
    return {
        type: CLEAR
    }
}

export const thunkPopularMovies = (page: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> => async (
    dispatch
) => {
    let payload: MoviesPayload = await getPopularMoviesReq(page);
    dispatch(getPopularMoviesCreator(payload));
}

export const thunkSearchMovies = (page: number, query: string): ThunkAction<Promise<void>, RootState, {}, AnyAction> => async (
    dispatch
) => {
    let payload: MoviesPayload = await getSearchMoviesReq(page, query);
    dispatch(getSearchMoviesCreator(payload));
}