import styled from "styled-components";

export const Wrapper = styled.div`
    width: 400px;
    height: 600px;
    transition: 0.5s;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 20px 30px 0 rgba(1, 1, 1, 0.3);
    
    &:hover{
        transform: scale(0.95);
        box-shadow: 0 20px 30px 0 rgba(1, 1, 1, 0.7);
    }
`;

export const Title = styled.div`
    font-family: 'Monda', sans-serif;
    position: relative;
    top: -604px;
    z-index: 10;
    height: 200px;
    background: linear-gradient(rgba(74, 118, 168, 0.9), rgba(74, 118, 168, 0));
    font-size: 25px;
    line-height: 50px;
    color: white;
`;