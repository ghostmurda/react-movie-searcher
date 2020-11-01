import React, {useCallback, useEffect, useRef} from "react";
import {connect} from 'react-redux';
import {RootState} from "../store/rootReducer";
import { ThunkDispatch } from 'redux-thunk';
import {thunkPopularMovies} from "../store/movies/actions";
import MoviesList from "../components/MoviesList/MoviesList";
import loadingImage from '../img/loader.svg';

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

const IntersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1
}

function MoviesListContainer(props: Props){
    const loader = useRef(null);

    const loadMore = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting){
            props.page ?
                props.onGetPopularMovies(props.page + 1)
                :
                props.onGetPopularMovies(1)
        }
    }, [props])

    useEffect(() => {
        let currentLoader = loader.current;
        const observer = new IntersectionObserver(loadMore, IntersectionObserverOptions);

        if (loader && loader.current){
            //@ts-ignore
            observer.observe(currentLoader);
        }

        return () => {
            //@ts-ignore
            observer.unobserve(currentLoader);
        }
    }, [loader, loadMore]);

    return (
        <div>
            <MoviesList page={props.page} moviesList={props.moviesList} />
            <img ref={loader} className={"Loader"} src={loadingImage} alt="Loading..." />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);