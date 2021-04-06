import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './home.scss';

import domain from '../../utility/domain';

import Product from './Product';
import { useDispatch } from 'react-redux';

function Home(){

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    let orderIds = [];

    useEffect(()=>{
        setCart();
        getProducts();
    },[]);
    async function setCart(){
        let totalPrice=0;
        let cartLength=0;
        const orderRes= await axios.get(domain+"/orders");
        const orderList = orderRes.data;
        orderList.map(item => {totalPrice += item.productId.price; cartLength += 1; orderIds.push(item.productId._id);return (totalPrice,cartLength,orderIds)});
        //console.log(orderList.length);

        dispatch({
            type:"setCart",
            payload:{
                cartInt : cartLength || 0,
                cart: orderList || [],
                cartTotal: totalPrice || 0,
            }
        })        
    }

    async function getProducts(){
        const productRes = await axios.get(domain+"/products");
        setProducts(productRes.data);
    }

    function renderProducts(){
        let productList = products;
        return productList.map((product, i)=>{
            return <Product key={i} product={product} orderIdList={orderIds}/>
        })
    }

    return (
        <div className="home">{renderProducts()}</div>
    )
}

export default Home;