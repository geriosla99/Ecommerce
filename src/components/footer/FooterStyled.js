import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #131313;
    background: -webkit-linear-gradient(bottom, #131313, #282828);
    background: -moz-linear-gradient(bottom, #131313, #282828);
    background: linear-gradient(to top, #131313, #282828);
    color: #e2e2e2;
    position: static;
    height: 4em;
    padding: 0.5rem;
    position: relative;
    color: #e6e6e6;
`;


export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    color: #c7c7c7; 
`;

export const RRSS = styled.i`
    margin: 0.5rem;
    display: flex;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover{
        color: #ededed;
    }
`;