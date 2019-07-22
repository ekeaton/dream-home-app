import React from 'react';
import '../boardz.css'
import DemoNav from '../DemoNav/DemoNav';


class KidsRoom extends React.Component {
    render() {
        return (
            <>
            <DemoNav/>
            <header>
                <h1>Kids Bedroom</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2XOmyuw" alt="kids-bedroom"/>
                      <p>Misc</p>
                        <button class="button button5">+</button>
                         <dl>
                          <dt>Note:</dt>
                            <dd>Storage options</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://bit.ly/2JOe50l" target="_blank" rel="noopener noreferrer">https://bit.ly/2JOe50l</a></dd>
                        </dl>
                  </li>
                  <li>
                  <img src="https://bit.ly/2LvEzqD" alt="kids-bedroom"/>
                    <p>Furniture</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2XMXsfv" alt="kids-bedroom"/>
                    <p>Paint sample</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/2LubMmm" alt="kids-bedroom"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2O4vW8T" alt="kids-bedroom"/>
                    <p>Doors</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2LsEF2j" alt="kids-bedroom"/>
                    <p>Decor</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://crate.us/2JDVcOY" alt="kids-bedroom"/>
                    <p>Misc</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://bit.ly/2Gjhsvj" alt="kids-bedroom"/>
                      <p>Lighting</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default KidsRoom;