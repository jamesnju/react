import React from 'react';
import Logo from '../images/icon1.png';
import '../style/Navbar.css'; 
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'>
        <img src={Logo} />
      </div>
      <div className='rightside'>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/attedance">Attedance</Link>
        <Link to="/student">Student</Link>
        
      </div>
      
    </div>
  )
}

export default Navbar;
