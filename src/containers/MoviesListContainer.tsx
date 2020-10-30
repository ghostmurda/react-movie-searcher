import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {RootState} from "../store/rootReducer";
import { ThunkDispatch } from 'redux-thunk';
import {thunkPopularMovies} from "../store/movies/actions";
import MoviesList from "../components/MoviesList/MoviesList";

interface StateProps{
    page: null | number;
    moviesList: Array<any>;
}

interface DispatchProps{
    onGetPopularMovies: (page: number) => void;
}

const mapStateToProps = (state: RootState) => {
    return {
        page: state.movies.page,
        moviesList: state.movies.movies
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        onGetPopularMovies: (page: number) => dispatch(thunkPopularMovies(page)),
    }
}

type Props = StateProps & DispatchProps;

function MoviesListContainer(props: Props){
    const [moviesPage, setPage] = useState(1);

    useEffect(() => {
        props.onGetPopularMovies(moviesPage);
    }, []);

    return (
        <div>
            <MoviesList page={props.page} moviesList={props.moviesList} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);