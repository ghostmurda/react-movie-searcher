import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-rows: 150px 500px;
    
    @media (max-width: 527px){
        grid-template-rows: 66px 500px;
    }
`;