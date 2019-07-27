import React from 'react';
import { Link } from 'react-router-dom';
import './note-button.css'

function NoteButton() {
    return(
        <Link
          className="add-note-link"
          to="/add-note">
         Add Note
     </Link> 
    )
}

export default NoteButton;

