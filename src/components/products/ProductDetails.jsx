import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { ContainerDetails, DetailImage, DetailsProduct, ImageProduct, QuantityItems } from './ProductStyled'

const ProductDetails = (props) => {
    const { pro } = props.location.state;
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>     
            <Container>
                <ContainerDetails>
                    <ImageProduct>
                        <DetailImage src={pro.img} alt={pro.product}/>
                    </ImageProduct>
                    <DetailsProduct>
                        <h2>
                            {pro.product}
                        </h2>
                        <p>
                            {pro.description}
                        </p>
                        <h4>{pro.price}</h4>
                        <QuantityItems>
                            <Button 
                                variant="secondary"
                                onClick={() => setCount(count - 1)}
                            >
                                -
                            </Button>
                            <p>{count}</p>
                            <Button 
                                variant="secondary"
                                onClick={() => setCount(count + 1)}
                            >
                                +
                            </Button>
                        </QuantityItems>
                        <div className="d-grid gap-2">                            
                            <Button 
                                variant="secondary" 
                                size="lg"
                                className="my-3"
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </DetailsProduct>
                </ContainerDetails>
            </Container>
            <Footer/>
        </>
    )
}

export default ProductDetails
