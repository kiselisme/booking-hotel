import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="hcontainer">
            <div className="headerList">
                <div className="headerItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
                </div>
                <div className="headerItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
                </div>
                <div className="headerItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
                </div>
            </div>
            <h1 className='htitle'>
                A lifetime of Discounts? It's genius
            </h1>
            <p className='hdesc'>
            Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="hbtn">
                Sigh in / Register
            </button>
            <div className='header-search'>
                <div className='search-item'>
                <FontAwesomeIcon icon={faBed} className='h-icon' />
                <input
                type="text"
                placeholder='Where are you going?'
                className='search-input' />
                </div>
                <div className='search-item'>
                <FontAwesomeIcon icon={faCalendarDays} className='h-icon' />
                <span className='search-text'> date to date</span>
                </div>
                <div className='search-item'>
                <FontAwesomeIcon icon={faPerson} className='h-icon' />
                <span className='search-text'>2 adults 2 children 1 room</span>
                </div>
                <div className='search-item'>
                    <button className="hbtn">Search</button>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Header;