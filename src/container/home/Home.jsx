import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Categories, ContainerCategories, ImageCategories } from './HomeStyled'

const Home = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/products');
    };    

    return (
        <>
            <Header/>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/H3OueSK.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/QpX7F01.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/5rABA20.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ContainerCategories>
                <Categories onClick={handleClick}>
                    Caballeros
                    <ImageCategories                        
                        src='https://i.imgur.com/ed0qWab.jpg' 
                        alt='imagen de la categoria'
                        />
                </Categories>
                <Categories onClick={handleClick}>
                    Damas
                    <ImageCategories                        
                        src='https://i.imgur.com/DpgD0er.jpg' 
                        alt='imagen de la categoria'
                        />
                </Categories>
            </ContainerCategories>            
            <Footer/>
        </>
    )
}

export default Home
