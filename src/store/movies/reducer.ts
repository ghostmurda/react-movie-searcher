import {GET_POPULAR, MoviesActionTypes, MoviesState} from "./types";

let initialState: MoviesState = {
    page: null,
    movies: []
}

export const moviesReducer = (
    state = initialState,
    action: MoviesActionTypes
): MoviesState => {
    switch (action.type){
        case GET_POPULAR:{
            return {
                page: action.payload.page,
                movies: action.payload.results
            }
        }
        default:
            return state;
    }
}