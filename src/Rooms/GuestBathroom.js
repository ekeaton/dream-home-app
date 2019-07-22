import React from 'react';
import '../boardz.css'


class GuestBathroom extends React.Component {
    render() {
        return (
            <>
            <header>
                <h1>Guest Bathroom</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2XTMXab" alt="guest-bathroom"/>
                      <p>Counters</p>
                        <button class="button button5">+</button>
                         <dl>
                          <dt>Note:</dt>
                            <dd>Marble Vanity</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://thd.co/2LwPnot" target="_blank" rel="noopener noreferrer">https://thd.co/2LwPnot</a></dd>
                        </dl>
                  </li>
                  <li>
                  <img src="https://bit.ly/2JPKbJf" alt="guest-bathroom"/>
                    <p>Cabinets</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/30JZfiw" alt="guest-bathroom"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/2YbvrO4" alt="guest-bathroom"/>
                    <p>Lighting</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2Y8pdKA" alt="guest-bathroom"/>
                    <p>Mirror</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2XRtDub" alt="guest-bathroom"/>
                    <p>Inspiration</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://bit.ly/2LrEGDV" alt="guest-bathroom"/>
                    <p>Paint sample</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://bit.ly/2SDyfOV" alt="guest-bathroom"/>
                      <p>Misc</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default GuestBathroom;