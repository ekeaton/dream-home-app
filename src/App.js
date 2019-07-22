import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNav from './MainNav/MainNav'
import HomePage from './HomePage/HomePage';
import SignUp from './SignUp/SignUp';
import Footer from './Footer/Footer';
import AddVision from './AddVision/AddVision';
import RoomSelections from './RoomSelections/RoomSelections';
import LivingRoom from './Rooms/LivingRoom';
import Kitchen from './Rooms/Kitchen';
import MasterBedroom from './Rooms/MasterBedroom'
import GuestRoom from './Rooms/GuestRoom';
import KidsRoom from './Rooms/KidsRoom';
import MasterBathroom from './Rooms/MasterBathroom';
import GuestBathroom from './Rooms/GuestBathroom';
import KidsBathroom from './Rooms/KidsBathroom';
import Office from './Rooms/Office';
import BonusRoom from './Rooms/BonusRoom';
import MudLaundry from './Rooms/MudLaundry';
import Basement from './Rooms/Basement';
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
        path ="/add-vision"
        component={AddVision} />

     <Route
        path="/room-selections"
        component={RoomSelections} />
    <Route
        path="/living-room"
        component={LivingRoom}/>
    <Route
        path="/kitchen"
        component={Kitchen}/>
     <Route
        path="/master-bedroom"
        component={MasterBedroom}/>
     <Route
        path="/guest-bedroom"
        component={GuestRoom}/>
     <Route
        path="/kids-bedroom"
        component={KidsRoom}/>
     <Route
        path="/master-bathroom"
        component={MasterBathroom}/>
     <Route
        path="/guest-bathroom"
        component={GuestBathroom}/>
     <Route
        path="/kids-bathroom"
        component={KidsBathroom}/>
    <Route
        path="/office"
        component={Office}/>
     <Route
        path="/bonus-room"
        component={BonusRoom}/>
     <Route
        path="/mud-laundry-room"
        component={MudLaundry}/>
     <Route
        path="/basement"
        component={Basement}/>
      </Switch>
      </main>
      <Footer />
    </div>
  );
 }
}
export default App;
