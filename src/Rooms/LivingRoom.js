import React from 'react';
import '../boardz.css'
import ComingSoonNav from '../ComingSoonNav/ComingSoonNav';


class LivingRoom extends React.Component {

  state = {
    showList: false,
  }

  handleOpenClick = () => {
    this.setState({
      openList: true,
    })
  }

  
  
    render() {
     
        return (
            <>
            <ComingSoonNav/>
            <header>
                <h1>Living Room</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2Z05a2a" alt="room-living"/>
                      <p>Lighting</p>
                        <button class="button button5" onClick={this.handleOpenClick}>+</button>
                        {this.state.openList ? 
                        <div id="results" className="results">
                            <dl>
                              <dt>Note:</dt>
                                <dd>Lighting above the couches</dd>
                                <br/>
                                <dt>Link:</dt>
                                <dd><a href="https://bit.ly/2YYNPXJ" target="_blank" rel="noopener noreferrer">https://bit.ly/2YYNPXJ</a></dd>
                            </dl>
                      </div>
                      : false}
                  </li>
                  <li>
                  <img src="https://crate.us/2Y13tjM" alt="living-room"/>
                    <p>Furniture</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2OjchSP" alt="living-room"/>
                    <p>Paint Sample</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/30FiBFm" alt="living-room"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2YdKOWb" alt="living-room"/>
                    <p>Fireplace</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2xX11jG" alt="living-room"/>
                    <p>Paint Sample</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://bit.ly/2Lw5djk" alt="living-room"/>
                    <p>Decor</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://bit.ly/2LtevNc" alt="living-room"/>
                      <p>Furniture</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}












export default LivingRoom;