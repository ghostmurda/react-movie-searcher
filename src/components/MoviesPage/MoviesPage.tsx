import React from "react";
import {Wrapper} from "./MoviesPage.styles";
import InputForm from "../InputForm/InputForm";
import MoviesList from "../MoviesList/MoviesList";

function MoviesPage(){
    return (
        <div className="MoviesPage">
            <Wrapper>
                <InputForm />
                <MoviesList />
            </Wrapper>
        </div>
    )
}

export default MoviesPage;