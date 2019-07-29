import React from 'react';
import {Link} from 'react-router-dom';
import SignUpModal from '../SignUpModal/SignUpModal'
import './main-nav.css';

class MainNav extends React.Component {

    state = {
        showModal: false
      }
      handleOpenModal = () => {
        this.setState({ showModal: true })
      }
      handleCloseModal = () => {
        this.setState({ showModal: false })
      }
    render() {
         // Return different navigation between home page and demo
        return (
            <>
            <nav className="main-nav-container">
              <Link
               className="nav__link"
               to="/"
               rel="noopener noreferrer">
            <img className="dream-home-logo-main" src="https://i.imgur.com/AUGtSqD.png" alt="dream-home logo"/>
             </Link>
  
          <div className="main-nav">
             <Link to="#" className="nav-link" onClick={this.handleOpenModal}>Sign Up</Link>
             <Link to="/demo" className="nav-link">Demo</Link>
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

export default MainNav;