import styled from "styled-components";

const baseUrl = 'https://image.tmdb.org/t/p/original/';

interface Props{
    poster_path: string;
}

export const Wrapper = styled.div`
    width: 200px;
    height: 300px;
    background: url(${baseUrl}/${(props: Props) => props.poster_path});
    background-size: cover;
    transition: 0.5s;
    
    &:hover{
        transform: scale(0.95);
    }
`;