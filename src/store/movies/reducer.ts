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
            return {
                ...state,
                type: 'popular',
                page: action.payload.page,
                movies: state.movies.concat(action.payload.results)
            }
        }
        case SEARCH:{
            return {
                ...state,
                type: 'search',
                page: action.payload.page,
                movies: state.movies.concat(action.payload.results)
            }
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