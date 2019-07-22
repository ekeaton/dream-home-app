import React from 'react';
import {Link} from 'react-router-dom';
import './main-nav.css';

class MainNav extends React.Component {
    render() {
        return (
            <nav className="main-nav-container">
              <Link
               className="nav__link"
               to="/"
               rel="noopener noreferrer">
            <img className="dream-home-logo-main" src="https://i.imgur.com/AUGtSqD.png" alt="dream-home logo"/>
             </Link>
  
          <div class="main-nav">
             <Link to="/signup" className="nav-link">Sign Up</Link>
             <Link to="/demo" className="nav-link">Demo</Link>
          </div>
        </nav>
        )
    }
}

export default MainNav;