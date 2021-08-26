import styled from "styled-components";

export const ContainerCategories = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2rem;
    gap: 3em;
`;

export const Categories = styled.div`
    display: flex;
    flex-direction: column; 
    border-radius: 0.2rem;
    box-shadow: 0px 0px 9px -1px rgba(21,21,21,0.41);
    -webkit-box-shadow: 0px 0px 9px -1px rgba(21,21,21,0.41);
    -moz-box-shadow: 0px 0px 9px -1px rgba(21,21,21,0.41);
    width: 70%;
    margin: 0 auto;
    cursor: pointer;
`;

export const ImageCategories = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.2rem;
`;