import styled from "styled-components";

export const HeaderStyled = styled.div`
    background: #4A76A8;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 30px 0 rgba(1, 1, 1, 0.7);
    position: fixed;
    z-index: 100;
`;

export const Wrapper = styled.div`
    min-width: 815px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 848px){
        min-width: 200x;
        justify-content: space-around;
    }
    
    @media (max-width: 527px){
        min-width: 0;
        justify-content: flex-start;
    }
`;

export const Title = styled.span`
    font-family: 'Monda', sans-serif;
    font-size: 30px;
    line-height: 30px;
    color: white;
    font-weight: 300;
    
    @media (max-width: 848px){
        margin-right: 16px;
    }
    
    @media (max-width: 527px){
        font-size: 15px;
        line-height: 15px;
    }
`;