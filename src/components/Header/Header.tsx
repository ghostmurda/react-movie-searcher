import React from 'react';
import {Title, Wrapper} from "./Header.styles";
import InputForm from "../InputForm/InputForm";

function Header(){
    return (
        <div className="Header">
            <Wrapper>
                <Title>
                    movie searcher
                </Title>
                <InputForm />
            </Wrapper>
        </div>
    )
}

export default Header;