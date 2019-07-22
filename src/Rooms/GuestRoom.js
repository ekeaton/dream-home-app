import React from 'react';
import '../boardz.css'
import DemoNav from '../DemoNav/DemoNav';


class GuestRoom extends React.Component {
    render() {
        return (
            <>
            <DemoNav/>
            <header>
                <h1>Guest Bedroom</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2xUvL4V" alt="guest-bedroom"/>
                      <p>Decor</p>
                        <button class="button button5">+</button>
                         <dl>
                          <dt>Note:</dt>
                            <dd>Layout ideas</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://www.thespruce.com/decorating-secrets-the-perfect-guest-bedroom-4092999" target="_blank" rel="noopener noreferrer">https://www.thespruce.com/decorating-secrets-the-perfect-guest-bedroom-4092999</a></dd>
                        </dl>
                  </li>
                  <li>
                  <img src="https://bit.ly/2xWwa6R" alt="guest-bedroom"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2O5aLmX" alt="guest-bedroom"/>
                    <p>Lighting</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/30FiBFm" alt="master-bedroom"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2O4vW8T" alt="guest-bedroom"/>
                    <p>Doors</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2LYn9T3" alt="guest-bedroom"/>
                    <p>Paint Sample</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://bit.ly/2XR4VKh" alt="guest-bedroom"/>
                    <p>Furniture</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://bit.ly/2M0FVcu" alt="guest-bedroom"/>
                      <p>Lighting</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default GuestRoom;