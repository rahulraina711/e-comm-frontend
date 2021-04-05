import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './home.scss';

import domain from '../../utility/domain';

import Product from './Product';
import { useDispatch } from 'react-redux';

function Home(){
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        getProducts();
        getOrders();
    },[]);
    async function getOrders(){
        const orderRes = await axios.get(domain+"/orders");
        //console.log("orders here",orderRes.data);
        const orders = orderRes.data;
        orders.map(order=> dispatch({type:"setCart", payload:{ order}}))
        dispatch({type:"setCart", payload :{ count: orders.length}});
        
    }   

    async function getProducts(){
        const productRes = await axios.get(domain+"/products");
        console.log(productRes.data);
        setProducts(productRes.data);
    }

    function renderProducts(){
        let productList = products;
        return productList.map((product, i)=>{
            return <Product key={i} product={product} />
        })
    }

    return (
        <div className="home">{renderProducts()}</div>
    )
}

export default Home;