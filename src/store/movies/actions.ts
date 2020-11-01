import {GET_POPULAR, MoviesActionTypes, MoviesPayload} from "./types";
import {ThunkAction} from "redux-thunk";
import { AnyAction } from 'redux'
import {RootState} from "../rootReducer";
import {getPopularMoviesReq} from "../../api/apiRequests";

export const getPopularMoviesCreator = (
    payload: MoviesPayload
): MoviesActionTypes => {
    return {
        type: GET_POPULAR,
        payload
    }
}

export const thunkPopularMovies = (page: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> => async (
    dispatch
) => {
    let payload: MoviesPayload = await getPopularMoviesReq(page);
    dispatch(getPopularMoviesCreator(payload));
}