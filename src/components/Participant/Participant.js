import React from 'react'
import './Participant.css'
const Participant = (props) => {

    const { name, country, institution, role, hireme, image, profile } = props.participant;

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 card-participant">
                <div className="p-3">
                    <img className="rounded-circle   card-img-top card-image border border-5" src={image} alt="" />
                </div>
                <div className="card-body ps-4 pe-2 lh-1">
                    <h5 className="card-title"><strong>Name: </strong> <span className="name"> {name}</span></h5>
                    <p><b>Country: </b> <span className="country">{country}</span></p>
                    <p><b>Institution: </b> <span className="institute"> {institution}</span></p>
                    <p><b>Position: </b> <span className="role">{role}</span></p>
                    <p><b>Hire me: </b><span className="rate"> ${hireme}</span></p>
                    <div className="d-flex flex-column">
                        <button onClick={() => props.addToCart(props.participant)} className="btn btn-info fw-bold mb-3 me-3"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                        <a className="text-info btn btn-outline-dark text-decoration-none me-3" href={profile} target="_blank"><b>See Profile</b> <i class="fas fa-user-circle"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participant
