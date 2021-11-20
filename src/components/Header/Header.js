import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='header_img'>
                <img src="images/logo.png" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/review">Order Review</a></li>
                    <li><a href="/manage">Manage Inventory</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

