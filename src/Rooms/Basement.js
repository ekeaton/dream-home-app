import React from 'react';
import '../boardz.css'
import DemoNav from '../DemoNav/DemoNav';


class Basement extends React.Component {
    render() {
        return (
            <>
            <DemoNav/>
            <header>
                <h1>Basement</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2OpmpcL" alt="basement"/>
                      <p>Misc</p>
                        <button class="button button5">+</button>
                         <dl>
                          <dt>Note:</dt>
                            <dd>7ft</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://bit.ly/2GnmOpn" target="_blank" rel="noopener noreferrer">https://bit.ly/2GnmOpn</a></dd>
                        </dl>
                  </li>
                  <li>
                  <img src="https://bit.ly/2xXAItU" alt="basement"/>
                    <p>Appliances</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2xWwa6R" alt="basement"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/2Gn0qfX" alt="basement"/>
                    <p>Doors</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2SAo2CM" alt="basement"/>
                    <p>Furniture</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2y0Vl8p" alt="basement"/>
                    <p>Inspiration</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://bit.ly/2LYn9T3" alt="basement"/>
                    <p>Paint sample</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://thd.co/2YjzOXl" alt="basement"/>
                      <p>Lighting</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default Basement;