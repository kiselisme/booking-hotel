import React from 'react';
import  './Home.css'
import Navbar from './../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Featured from './../../components/Featured/Featured';
import Property from '../../components/Property/Property';
import FeatProp from '../../components/FeatProp/FeatProp';
import MailList from '../../components/MailList.jsx/MailList';


const Home = () => {
    return (
   <div>
    <Navbar/>
    <Header/>
    <div className="h-container">
      <Featured/>
      <h1 className='h-title'>Browse by property type</h1>
      <Property/>
      <h1 className='h-title'>Browse by property type</h1>
      <FeatProp/>
      <MailList/>

    </div>
   </div>
    );
};

export default Home;