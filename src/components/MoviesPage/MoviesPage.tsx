import React from "react";
import {Wrapper} from "./MoviesPage.styles";
import MoviesListContainer from "../../containers/MoviesListContainer";

function MoviesPage(){
    return (
        <div className="MoviesPage">
            <Wrapper>
                <div> </div>
                <MoviesListContainer />
            </Wrapper>
        </div>
    )
}

export default MoviesPage;