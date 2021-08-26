import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar 
                sticky='top'
                bg="dark" 
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="/">Shoping</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>                        
                        <Nav.Link href="/products">Productos</Nav.Link>
                        <Nav.Link href="/shoppingCart">
                            <img 
                                src='https://i.imgur.com/TeEyXRv.png' 
                                alt='carrito de compras'
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
