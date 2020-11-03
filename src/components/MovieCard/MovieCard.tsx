import React from "react";
import {Title, Wrapper} from "./MovieCard.styles";
import {Movie} from "../../store/movies/types";
import Img from "react-cool-img";
import loadingImage from '../../img/loader.svg';
import errorImage from '../../img/error-poster.jpg';

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

function MovieCard(props: Movie){
    return(
        <div className="MovieCard">
            <Wrapper>
                <Img
                    width={(window.innerWidth <= 400) ? '350' : '400'}
                    height={(window.innerWidth <= 400) ? '550' : '600'}
                    placeholder={loadingImage}
                    src={`${imageBaseUrl}/${props.poster_path}`}
                    error={errorImage}
                    debounce={1000}
                    alt="Movie"
                    lazy={true}
                />
                <Title>
                    {props.title}
                </Title>
            </Wrapper>
        </div>
    )
}

export default MovieCard;