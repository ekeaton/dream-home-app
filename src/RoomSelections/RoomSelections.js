import React from 'react';
import {Link} from 'react-router-dom';
import './room-sections.css'
import ComingSoonNav from '../ComingSoonNav/ComingSoonNav';


class RoomSelections extends React.Component {
    render() {
        return (
            <>
            <ComingSoonNav/>
              <section>
                 <header>
                   <h2>Rooms</h2>
                 </header>
                 <div className="row">
                  <div className="column">
                    <div className="card">
                      <div className="img-container">
                        <Link
                            className="living-room-link"
                            to="/living-room">
                        <img src="https://i.imgur.com/11moz3p.jpg" alt="living-room"/>
                        </Link> 
                        </div>
                        <div className="container">
                          <h4><b>Living Room</b></h4>
                        </div>
                    </div>
                  </div>

                  <div className="column">
                    <div class="card">
                     <div className="img-container">
                    <Link
                        className="kitchen-link"
                         to="/kitchen">
                        <img src="https://i.imgur.com/80cUoCD.jpg" alt="kitchen" style={{width:300}}/>
                        </Link>
                        </div> 
                        <div className="container">
                          <h4><b>Kitchen</b></h4>
                        </div>
                    </div>
                  </div>

                 <div className="column">
                   <div className="card">
                    <div className="img-container">
                      <Link
                       className="bedroom-link"
                       to="/master-bedroom">
                        <img src="https://i.imgur.com/2hBRXBH.jpg" alt="bedroom" style={{width:300}}/>
                       </Link>
                      </div> 
                      <div className="container">
                          <h4><b>Master Bedroom</b></h4>
                      </div>
                   </div>
                 </div>

                 <div className="column">
                  <div className="card">
                    <div className="img-container">
                      <Link
                        className="bathroom-link"
                        to="/master-bathroom">
                        <img src="https://i.imgur.com/Qw1vkDZ.jpg" alt="bathroom" style={{width:300}}/>
                       </Link> 
                      </div>
                      <div className="container">
                          <h4><b>Master Bathroom</b></h4>
                      </div>
                  </div>
                </div>
              </div>
            </section>

             <section>
                <header>
                   <h2>Additional</h2>
                </header>
                <div className="row">
                  <div className="column">
                    <div className="card">
                      <div className="img-container">
                        <Link
                         className="office-link"
                         to="/office">
                         <img src="https://i.imgur.com/Px5BVMu.jpg" alt="office" style={{width:300}}/>
                         </Link> 
                        </div>
                        <div className="container">
                          <h4><b>Office</b></h4>
                        </div>
                    </div>
                  </div>
                 <div className="column">
                    <div className="card">
                    <div className="img-container">
                    <Link
                        className="bonus-room-link"
                         to="/bonus-room">
                        <img src="https://i.imgur.com/JHIJNwm.jpg" alt="bonus-room"/>
                        </Link> 
                        </div>
                        <div className="container">
                          <h4><b>Bonus Room</b></h4>
                        </div>
                    </div>
                 </div>
                 <div className="column">
                   <div className="card">
                     <div className="img-container">
                      <Link
                        className="mud-laundry-link"
                        to="/mud-laundry-room">
                        <img src="https://i.imgur.com/a6xKJJ1.jpg" alt="mud-laundry-room" style={{width:300}}/>
                       </Link>
                       </div> 
                       <div className="container">
                          <h4><b>Mud + Laundry Room</b></h4>
                        </div>
                   </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="img-container">
                      <Link
                       className="basement-link"
                        to="/basement">
                        <img src="https://i.imgur.com/BhGE49P.jpg" alt="basement" style={{width:300}}/>
                       </Link>
                       </div> 
                       <div className="container">
                          <h4><b>Basement</b></h4>
                        </div>
                  </div>
                </div>
               </div>
             </section>
          </>
        )
    }
}

export default RoomSelections;