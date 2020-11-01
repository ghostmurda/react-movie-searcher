import {MoviesActionTypes, MoviesState, MoviesPayload} from "../movies/types";
import {moviesReducer} from "../movies/reducer";
import {clearMoviesCreator, getPopularMoviesCreator, getSearchMoviesCreator} from "../movies/actions";
import {getPopularMoviesReq, getSearchMoviesReq} from "../../api/apiRequests";

const initialState: MoviesState = {
    query: null,
    type: null,
    page: 1,
    movies: []
}

let newState = (state: MoviesState, action: MoviesActionTypes) => {
    return moviesReducer(state, action);
}

test('set popular movies in state', async () => {
    const payload: MoviesPayload = await getPopularMoviesReq();
    const action = getPopularMoviesCreator(payload);
    expect(newState(initialState, action).movies).toStrictEqual(payload.results);
});

// test('set searched movies in state', async () => {
//     const payload: MoviesPayload = await getSearchMoviesReq(1, 'game');
//     const action = getSearchMoviesCreator(payload);
//     expect(newState(initialState, action).movies).toStrictEqual(payload.results);
// });

test('clear movies in state', async () => {
    const payload: MoviesPayload = await getSearchMoviesReq(1, 'game');
    const action = getSearchMoviesCreator(payload);
    newState(initialState, action);
    const action2 = clearMoviesCreator();
    expect(newState(initialState, action2).movies).toStrictEqual([]);
});
