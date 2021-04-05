import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './cart.scss'
import Order from './Order';

function Cart(){
    const orders = useSelector(state=>state.cartItems)
    console.log(orders);
    
    function renderProducts(){
        let orderList = orders;
        return orderList.map((product, i)=>{
            return <Order key={i} product={product.productId}/>
        })
    }
    

    return(
        <div id="cart-main">
            <div className="cart">{renderProducts()}</div>
            <div className="total">Total: 23</div>
        </div>
    )
}

export default Cart;