import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleText = (event) => {
        if (characterLimit - event.target.value.length >= 0)
            setNoteText(event.target.value);
    };

    const handleTitle = (event) => {
        setNoteTitle(event.target.value);
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
            handleAddNote(noteTitle, noteText);
            setNoteText("");
            setNoteTitle("");
        }
        else if (noteText.trim().length > 0 && noteTitle.trim().length === 0) {
            handleAddNote(noteText);
            setNoteText("");
        }

    }

    return (<div className="note new">
        <textarea
            rows="1"
            cols="10"
            placeholder="Type to add a title..."
            value={noteTitle}
            onChange={handleTitle}
        ></textarea>
        <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            value={noteText}
            onChange={handleText}
        ></textarea>

        <div className="note-footer">
            <small>{characterLimit - noteText.length} remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
    );
};


export default AddNote;