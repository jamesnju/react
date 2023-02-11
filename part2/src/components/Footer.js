import React from 'react';
import '../style/Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='leftside'>
        <form>
          <h3>CONTACT US</h3>
          <label>Email</label>
          <input type='email' name='email' required/><br />
          <label>Phone Number</label>
          <input type='tel' name='phone' required/><br/>
          <input type='submit' name='submit' />
        </form>
      </div>
      <div className='socialMedia'>
        <p>Instagram<br/>WhatsApp<br/>Facebook<br/>Linkedin</p><br/><br/>
        &copy; 2023 project
      </div>
      <div className='search'><br/>
        <label>Search</label>
        <input type='search'name='search' placeholder='what a you looking for...' required/>
        <input type='submit' name='submit'value='Enter' />
        
      </div>
    </div>
    
  )
}

export default Footer;
