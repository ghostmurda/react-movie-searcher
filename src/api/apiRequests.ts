import axios from 'axios';

const createURL = (endpoint: string, page = 1): string => {
    const URL = 'https://api.themoviedb.org/3';
    const KEY = '8282c68f5ed8f63c5bfae413614846d5';
    return `${URL}${endpoint}?api_key=${KEY}&language=en-US&page=${page}`;
}

export const getPopularMoviesReq = (page?: number) => axios
    .get(createURL('/movie/popular'))
        .then(res => res.data);