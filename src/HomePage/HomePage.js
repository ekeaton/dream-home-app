import React from 'react';
import Header from '../Header/Header';
import MainNav from '../MainNav/MainNav';
import "./home-page.css";
import {Link} from 'react-router-dom';


function HomePage() {
    return (
        <>
        <MainNav/>
        <Header/> 
        <section className="home-section">
        <header>
            <h2>Why DreamHome?</h2>
        </header>
        <div className="row">
        <div className="col-6">
          <img src="https://i.imgur.com/qwl6oeG.png"  alt="floorplan-icon" className="icon-1"/>
          <h4>Floorplans</h4>
             <p>The first step in building your dream home starts with the floorplan. Here at DreamHome we've done the leg work for you and found the most popular home plans.</p>
        </div>
        <div className="col-6">
          <img src="https://i.imgur.com/it9vrby.png" alt='notes-icon' className="icon"/>
          <h4>Notes</h4>
         <p>Think you've found the perfect one or can't decide between your two favorites. Add a note and refer back to them at any time.</p>
      </div>
      </div>
      </section>
      <section className="soon-section">
        <header>
            <h3>Coming Soon</h3>
        </header>
        <p>
        Coming soon to DreamHome, virtual home vision boards at your fingertips. Each board is conveniently separated, allowing you to keep your images organized per room. 
       Found the perfect flooring for your kitchen? Save it to your kitchen board, it's that easy. 
       Ideal for anyone who is building their own home, remodeling or just want to create a vision board of what their ideal dream home would look like.</p>
         <Link
           className="vision-board-demo"
           to="/room-selections">
          <img src="https://i.imgur.com/xzd4uuP.jpg" alt="vision-board-demo" className="vision-image"/>
          </Link>
      </section>
    </>
 )
}

export default HomePage;
