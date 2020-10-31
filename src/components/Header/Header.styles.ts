import styled from "styled-components";

export const Wrapper = styled.div`
    background: #4A76A8;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 30px 0 rgba(1, 1, 1, 0.7);
    position: fixed;
    z-index: 100;
    
    @media (max-width: 590px){
        justify-content: space-around;
    }
`;

export const Title = styled.span`
    font-family: 'Monda', sans-serif;
    font-size: 30px;
    line-height: 30px;
    color: white;
    font-weight: 300;
    margin-right: 290px;
    
    @media (max-width: 590px){
        margin-right: 0px;
    }
    
    @media (max-width: 510px){
        font-size: 20px;
        line-height: 20px;
    }
`;