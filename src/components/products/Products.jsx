import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import ProductCard from './card/ProductCard'
import { ContainerProductCategories } from './ProductStyled'

const Products = () => {
    const [products, setProduct] = useState([])
    const [categories, setCategories] = useState([])
    const [select, setSelect] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3004/product`).then((result) => {
          const listProduct = result.data;
          setProduct(listProduct);
        });
      }, []);
    
    const categoryProducts = products.map((pro) => (pro.category));    
    const categoriesTitle =  categories.map((cat) => cat.id)
    
    useEffect(() => {
        axios.get(`http://localhost:3004/categories`).then((result) => {
          const listCategory = result.data;
          setCategories(listCategory);
        });
      }, []);

    const handleChange = (event) => {
        setSelect(event.target.value)
    }
    const categoryFilter = useMemo(() => products.filter((item) =>{
        return item.category.toLowerCase().includes(select.toLowerCase())
      }), [products, select]);

    return (
        <>
            <Header/>                
                <Container>
                    <ContainerProductCategories>
                        <Form>
                            { categories.map((cat,index) => 
                                <Form.Check 
                                    key={index} 
                                    value={cat.id}
                                    type='radio'
                                    name='radio'
                                    label={cat.name}
                                    onChange={handleChange}
                                />                                   
                            )}                                                                         
                        </Form>
                        <div>
                            {categoryFilter.map((pro, index) =>
                                <ProductCard
                                key={index}
                                pro={pro}
                                />
                            )
}
                        </div>
                    </ContainerProductCategories>
                    
                </Container>
            <Footer/>
        </>
    )
}

export default Products
