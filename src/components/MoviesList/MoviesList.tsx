import React from "react";
import {MovieCard, Wrapper} from "./MoviesList.styles";

interface Props{
    page: null | number;
    moviesList: Array<any>;
}

function MoviesList(props: Props){
    return (
        <div className="MoviesList">
            <Wrapper>
                {props.moviesList.map((item, i) => <MovieCard key={i} {...item}/>)}
            </Wrapper>
        </div>
    )
}

export default MoviesList;