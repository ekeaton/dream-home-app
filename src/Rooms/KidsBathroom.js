import React from 'react';
import '../boardz.css'
import DemoNav from '../DemoNav/DemoNav';


class KidsBathroom extends React.Component {
    render() {
        return (
            <>
            <DemoNav/>
            <header>
                <h1>Kids Bathroom</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2YfpzDh" alt="kids-bathroom"/>
                      <p>Misc</p>
                        <button class="button button5">+</button>
                         <dl>
                          <dt>Note:</dt>
                            <dd>Bathroom set</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://bit.ly/2M2MGuh" target="_blank" rel="noopener noreferrer">https://bit.ly/2M2MGuh</a></dd>
                        </dl>
                  </li>
                  <li>
                  <img src="https://bit.ly/2Yh1Wuc" alt="kids-bathroom"/>
                    <p>Cabinets</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/30M3fyK" alt="kids-bathroom"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/30VC6K7" alt="kids-bathroom"/>
                    <p>Lighting</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2XXabvY" alt="kids-bathroom"/>
                    <p>Mirror</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2Lz4UUR" alt="guest-bathroom"/>
                    <p>Inspiration</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://bit.ly/2y2qfNO" alt="guest-bathroom"/>
                    <p>Paint sample</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51rPmwf02wL._SX522_.jpg" alt="guest-bathroom"/>
                      <p>Decor</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default KidsBathroom;