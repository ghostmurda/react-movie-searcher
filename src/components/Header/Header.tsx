import React from 'react';
import {Title, Wrapper} from "./Header.styles";

function Header(){
    return (
        <div className="Header">
            <Wrapper>
                <Title>
                    movie searcher
                </Title>
            </Wrapper>
        </div>
    )
}

export default Header;