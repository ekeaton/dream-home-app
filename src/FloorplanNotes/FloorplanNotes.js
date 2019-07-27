import React from 'react'
import DemoNav from '../DemoNav/DemoNav';
import PropTypes from "prop-types";
import NoteContext from '../NoteContext'
import config from '../config';
import './floorplan-notes.css'




class FloorplanNotes extends React.Component {
    static defaultProps ={
        onDeleteNote: () => {},
      }
    static contextType = NoteContext;
    
      handleClickDelete = (id, e) => {
        console.log(e)
        e.preventDefault();
      
    
        fetch(`${config.API_ENDPOINT}/notes/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json"
          }
        })
          .then(res => {
            if (!res.ok) return res.json().then(error => Promise.reject(error));
            return null; //res.json();
          })
          .then(() => {
            this.context.deleteNote(id);
          })
          .catch(error => {
            console.error({ error });
          });
      };

      render() {
       
        return (
             <>
            <DemoNav/>
              <header>
                 <h1>Floorplan Notes</h1>
               </header>
                {this.context.notes.map(note => {
                    return (
                        <section key={note.id} className='card'>
                            <h2>{note.name}</h2>
                            <section className='container'>
                                <p># of bedrooms {note.bedrooms}</p>
                                <p># of bathrooms {note.bathrooms}</p>
                                <p>Sq ft: {note.sq_ft}</p>
                                  <p>Note:</p>
                                  <p>{note.note}</p>
                            </section>
                          <button
                              className="Remove-button"
                              type="button"
                              onClick={(e) => this.handleClickDelete(note.id , e)}
                              >
                              Remove
                               </button>
                           </section>
                    )
                })}
            </>
        )
      }   
    }

    FloorplanNotes.propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        bedrooms: PropTypes.number,
        bathrooms: PropTypes.number,
        sq_ft: PropTypes.number,
        note: PropTypes.string,
        onDeleteNote: PropTypes.func
      };
      
export default FloorplanNotes;
