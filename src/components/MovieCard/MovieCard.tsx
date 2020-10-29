import React from "react";
import {Wrapper} from "./MovieCard.styles";
import {Movie} from "../../store/movies/types";

function MovieCard(props: Movie){
    return(
        <div className="MovieCard">
            <Wrapper poster_path={props.poster_path}>
                {props.title}
            </Wrapper>
        </div>
    )
}

export default MovieCard;