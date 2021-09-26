import React from 'react'
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    let totalPrice = 0.00;
    return (
        <div className="ps-4">
            <h5 className="text-center"><b>Total Order:</b> {cart.length}</h5>
            <hr />
            <div className="row  gy-4">
                {
                    cart.map(cartItem => {
                        totalPrice = totalPrice + parseFloat(cartItem.hireme);
                        console.log(totalPrice);
                        return (
                            <div key={cartItem.key} className="col-12">
                                {
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-lg-between align-items-center">
                                                <img className="cart-image card-img-top" src={cartItem.image} alt="" />
                                                <div className="lh-1 px-3">
                                                    <p><b>{cartItem.name}</b> </p>
                                                    <p>Hired by: ${cartItem.hireme}</p>
                                                </div>
                                                <div>
                                                    <button className="btn-danger btn"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
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
