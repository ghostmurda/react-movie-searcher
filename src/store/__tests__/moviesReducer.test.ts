import {MoviesActionTypes, MoviesState, PopularMoviesPayload} from "../movies/types";
import {moviesReducer} from "../movies/reducer";
import axios from 'axios';
import {getPopularMoviesCreator} from "../movies/actions";

const apiKey: string = '8282c68f5ed8f63c5bfae413614846d5';
const url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

const initialState: MoviesState = {
    page: 1,
    movies: []
}

let newState = (state: MoviesState, action: MoviesActionTypes) => {
    return moviesReducer(state, action);
}

describe('movies reducer', () => {
    test('set popular movies in state', async () => {
        const payload: PopularMoviesPayload = await axios.get(url)
            .then(res => res.data);
        const action = getPopularMoviesCreator(payload);
        expect(newState(initialState, action).movies).toBe(payload.results);
    });
});