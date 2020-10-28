import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {RootState} from "../store/rootReducer";
import { ThunkDispatch } from 'redux-thunk';
import {thunkPopularMovies} from "../store/movies/actions";

interface StateProps{
    page: null | number;
    moviesList: Array<any>;
}

interface DispatchProps{
    onGetPopularMovies: () => void;
}

const mapStateToProps = (state: RootState) => {
    return {
        page: state.movies.page,
        moviesList: state.movies.movies
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        onGetPopularMovies: () => dispatch(thunkPopularMovies()),
    }
}

type Props = StateProps & DispatchProps;

function MoviesListContainer(props: Props){
    useEffect(() => {
        props.onGetPopularMovies();
    }, []);

    return (
        <div>
            {props.page};
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);