import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import ProductCard from './card/ProductCard'
import { ContainerProductCategories } from './ProductStyled'

const Products = () => {
    return (
        <>
            <Header/>                
                <Container>
                    <ContainerProductCategories>
                        <div>
                            <h2>
                                Categoria de Caballeros
                            </h2>
                            <h2>
                            Categoria de Damas 
                            </h2>                                                
                        </div>
                        <div>
                            <ProductCard/>
                        </div>
                    </ContainerProductCategories>
                    
                </Container>
            <Footer/>
        </>
    )
}

export default Products
