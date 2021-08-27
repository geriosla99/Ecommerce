import styled from "styled-components";

export const ProductCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #a3a3a3;
    width: 40%;
    margin: 1em;
    padding: 0.5rem;
`;

export const ContainerProductCategories = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 2rem;
    gap: 3em;
`;

export const TitleCategory =styled.h2`
    cursor: pointer;
`;

export const StylesProduct = styled.div`
    display: flex;
    justify-items: center;
    margin: 0 auto;
`;

export const ContainerDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ImageProduct = styled.div`
    margin: 1rem;
`;

export const DetailsProduct = styled.div`
    margin: 1rem;
`;

export const DetailImage = styled.img`
    width: 100%;
`;
export const QuantityItems = styled.span`
    width: 40%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;