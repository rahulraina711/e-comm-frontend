/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import "./Product.scss";
import domain from '../../utility/domain';
import axios from 'axios';

function Product(props){
    const dispatch = useDispatch();

    const count = useSelector(state=>state.cartLength);

    const id = props.product._id
    const [a2c, seta2c] = useState("+")

    useEffect(()=>{
        console.log(count);
        getOrders();
    },[]);

    async function getOrders() {
        let x = await axios.get(domain+"/orders")
        let y = x.data
        let a = [];
        for(let i=0;i<y.length-1;i++){
            a.push(y[i].productId._id);
        }
        if (a.includes(id)) return seta2c("added");
    }

    async function addOrder() {
        console.log(id);
        const orderDetail= {
                "productId":id,
                "quantity":1
            }
        const placeOrder =await axios.post(domain+"/orders", orderDetail);
        //console.log(placeOrder);
        seta2c("added");
    }

    function changeState(){
        if(a2c!=="added"){
            dispatch({type:"addToCart"});
            addOrder();
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