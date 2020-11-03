import React from 'react';
import {HeaderStyled, Title, Wrapper} from "./Header.styles";
import InputFormContainer from "../../containers/InputFormContainer";

function Header(){
    return (
        <HeaderStyled>
            <Wrapper>
                <Title>
                    movie searcher
                </Title>
                <InputFormContainer />
            </Wrapper>
        </HeaderStyled>
    )
}

export default Header;