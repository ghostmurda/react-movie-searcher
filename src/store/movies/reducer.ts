import {GET_POPULAR, MoviesActionTypes, MoviesState, SEARCH} from "./types";

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
            let stateCopy = {...state};
            stateCopy.page = action.payload.page;
            for (let item of action.payload.results){
                stateCopy.movies.push(item);
            }
            return stateCopy;
        }
        case SEARCH:{
            let stateCopy = {...state};
            stateCopy.page = action.payload.page;
            for (let item of action.payload.results){
                stateCopy.movies.push(item);
            }
            return stateCopy;
        }
        default:
            return state;
    }
}