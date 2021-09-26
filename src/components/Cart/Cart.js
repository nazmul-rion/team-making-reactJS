import React from 'react'
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    let totalPrice = 0.00;
    return (
        <div>
            <h5 className="text-center"><b>Total Order:</b> {cart.length}</h5>
            <hr />
            <div className="row  gy-4">
                {
                    cart.map(cartItem => {
                        totalPrice = totalPrice + parseFloat(cartItem.hireme);
                        console.log(totalPrice);
                        return (
                            <div key={cartItem.key} className="col-12">
                                <div className="row ">
                                    <div className="col-4 align-items-center">
                                        <img className="cart-image" src={cartItem.image} alt="" />
                                    </div>
                                    <div className="col-8 lh-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p><b>{cartItem.name}</b> </p>
                                                <p>Hired by: {cartItem.hireme}</p>
                                            </div>
                                            <div>
                                                <button className="btn-danger btn"><i className="fas fa-trash-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
                <h5 className="text-center">Total Cost: $<span>{totalPrice.toFixed(2)}</span></h5>
                <button className="btn-primary btn w-75 mx-auto"><i className="fas fa-money-bill-alt"></i> <b>Pay</b> </button>
            </div>

        </div >
    )
}

export default Cart
