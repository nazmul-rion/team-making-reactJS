import React from 'react'
import "./Header.css"


const Header = () => {
    return (
        <div className="header text-center rounded-bottom py-3 mb-3">
            <h3>Make a Team</h3>
            <h4>to participate</h4>
            <h3>ICPC Challenge Marathon</h3>
            <h4><i class="fas fa-award text-danger"></i> 1st Price: <b>$50000</b></h4>
        </div >
    )
}

export default Header
