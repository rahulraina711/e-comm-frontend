import logo from './logo.png';
import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import domain from '../../utility/domain';

function Navbar (){
    const count = useSelector(state=>state.cartLength);
    const searchBtnIcon = "https://img.icons8.com/pastel-glyph/64/000000/search--v1.png"
    return(
        <div className="navbar">
            <div className="navbar-top">
                <Link to="/"><img id="logo" src={logo} alt="logo" style={{width:"64px", height:"64px"}}/></Link>
                <div className="search-section"><input className="search-bar" type="text"/><button><img src={searchBtnIcon} alt="search"/></button></div>
                <div className="cart"><Link to="/cart">Cart {count}</Link></div>
                <div className="sign-in-section">Sign In Section</div>
            </div>
            <div className="navbar-bottom">
                <button className="btn-category">Mobiles</button>
                <button className="btn-category">Music</button>
                <button className="btn-category">Books</button>
                <button className="btn-category">Electronics</button>
            </div>

        </div>
    );
}

export default Navbar;