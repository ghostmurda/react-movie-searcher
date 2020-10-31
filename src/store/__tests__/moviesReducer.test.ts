import {MoviesActionTypes, MoviesState, PopularMoviesPayload} from "../movies/types";
import {moviesReducer} from "../movies/reducer";
import {getPopularMoviesCreator} from "../movies/actions";
import {getPopularMoviesReq} from "../../api/apiRequests";

const initialState: MoviesState = {
    page: 1,
    movies: []
}

let newState = (state: MoviesState, action: MoviesActionTypes) => {
    return moviesReducer(state, action);
}

describe('movies reducer', () => {
    test('set popular movies in state', async () => {
        const payload: PopularMoviesPayload = await getPopularMoviesReq();
        const action = getPopularMoviesCreator(payload);
        expect(newState(initialState, action).movies).toStrictEqual(payload.results);
    });
});