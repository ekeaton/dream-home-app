import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
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
import Floorplans from './Floorplans/Floorplans';
import AddNote from './AddNote/AddNote';
import FloorplanNotes from './FloorplanNotes/FloorplanNotes';
import './App.css';
import config from './config';
import NoteContext from './NoteContext';
import ErrorBoundary from "./ErrorBoundary";
import SignUpModal from './SignUpModal/SignUpModal';



class App extends React.Component {
   state = { 
      notes: [],
    }

    componentDidMount(){
		const noteRes = fetch(`${config.API_ENDPOINT}/notes`, {
				method:'GET',
			});
	
		
		Promise.all([noteRes])
		.then (responses => Promise.all(responses.map(res => res.json())))

		Promise.all([
			fetch(`${config.API_ENDPOINT}/notes`)
		])
		.then (([noteRes]) => {
			return Promise.all([
				noteRes.json()
				])
		})
		 
		.then(([notes]) => {
			this.setState({ notes })
		})
	}

	
  handleDeleteNote = id => {
    let updatedNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: updatedNotes,
    
    });
  };



  render() {
   const value = {
   notes: this.state.notes,	
   deleteNote: this.handleDeleteNote,
   addNote: this.handleAddNote,

   }
  return (
   <NoteContext.Provider value={value}>
    <div className="App">
      <main>
      <Switch>
      <ErrorBoundary>
      <Route
        exact path="/"
        component={HomePage} />
      
      <Route 
        exact path ="/signup-modal"
        component={SignUpModal} />
    
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

      <Route
        path="/demo"
        component={Floorplans}/>
      
      <Route
        path="/add-note"
        component={AddNote}/>
      
      <Route
        path="/floorplan-notes"
        component={FloorplanNotes}/>
      </ErrorBoundary>
      </Switch>
      </main>
      <Footer />
    </div>
    </NoteContext.Provider>
  );
 }
}
export default App;
