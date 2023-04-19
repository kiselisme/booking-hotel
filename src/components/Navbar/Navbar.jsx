import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='container'>
            <span className='logo'>lamabooking</span>
            <div className="items">
                <button className='navbtn'>Register</button>
                <button className='navbtn'>Login</button>
            </div>
        </div>
    </div>
    );
};

export default Navbar;