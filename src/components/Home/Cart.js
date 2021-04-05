import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './cart.scss'
import Order from './Order';

function Cart(){
    const [orders, setOrders] = useState([]);
    const getOrders = useSelector(state=>state.cartItems);
    
    function renderProducts(){
        let orderList = [...getOrders];
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