import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 816px;
    display: flex;
    padding: 16px;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
    
    @media (max-width: 527px){
        padding: 0;
        width: 100vw;
        justify-content: center;
    }
`;