import React, { useEffect, useState } from 'react'
import './Home.css'
import Cart from '../Cart/Cart'
import Participant from '../Participant/Participant'

const Home = () => {

    // Declare State
    const [participants, setParticipants] = useState([]);
    const [cart, setCart] = useState([]);

    // Fetch Data
    useEffect(() => {
        fetch('./participant.json')
            .then(res => res.json())
            .then(data => setParticipants(data));
    }, []);


    // Add to Cart Handler
    const addToCart = (participant) => {

        const matchKey = cart.find((data) => data.key === participant.key);
        if (matchKey === undefined) {
            const newCart = [...cart, participant];
            setCart(newCart);
        } else {
            alert(
                "You are already added " + participant.name + " To The Cart"
            );
        }
    };

    return (
        <div className="mx-5 pb-5">
            <div className="row g-2">

                {/* Programmer List */}
                <div className="col-lg-9 col-md-12">
                    <div className="row g-4">
                        <h3 className="text-center">Top Programmers</h3>
                        {
                            participants.map(participant => <Participant
                                key={participant.key}
                                participant={participant}
                                addToCart={addToCart}
                            >
                            </Participant>)
                        }
                    </div>
                </div>

                {/* Cart Container */}
                <div className="col-lg-3 col-md-12 ">
                    <div className="row g-4">
                        <h3 className="text-center">Cart</h3>
                        <Cart
                            key={cart.key}
                            cart={cart}
                        >
                        </Cart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
