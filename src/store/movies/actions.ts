import {GET_POPULAR, MoviesActionTypes, PopularMoviesPayload} from "./types";
import {ThunkAction} from "redux-thunk";
import { AnyAction } from 'redux'
import {RootState} from "../rootReducer";
import {getPopularMoviesReq} from "../../api/apiRequests";

export const getPopularMoviesCreator = (
    payload: PopularMoviesPayload
): MoviesActionTypes => {
    return {
        type: GET_POPULAR,
        payload
    }
}

export const thunkPopularMovies = (page: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> => async (
    dispatch
) => {
    let payload: PopularMoviesPayload = await getPopularMoviesReq(page);
    dispatch(getPopularMoviesCreator(payload));
}