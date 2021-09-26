import React, { useEffect, useState } from 'react'
import './Home.css'
import Cart from '../Cart/Cart'
import Participant from '../Participant/Participant'

const Home = () => {

    const [participants, setParticipants] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./participant.json')
            .then(res => res.json())
            .then(data => setParticipants(data));
    }, []);

    const addToCart = (participant) => {
        const newCart = [...cart, participant];
        setCart(newCart);
    }

    return (
        <div>
            <div className="row g-2">
                <div className="col-lg-9 col-md-12">
                    <div className="row ps-lg-5 p-md-4 g-4">
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
                <div className="col-lg-3 col-md-12 px-3">
                    <div className="row ps-lg-1 p-md-4 g-4">
                        <h3 className="text-center">Order Summary</h3>
                        <hr />
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
