import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = Math.round(0);
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = Math.round(0);
    if(total > 15){
        shipping = 5.55;
    }
    

    const tax = Math.round(total / 10);
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered: {cart.length} </h5>
            <p>Product Price: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total: {Number(grandTotal)}</p>
        </div>
    )
}

export default Cart;
