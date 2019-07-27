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
        <header>
          <h1>Add Note</h1>
        </header>
        <section className="form-section">
        <div className="form-style-5">
        <form id="note-form"  className='note-form' onSubmit={this.noteSubmitHandle}>
        <label htmlFor="name">House Plan Name:</label>
           <input type="text" name="field1" required onChange={e => this.updateNoteName(e.target.value)}/>

         <div className="form-section">
         <label htmlFor="number_bedrooms"># of Bedrooms</label>
             <input type="number" min="1" max="10" required onChange={e => this.updateNoteBedrooms(e.target.value)}/>

        <label htmlFor="number_bedrooms"># of Bathrooms</label>
             <input type="number" min="1" max="10" required onChange={e => this.updateNoteBathrooms(e.target.value)}/>
        
        <label htmlFor="sq-ft">Sq Footage</label>
            <input type="number" onChange={e => this.updateNoteSqft(e.target.value)}/>


        <label htmlFor="note"><i>Note:</i></label>
            <textarea name="field3" placeholder="Note" onChange={e => this.updateNoteNote(e.target.value)}></textarea>
         </div>
        <button type="submit" className="create-btn">Submit</button>
        <button type="reset" className="res-btn">Reset</button>
       </form>
      </div>
   </section>
    </>
    )
}
}

export default AddNote;
