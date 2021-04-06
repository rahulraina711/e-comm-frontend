/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';

import "./Product.scss";
import domain from '../../utility/domain';
import axios from 'axios';


function Product(props){
    const dispatch = useDispatch();
    const id = props.product._id;
    const [a2c, seta2c] = useState("+");
    useEffect(()=>{
        setState();
    },[])

    async function setState(){
        //const orderIdList = []
        const orderRes= await axios.get(domain+"/orders");
        const orderList = orderRes.data.filter(item=> item.productId._id===id);
        // console.log(orderList);
        await orderList[0] ? seta2c("added") : seta2c("+");
    }

    async function changeState(){
        console.log(id);
        const orderDetail= {
                "productId":id,
                "quantity":1
            }
        const placeOrder =await axios.post(domain+"/orders", orderDetail);
        console.log(placeOrder.data);
        if(a2c!=="added"){
            dispatch({
                type:"addToCart",
                payload:{
                    item:placeOrder.data,
                    price:props.product.price
                }
            })
            seta2c('added');
        }
        else{
            alert("already added to cart");
        }
    }

    return(
        <div className="product" >
            <img className="image" src={domain+"/"+props.product.productImage} height="400" width="300" />
            <div className="product-name">{props.product.name}</div>
            <div className="a2c"><h3>Price: ${props.product.price}</h3><button onClick={changeState}>{a2c}</button></div>
            <h4 className="desc">Description: {props.product.description.slice(0,20)}...</h4>
    </div>
    )
}

export default Product;