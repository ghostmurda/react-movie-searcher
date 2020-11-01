import React, {useCallback, useEffect, useRef} from "react";
import {connect} from 'react-redux';
import {RootState} from "../store/rootReducer";
import { ThunkDispatch } from 'redux-thunk';
import {thunkPopularMovies, thunkSearchMovies} from "../store/movies/actions";
import MoviesList from "../components/MoviesList/MoviesList";
import loadingImage from '../img/loader.svg';
import {getMoviesList, getPage, getQuery, getType} from "../store/movies/selectors";

interface StateProps{
    query: null | string;
    type: 'popular' | 'search' | null;
    page: null | number;
    moviesList: Array<any>;
}

interface DispatchProps{
    onGetPopularMovies: (page: number) => void;
    onGetSearchMovies: (page: number, query: string) => void;
}

const mapStateToProps = (state: RootState) => {
    return {
        query: getQuery(state),
        type: getType(state),
        page: getPage(state),
        moviesList: getMoviesList(state)
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        onGetPopularMovies: (page: number) => dispatch(thunkPopularMovies(page)),
        onGetSearchMovies: (page: number, query: string) => dispatch(thunkSearchMovies(page, query))
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
            switch (props.type){
                case "popular":{
                    props.page ?
                        props.onGetPopularMovies(props.page + 1)
                        :
                        props.onGetPopularMovies(1)
                    break
                }
                case "search":{
                    props.page ?
                        props.onGetSearchMovies(props.page + 1, props.query ? props.query : '')
                        :
                        props.onGetSearchMovies(1, props.query ? props.query : '')
                    break
                }
                case null:{
                    if (!props.query){
                        props.page ?
                            props.onGetPopularMovies(props.page + 1)
                            :
                            props.onGetPopularMovies(1)
                    }
                    break
                }
            }
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