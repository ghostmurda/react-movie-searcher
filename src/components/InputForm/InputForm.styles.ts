import styled from "styled-components";

export const Input = styled.input`
    background: #224B7A;
    outline: 0;
    border: 0px;
    font-size: 17px;
    color: #8FADC8;
    max-width: 150px;
    margin-left: 37px;
    
    &::placeholder{
        color: #8FADC8;
    }
    
    @media (max-width: 527px){
        max-width: 100px;
        font-size: 15px;
    }
`;

export const StyledForm = styled.form`
    min-width: 270px;
    background: #224B7A;
    border-radius: 20px;
    display: flex;
    padding: 5px;
    height: 25px;
    align-items: center;
    justify-content: space-between;
    
    & img{
        position: fixed;
    }
    
    & button{
        background: #224B7A;
        outline: 0;
        border: 0px;
        cursor: pointer;
    }
    
    @media (max-width: 527px){
        min-width: 200px;
    }
`;