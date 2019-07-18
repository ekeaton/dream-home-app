import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNav from './MainNav/MainNav'
import HomePage from './HomePage/HomePage';
import SignUp from './SignUp/SignUp';
import Footer from './Footer/Footer';
import RoomSelections from './RoomSelections/RoomSelections';
import LivingRoom from './Rooms/LivingRoom';
import './App.css';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <MainNav/>
      <main>
      <Switch>
      <Route
        exact path="/"
        component={HomePage} />
      
      <Route 
        exact path ="/signup"
        component={SignUp} />

     <Route
        path="/room-selections"
        component={RoomSelections} />
    <Route
        path="/living-room"
        component={LivingRoom}/>
      </Switch>
      </main>
      <Footer />
    </div>
  );
 }
}
export default App;
