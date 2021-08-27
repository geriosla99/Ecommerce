import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Cart = () => {
    return (
        <>
            <Header/>
            <Container>
                <Table 
                    striped bordered hover variant="dark"
                    className='my-3'
                >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Sub Total</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td className="bi bi-x-circle"></td>
                        </tr>                        
                    </tbody>
                </Table>
            </Container>
            <Footer/>          
        </>
    )
}

export default Cart
