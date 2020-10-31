import styled from "styled-components";

export const Input = styled.input`
    background: #224B7A;
    outline: 0;
    border: 0px;
    font-size: 17px;
    color: #8FADC8;
    
    &::placeholder{
        color: #8FADC8;
    }
`;

export const StyledForm = styled.form`
    min-width: 300px;
    background: #224B7A;
    border-radius: 20px;
    display: flex;
    padding: 5px;
    height: 50%;
    align-items: center;
    
    & *{
        margin-left: 15px;
    }
    
    & button{
        background: #224B7A;
        outline: 0;
        border: 0px;
        cursor: pointer;
    }
`;