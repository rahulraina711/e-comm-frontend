import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './home.scss';

import domain from '../../utility/domain';

import Product from './Product';
import { useDispatch } from 'react-redux';

function Home(){

    const [products, setProducts] = useState([]);
    const [orderIds, setOrderIds] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        getOrders();
    },[]);
    async function getOrders(){
        const orderIdxs = [];
        const orderRes = await axios.get(domain+"/orders");
        //console.log("orders here",orderRes.data);
        const orders = orderRes.data;
        for(let i=0; i<orders.length; i++){
            orderIdxs.push(orders[i].productId._id)
            dispatch({
                type:"setCart",
                payload:{
                    order:orders[i]
                }
            });
            console.log(orders[i]);
            
        }  
        getProducts();   
        setOrderIds(orderIdxs)
    }   

    async function getProducts(){
        const productRes = await axios.get(domain+"/products");
        //console.log(productRes.data);
        setProducts(productRes.data);
    }

    function renderProducts(){
        let productList = products;
        return productList.map((product, i)=>{
            return <Product key={i} product={product} orderIds={orderIds}/>
        })
    }

    return (
        <div className="home">{renderProducts()}</div>
    )
}

export default Home;