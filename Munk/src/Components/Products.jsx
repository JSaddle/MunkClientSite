import { useEffect, useState } from "react"
import styled from "styled-components"
// import { popularProducts } from "../data"
import Product from "./Product"
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #dcdcdc;
`

const Products = ({cat, filters, sort}) => {

    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/product?category=${cat}` : "http://localhost:5000/api/product");
                setProducts(res.data);
            } catch (error) {
                console.log(error.request)
            }
        };
        getProducts()
    }, [cat]);

    useEffect(() => {
        if(cat){
        setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
                )
            )
        );
        }
        else{
            setFilteredProducts(products)
        }

    }, [products, cat, filters])

    useEffect(() => {
        if(sort ==="newest"){
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
                )
        } else if (sort ==="asc"){
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price)
                )
        } else {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <Container>
            {cat ? filteredProduct.map(item => (
                <Product item={item} key={item.id}/>
            )) :
            products.map(item => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
  )
}

export default Products