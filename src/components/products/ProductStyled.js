import styled from "styled-components";

export const ProductCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #a3a3a3;
    width: 20%;
    margin: 1em;
    padding: 0.5rem;
`;

export const ContainerProductCategories = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 2rem;
    gap: 3em;
`;
