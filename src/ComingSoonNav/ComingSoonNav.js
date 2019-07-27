import React from 'react';
import {Link} from 'react-router-dom';
import './coming-soon-nav.css';


function ComingSoonNav() {
        return (
            <nav className="demo-nav-container">
              <div className="demo-logo-container">
                 <Link
                  className="nav__link"
                  to="/"
                  rel="noopener noreferrer">
                   <img className="dream-home-logo" src="https://i.imgur.com/GylZ3c7.png" alt="dream-home logo"/>
                 </Link>
              </div>

             <div className="demo-nav">
               <Link to="/signup" className="demo-nav-link">Sign Up</Link>
               <Link to="/demo" className="demo-nav-link">Demo</Link>
             </div>
            </nav>
         )
     }


export default ComingSoonNav;