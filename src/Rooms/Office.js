import React from 'react';
import '../boardz.css'
import ComingSoonNav from '../ComingSoonNav/ComingSoonNav';

class Office extends React.Component {
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
                <h1>Office</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/30Nq8C8" alt="office"/>
                      <p>Furniture</p>
                      <button class="button button5" onClick={this.handleOpenClick}>+</button>
                        {this.state.openList ? 
                         <dl>
                          <dt>Note:</dt>
                            <dd>Home office desk</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://bit.ly/2GnODhi" target="_blank" rel="noopener noreferrer">https://bit.ly/2GnODhi</a></dd>
                        </dl>
                        : false } 
                  </li>
                  <li>
                  <img src="https://bit.ly/2M2VEYB" alt="office"/>
                    <p>Lighting</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/30FiBFm" alt="office"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/2Gnf72r" alt="office"/>
                    <p>Doors</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://crate.us/32Jd4iI" alt="office"/>
                    <p>Furniture</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://i.imgur.com/jMR6znQ.jpg" alt="office"/>
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
                    <img src="https://bit.ly/2YhSl6r" alt="office"/>
                      <p>Misc</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default Office;