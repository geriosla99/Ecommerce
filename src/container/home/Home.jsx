import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Home = () => {
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
            <div>
                Caballeros
                <Image src='' alt='imagen de la categoria'/>
            </div>
            <div>
                Damas
                <Image src='' alt='imagen de la categoria'/>
            </div>
            <Footer/>
        </>
    )
}

export default Home
