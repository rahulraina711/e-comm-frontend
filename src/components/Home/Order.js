/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./order.scss";
import domain from '../../utility/domain';
import { useDispatch } from 'react-redux';


function Order(props){
    const dispatch = useDispatch();

    return(
        <div className="order">
            <div className="item">
                <h2>{props.order.name}</h2>
                <img className="image" src={domain+"/"+props.order.productImage} height="200" width="200" />
            </div>
            
            <div className="price">
                {props.order.price}
                <button>Remove Item</button>
            </div>
        </div>
    )
}

export default Order;