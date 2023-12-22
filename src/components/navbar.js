import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar">
      <p className="navLogo">VNC.</p>
          
                 
        <div className="navMenu">
           
        <ul className="navMenuListItem">
            <li> <a href="#About" target="_blank"> </a> About</li>
            <li> <a href="#Experience" target="_blank"> </a> Experience</li>
            
            <li> <a href="#Projects" target="_blank"> </a> Projects</li>
            
            
        </ul>
        
        </div>
        
        <button className="navMenuBtn">
        <img src="" alt="" className="navMenuimg" href="mailto:vvchukwuemeka@yahoo.co.uk" target="_blank" />Contact Me </button>
            
        <img src="./images/menuicon.png" alt='menu icon'className="navMenuIcon"/>   
  

    </nav>

  )
}

export default Navbar;