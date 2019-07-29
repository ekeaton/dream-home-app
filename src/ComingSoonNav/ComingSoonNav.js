import React from 'react';
import {Link} from 'react-router-dom';
import SignUpModal from '../SignUpModal/SignUpModal'
import './coming-soon-nav.css';


class ComingSoonNav extends React.Component {
  state = {
    showModal: false
  }
  handleOpenModal = () => {
    this.setState({ showModal: true })
  }
  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
        render () {
        return (
          <>
            <nav className="demo-nav-container">
              <div className="demo-logo-container">
                 <Link
                  className="nav__link"
                  to="/"
                  rel="noopener noreferrer">
                   <img className="dream-home-logo" src="https://i.imgur.com/GylZ3c7.png" alt="dream-home logo"/>
                 </Link>
              </div>

             <div className="demo-nav">
               <Link to="#" className="demo-nav-link" onClick={this.handleOpenModal}>Sign Up</Link>
               <Link to="/demo" className="demo-nav-link">Demo</Link>
               <Link to="/room-selections" className="demo-nav-link">Coming Soon</Link>
             </div>
            </nav>
            <SignUpModal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            handleCloseModal={this.handleCloseModal}
            />
        </>
         )
     }
    }

export default ComingSoonNav;