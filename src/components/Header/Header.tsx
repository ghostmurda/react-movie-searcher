import React from 'react';
import {Title, Wrapper} from "./Header.styles";
import InputFormContainer from "../../containers/InputFormContainer";

function Header(){
    return (
        <div className="Header">
            <Wrapper>
                <Title>
                    movie searcher
                </Title>
                <InputFormContainer />
            </Wrapper>
        </div>
    )
}

export default Header;