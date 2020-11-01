import {CLEAR, GET_POPULAR, MoviesActionTypes, MoviesState, SEARCH} from "./types";

let initialState: MoviesState = {
    type: 'none',
    prevType: 'none',
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
            let stateCopy = {...state};
            switch (state.type){
                case "popular": {
                    stateCopy.prevType = 'popular';
                    break
                }
                case "search": {
                    stateCopy.prevType = 'search';
                    break
                }
                default:
                    stateCopy.prevType = 'none';
                    break
            }
            stateCopy.movies = [];
            stateCopy.type = 'none';
            return stateCopy;
        }
        default:
            return state;
    }
}