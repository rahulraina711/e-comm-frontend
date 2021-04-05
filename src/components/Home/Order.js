/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

import "./order.scss";
import domain from '../../utility/domain';


function Order(props){

    return(
        <div className="order">
            <div className="item">
                <h2>{props.product.name}</h2>
                <img className="image" src={domain+"/"+props.product.productImage} height="200" width="200" />
            </div>
            
            <div className="price">
                {props.product.price}
            </div>
        </div>
    )
}

export default Order;