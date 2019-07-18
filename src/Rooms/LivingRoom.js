import React from 'react';
import {Link} from 'react-router-dom';
import '../boardz.css'


class LivingRoom extends React.Component {
    render() {
        return (
            <>
            <header>
                <h1>Living Room</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2Z05a2a" alt="room-living"/>
                      <p>Lighting</p>
                        <button class="button button5">+</button>
                         <dl>
                          <dt>Note:</dt>
                            <dd>Lighting above the kitchen island</dd>
                            <dt>Link:</dt>
                            <dd><a href="https://bit.ly/2YYNPXJ" target="_blank" rel="noopener noreferrer">https://bit.ly/2YYNPXJ</a></dd>
                        </dl>
                  </li>
                  <li>
                  <img src="https://crate.us/2Y13tjM" alt="living-room"/>
                    <p>Furniture</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                      <h1> Board 3</h1>
                      Content
                  </li>
                  <li>
                      <h1> Board 4</h1>
                      Content
                  </li>
              </ul>
              <ul>
                  <li>
                      <h1> Board 3</h1>
                      Content
                  </li>
                  <li>
                      <h1> Board 4</h1>
                      Content
                  </li>
              </ul>
              <ul>
                  <li>
                      <h1> Board 3</h1>
                      Content
                  </li>
                  <li>
                      <h1> Board 4</h1>
                      Content
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}












export default LivingRoom;