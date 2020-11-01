import axios from 'axios';

const POPULAR = '/movie/popular';
const SEARCH = '/search/movie';

const createURL = (endpoint: string, page = 1, query?: string): string => {
    const URL = 'https://api.themoviedb.org/3';
    const KEY = '8282c68f5ed8f63c5bfae413614846d5';
    switch (endpoint){
        case POPULAR:
            return `${URL}${endpoint}?api_key=${KEY}&language=en-US&page=${page}`;
        case SEARCH:
            return `${URL}${endpoint}?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
        default:
            return `${URL}${POPULAR}?api_key=${KEY}&language=en-US&page=${page}`;
    }
}

export const getPopularMoviesReq = (page?: number) => axios
    .get(createURL(POPULAR, page))
        .then(res => res.data);

export const getSearchMoviesReq = (page?: number, query?: string) => axios
    .get(createURL(SEARCH, page, query))
        .then(res => res.data);