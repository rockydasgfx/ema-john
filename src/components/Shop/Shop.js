import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';



const Shop = () => {
   const [fakeData, setFakeData] = useState([]);
   useEffect(() => {
       fetch('./products.JSON')
       .then(res => res.json())
       .then(data => setFakeData(data))
   }, [])
   const products = fakeData.slice(0, 10);
   const [cart, setCart] = useState([]);

   const hendleAddProduct = (product) =>{
       console.log('clicked', product);
       const newCart = [...cart, product];
       setCart(newCart);
   }
    return (
        
        <div className="shop_container">
            <div className="product_container">
                {
                    products.map(product => 
                    <Product hendleAddProduct ={hendleAddProduct} product={product} /> )
                }
            </div>
            <div className="cart_container">
            <Cart cart={cart} />
            </div>
        </div>
    )
};

export default Shop;
