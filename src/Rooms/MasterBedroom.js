import React from 'react';
import '../boardz.css'
import ComingSoonNav from '../ComingSoonNav/ComingSoonNav';


class MasterBedroom extends React.Component {
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
                <h1>Master Bedroom</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2Yae28q" alt="master-bedroom"/>
                      <p>Furniture</p>
                      <button class="button button5" onClick={this.handleOpenClick}>+</button>
                        {this.state.openList ? 
                         <dl>
                          <dt>Note:</dt>
                            <dd>Option 1</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://bit.ly/2XR1Km9" target="_blank" rel="noopener noreferrer">https://bit.ly/2XR1Km9</a></dd>
                        </dl>
                        : false }
                  </li>
                  <li>
                  <img src="https://bit.ly/2YZHxXL" alt="master-bedroom"/>
                    <p>Decor</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2SlWtwG" alt="master-bedroom"/>
                    <p>Paint Sample</p>
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
                  <img src="https://bit.ly/2xX5ItO" alt="master-bedroom"/>
                    <p>Doors</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2xX11jG" alt="master-bedroom"/>
                    <p>Paint Sample</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://bit.ly/2XQzNdV" alt="master-bedroom"/>
                    <p>Decor</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://bit.ly/2xXRUiE" alt="master-bedroom"/>
                      <p>Decor</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default MasterBedroom;