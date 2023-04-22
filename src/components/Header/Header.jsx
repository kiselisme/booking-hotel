import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import './Header.css'

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === 'i' ?
                    options[name] + 1 : options[name] - 1,
            };
        });
    };
    return (
        <div className='header'>
            <div className={type === 'list' ? 'hcontainer listMode' : 'hcontainer'}>
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
                {  type !== 'list' &&
                    <>
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
                        <span onClick={() => setOpenDate(!openDate)} className='search-text'>{`${format(
                            date[0].startDate,
                            'MM/dd/yyyy'
                        )}  to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>

                    <div className='search-item'>
                        <FontAwesomeIcon icon={faPerson} className='h-icon' />
                        <span
                            onClick={() => setOpenOptions(!openOptions)}
                            className='search-text'>
                            {`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className='option-item'>
                                <span className="option-text">Adult</span>
                                <div className="option-counter">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="count-btn"
                                        onClick={() => handleOption('adult', 'd')}>-</button>
                                    <span className="count-number">{options.adult}</span>
                                    <button className="count-btn" onClick={() => handleOption('adult', 'i')}>+</button>
                                </div>
                            </div>

                            <div className='option-item'>
                                <span className="option-text">Children</span>
                                <div className="option-counter">
                                    <button
                                        disabled={options.children <= 0}
                                        className="count-btn"
                                        onClick={() => handleOption('children', 'd')}>-</button>
                                    <span className="count-number">{options.children}</span>
                                    <button className="count-btn" onClick={() => handleOption('children', 'i')}>+</button>
                                </div>
                            </div>

                            <div className='option-item'>
                                <span className="option-text">Room</span>
                                <div className="option-counter">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="count-btn"
                                        onClick={() => handleOption('room', 'd')}>-</button>
                                    <span className="count-number">{options.room}</span>
                                    <button className="count-btn" onClick={() => handleOption('room', 'i')}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className='search-item'>
                        <button className="hbtn">Search</button>
                    </div>
                </div></>}
            </div>

        </div>
    );
};

export default Header;