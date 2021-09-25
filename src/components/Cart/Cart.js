import React from 'react'
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    let totalPrice = 0;
    return (
        <div>
            <p><b>Total Order:</b> {cart.length}</p>
        </div>
    )
}

export default Cart
