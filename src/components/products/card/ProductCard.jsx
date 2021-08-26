import React from 'react'
import { ImageCategories } from '../../../container/home/HomeStyled'
import { ProductCardStyled } from '../ProductStyled'

const ProductCard = () => {
    return (
        <>
            <ProductCardStyled>
                <h4>
                    Producto 1
                </h4>
                <ImageCategories
                    src='https://i.imgur.com/shlQ0XY.jpg' 
                    alt='Producto'
                />
            </ProductCardStyled>  
        </>
    )
}

export default ProductCard
