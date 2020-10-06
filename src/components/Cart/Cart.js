import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 12.99;
    }

    const tax = total / 10;
    const formatNumber = num => {
        const precesion = num.toFixed(2);
        return Number(precesion);
    }
    return (
        <div>
            <h4>Order summery from cart</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p>
                <small>Shipping cost: {shipping}</small>
            </p>
            <p>
                <small>Tax + vat: {formatNumber(tax)}</small>
            </p>
            <p>Total price: {formatNumber(total + shipping)}</p>
        </div>
    );
};

export default Cart;
