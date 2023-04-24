import React from 'react';
import './MailList.css'
const MailList = () => {
    return (
        <div className='mail'>
            <h1 className='m-title'>Save time, save money</h1>
            <span className="mail-desc">Sign Up and we'll send the best deals to you</span>
            <div className="m-container">
                <input type="text" placeholder='Your email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;