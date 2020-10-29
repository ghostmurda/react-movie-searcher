import React from "react";
import {Wrapper} from "./MoviesPage.styles";
import InputForm from "../InputForm/InputForm";
import MoviesListContainer from "../../containers/MoviesListContainer";

function MoviesPage(){
    return (
        <div className="MoviesPage">
            <Wrapper>
                <InputForm />
                <MoviesListContainer />
            </Wrapper>
        </div>
    )
}

export default MoviesPage;