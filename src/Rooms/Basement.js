import React from 'react';
import '../boardz.css'
import ComingSoonNav from '../ComingSoonNav/ComingSoonNav';


class Basement extends React.Component {
   
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
                <h1>Basement</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2OpmpcL" alt="basement"/>
                      <p>Misc</p>
                      <button class="button button5" onClick={this.handleOpenClick}>+</button>
                        {this.state.openList ? 
                         <dl>
                          <dt>Note:</dt>
                            <dd>7ft</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://bit.ly/2GnmOpn" target="_blank" rel="noopener noreferrer">https://bit.ly/2GnmOpn</a></dd>
                        </dl>
                        : false}
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