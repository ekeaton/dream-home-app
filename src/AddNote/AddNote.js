import React from 'react';
import DemoNav from '../DemoNav/DemoNav';
import NoteContext from '../NoteContext'
import config from '../config'
import './add-note.css';


class AddNote extends React.Component {

  static contextType = NoteContext;

   constructor(props){
       super(props);
       this.state = {
         name: " ",
         bedrooms: null,
         bathrooms: null,
         sq_ft: null,
         note: " "
       }
   }

   updateNoteName(name) {
       this.setState({name})
   }

   updateNoteBedrooms(bedrooms) {
      this.setState({bedrooms})
   }

   updateNoteBathrooms(bathrooms) {
      this.setState({bathrooms})
   }

   updateNoteSqft(sq_ft){
      this.setState({sq_ft})
   }

   updateNoteNote(note){
    this.setState({note})
 }

   noteSubmitHandle = e => {
    e.preventDefault();
    let { name, bedrooms, id, bathrooms, sq_ft, note } = this.state;
    const newNote = { name, bedrooms, bathrooms, sq_ft, note, id };
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "content-type": "application/json",
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong please try again later");
        }
        res.json().then(data => (window.location = `/floorplan-notes/${data.id}`));
        return;
      })
      .then(() => {
        this.setState({
            name: " ",
            bedrooms: null,
            bathrooms: null,
            sq_ft: null,
            note: " "
        });
        this.context.addNote(newNote);
      })
      .catch(error => {
        console.log(error);
      });
  };

  
  render() {
    return (
      <>
        <DemoNav/>
        <div className="form-style-10">
           <h1>Create Note</h1>
        <form onSubmit={this.noteSubmitHandle}>
          <div className="section">House Plan</div>
            <div className="inner-wrap">
              <label htmlFor="name">Name<input type="text" name="field1" required onChange={e => this.updateNoteName(e.target.value)}/></label>
            </div>

           <div className="section">Bedrooms</div>
             <div className="inner-wrap">
               <label htmlFor="number_bedrooms"># of rooms <input type="number" name="field3" required onChange={e => this.updateNoteBedrooms(e.target.value)}/></label>
             </div>

           <div className="section">Bathrooms</div>
              <div className="inner-wrap">
               <label htmlFor="number_bathrooms"># of bathrooms <input type="number" name="field5" required onChange={e => this.updateNoteBathrooms(e.target.value)} /></label>
              </div>

            <div className="section">Square ft</div>
               <div className="inner-wrap">
              <label htmlFor="sq-ft">Total<input type="number" name="field3" onChange={e => this.updateNoteSqft(e.target.value)}/></label>
              </div>

           <div className="section"><i>Note:</i></div>
             <div className="inner-wrap">
            <label><textarea name="field3" onChange={e => this.updateNoteNote(e.target.value)}/></label>
            </div>
          <div className="button-section">
            <input type="submit" name="create-note" />
          </div>
      </form>
     </div>
     </>
    )
}
}

export default AddNote;
