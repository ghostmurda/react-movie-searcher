import {CLEAR, GET_POPULAR, MoviesActionTypes, MoviesState, QUERY, SEARCH} from "./types";

let initialState: MoviesState = {
    query: null,
    type: null,
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
            stateCopy.type = 'popular';
            stateCopy.page = action.payload.page;
            for (let item of action.payload.results){
                stateCopy.movies.push(item);
            }
            return stateCopy;
        }
        case SEARCH:{
            let stateCopy = {...state};
            stateCopy.type = 'search';
            stateCopy.page = action.payload.page;
            for (let item of action.payload.results){
                stateCopy.movies.push(item);
            }
            return stateCopy;
        }
        case CLEAR: {
            return {...state, page: null, type: null, movies: [], query: null}
        }
        case QUERY: {
            return {...state, query: action.payload}
        }
        default:
            return state;
    }
}