import React from 'react';
import Header from '../Header/Header';
import MainNav from '../MainNav/MainNav';
import {Link} from 'react-router-dom';


function HomePage() {
    return (
        <>
        <MainNav/>
        <Header/>
        <section>
        <h3>Why DreamHome?</h3>
        <p>The first step in building your dream home starts with the floorplan. Here at DreamHome we've done the leg work for you and found the most popular home plans to date
         featuring Crafsmen and Modern Farmhouse. Think you've found the perfect one or can't decide between your two favorite. Add a note and refer back to them at any time.</p>
        
        <h3>Coming Soon</h3>
       <p>Coming soon to DreamHome, virtual home vision boards at your fingertips. Each board is conveniently separated, allowing you to keep your images organized per room. 
       Found the perfect flooring for your kitchen? Save it to your kitchen board, it's that easy. 
       Ideal for anyone who is building their own home, remodeling or just want to create a vision board of what their ideal dream home would look like.</p>
     </section>
    <section>
      <Link
        className="vision-board-demo"
        to="/room-selections">
        <img src="https://i.imgur.com/xzd4uuP.jpg" alt="vision-board-demo" style={{width:500}}/>
      </Link> 
    </section>

     </>
    )
}

export default HomePage;
