import React from 'react';
import '../boardz.css'
import ComingSoonNav from '../ComingSoonNav/ComingSoonNav';


class MasterBathroom extends React.Component {
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
                <h1>Master Bathroom</h1>
            </header>
            <div class="boardz beautiful">
              <ul>
                  <li>
                     <img src="https://bit.ly/2Y8OfNL" alt="master-bathroom"/>
                      <p>Counters</p>
                      <button class="button button5" onClick={this.handleOpenClick}>+</button>
                        {this.state.openList ? 
                         <dl>
                          <dt>Note:</dt>
                            <dd>Concrete counters</dd>
                            <br/>
                            <dt>Link:</dt>
                            <dd><a href="https://www.houseofrumours.com/diy-concrete-countertops/" target="_blank" rel="noopener noreferrer">https://www.houseofrumours.com/diy-concrete-countertops/</a></dd>
                        </dl>
                        : false }
                  </li>
                  <li>
                  <img src="https://bit.ly/2M0saL8" alt="master-bathroom"/>
                    <p>Cabinets</p>
                   <button class="button button5">+</button>       
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2Z07JkP" alt="master-bathroom"/>
                    <p>Flooring</p>
                   <button class="button button5">+</button>       
                  </li>
                  <li>
                  <img src="https://bit.ly/2JEtT6Z" alt="master-bathroom"/>
                    <p>Lighting</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                  <img src="https://bit.ly/2XWItKX" alt="master-bathroom"/>
                    <p>Mirror</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                  <img src="https://bit.ly/2JRBFt3" alt="master-bathroom"/>
                    <p>Inspiration</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
              <ul>
                  <li>
                    <img src="https://bit.ly/2LrEGDV" alt="master-bathroom"/>
                    <p>Paint sample</p>
                   <button class="button button5">+</button>   
                  </li>
                  <li>
                    <img src="https://bit.ly/2JGAHRH" alt="master-bathroom"/>
                      <p>Misc</p>
                   <button class="button button5">+</button>   
                  </li>
              </ul>
            </div>
        </>  
        )
    }
}





export default MasterBathroom;