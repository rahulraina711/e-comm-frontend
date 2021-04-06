import React from 'react';
import { useSelector } from 'react-redux';
import './cart.scss'
import Order from './Order';

function Cart(){

    let getCart = useSelector(state=>state.cart);
    let total = useSelector(state=>state.cartTotal)
    console.log(getCart);
    
    function renderProducts(){ 
        return getCart[0].map((order, i)=>{
            return <Order key={i} order={order.productId} orderId={order._id}/>
        })
    }

    return(
        <div id="cart-main">
            <div className="cart">{renderProducts()}</div>
            <div className="total">Total: ${total}</div>
        </div>
    )
}

export default Cart;