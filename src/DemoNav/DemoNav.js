import React from 'react';
import {Link} from 'react-router-dom';
import './main-nav.css';

function DemoNav() {
        return (
           <>
            <nav className="main-nav-container">
              <Link
               className="nav__link"
               to="/"
               rel="noopener noreferrer">
            <img className="dream-home-logo" src="https://i.imgur.com/AUGtSqD.png" alt="dream-home logo"/>
             </Link>
  
          <div class="main-nav">
             <Link to="/signup" className="nav-link">Sign Up</Link>
             <Link to="/demo" className="nav-link">Demo</Link>
             <Link to="/add-vision" className="nav-link">Add Vision</Link>
          </div>
        </nav>
       </>
        )
     }


export default DemoNav;