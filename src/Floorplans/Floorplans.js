import React from 'react';
import './floorplans.css'
import DemoNav from '../DemoNav/DemoNav';
import NoteButton from '../NoteButton/NoteButton';

class Floorplans extends React.Component {
    render() {
        return (
            <>
            <DemoNav/>
              <section>
                 <header>
                   <h2>Craftsmen Floorplans</h2>
                 </header>
                 <div className="row">
                  <div className="column">
                    <div className="card">
                    <a href="https://bit.ly/2oL0Jr2" target="_blank" rel="noopener noreferrer">
                        <img src="https://bit.ly/32XOnzx" alt="floorplan" style={{width:300}}/>
                        </a> 
                        <div className="container">
                        <h4>Contemporary Craftsman with Bonus Over Garage</h4>
                        <NoteButton/>
                        </div>
                    </div>
                  </div>

                  <div className="column">
                    <div class="card">
                    <a href="https://bit.ly/2LIS9qN" target="_blank" rel="noopener noreferrer">
                        <img src="https://bit.ly/2Y9acgq" alt="floorplan" style={{width:300}}/>
                        </a> 
                        <div className="container">     
                        <h4>Exceptional Craftsman House Plan</h4>
                           <NoteButton/>
                        </div>
                    </div>
                  </div>

                 <div class="column">
                   <div class="card">
                   <a href="https://bit.ly/2LJ2aEm" target="_blank" rel="noopener noreferrer">
                        <img src="https://bit.ly/2Zfc43P" alt="floorplan" style={{width:300}}/>
                        </a> 
                        <div className="container">     
                        <h4>New American House Plan</h4>
                        <NoteButton/>
                      </div>
                   </div>
                 </div>

                 <div class="column">
                  <div class="card">
                  <a href="https://bit.ly/2JVUpcs" target="_blank" rel="noopener noreferrer">
                        <img src="https://bit.ly/2yhAiPb" alt="floorplan" style={{width:300}}/>
                    </a> 
                        <div className="container">     
                        <h4>Rugged Craftsman House Plan</h4>
                        <NoteButton/>
                    </div>
                  </div>
                </div>
              </div>
            </section>

             <section>
                <header>
                   <h2>Modern Farmhouse Floorplans</h2>
                </header>
                <div class="row">
                  <div class="column">
                    <div class="card">
                    <a href="https://bit.ly/2K5VrkP" target="_blank" rel="noopener noreferrer">
                        <img src="https://bit.ly/2GuSLfG" alt="floorplan" style={{width:300}}/>
                    </a> 
                        <div className="container">     
                        <h4>Exclusive Farmhouse</h4>
                        <NoteButton/>
                        </div>
                    </div>
                  </div>
                 <div class="column">
                    <div class="card">
                    <a href="https://bit.ly/2yl88Tb" target="_blank" rel="noopener noreferrer">
                        <img src="https://bit.ly/2JWV65e" alt="floorplan" style={{width:300}}/>
                    </a>
                        <div className="container">     
                        <h4>Flexible One-Story New American House Plan</h4>
                           <NoteButton/>
                        </div>
                    </div>
                 </div>
                 <div class="column">
                   <div class="card">
                    <a href="https://bit.ly/2MjCg9U" target="_blank" rel="noopener noreferrer">
                        <img src="https://bit.ly/2OjNDRT" alt="floorplan" style={{width:300}}/>
                    </a>
                        <div className="container">     
                        <h4>Bright and Open Modern Farmhouse</h4>
                        <NoteButton/>
                        </div>
                   </div>
                </div>
                <div class="column">
                  <div class="card">
                  <a href="https://bit.ly/2LKBC5G" target="_blank" rel="noopener noreferrer">
                        <img src="https://bit.ly/2MgdFmk" alt="floorplan" style={{width:300}}/>
                    </a>
                        <div className="container">     
                        <h4>Rustic Farmhouse</h4>
                        <NoteButton/>
                        </div>
                  </div>
                </div>
               </div>
             </section>
          </>
        )
    }
}

export default Floorplans;