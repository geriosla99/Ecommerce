import React from 'react'
import { ImageCategories } from '../../../container/home/HomeStyled'
import { ProductCardStyled, StylesProduct } from '../ProductStyled'
import { Link } from 'react-router-dom';

const ProductCard = ({pro}) => {
    return (
        <>
            <StylesProduct className='row'>
                <Link
                    to={{
                        pathname: "/product-details",                       
                        state: { pro: pro}
                      }}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <ProductCardStyled className='col-4'>
                    <h4>
                        {pro.product}
                    </h4>
                    <ImageCategories
                        src={pro.img}
                        alt={pro.product}
                    />
                    {pro.price}
                </ProductCardStyled>
            
                </Link> 
            </StylesProduct>            
        </>
    )
}

export default ProductCard
