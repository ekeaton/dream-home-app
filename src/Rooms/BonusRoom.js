import React from 'react';
import '../boardz.css'
import ComingSoonNav from '../ComingSoonNav/ComingSoonNav';


class BonusRoom extends React.Component {

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
                <h1>Bonus Room</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/32Gak5H" alt="bonus-room"/>
                      <p>Furniture</p>
                      <button class="button button5" onClick={this.handleOpenClick}>+</button>
                      {this.state.openList ? 
                         <dl>
                          <dt>Note:</dt>
                            <dd>4-piece sectional</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://bit.ly/2Z3ARYD" target="_blank" rel="noopener noreferrer">https://bit.ly/2Z3ARYD</a></dd>
                        </dl>
                        : false}
                  </li>
                  <li>
                  <img src="https://bit.ly/2y17sm8" alt="bonus-room"/>
                    <p>Decor</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2xWwa6R" alt="bonus-room"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/2O4vW8T" alt="bonus-room"/>
                    <p>Doors</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2LyoAbs" alt="office"/>
                    <p>Furniture</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2Z6ktGS" alt="office"/>
                    <p>Inspiration</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://bit.ly/2LYn9T3" alt="office"/>
                    <p>Paint sample</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://bit.ly/2GnkHSr" alt="office"/>
                      <p>Lighting</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default BonusRoom;