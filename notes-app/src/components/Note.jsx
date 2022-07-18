import { MdDeleteForever } from "react-icons/md";
import React, { useEffect, useState } from "react";
import NoteModal from "./NoteModal";
const Note = ({ id, title, text, date, handleDeleteNote }) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        setData({ title, text, date });
    }, []);

    return (
        <>
            <div
                className="note"
                onClick={(e) => {
                    if (e.target.localName !== "path") setOpen(true);
                }}
            >
                <span>{data.title}</span>
                <span>{data.text}</span>
                <div className="note-footer">
                    <small> {data.date} </small>
                    <MdDeleteForever
                        onClick={() => {
                            window.confirm("Are you sure you want to delete your note?") &&
                                handleDeleteNote(id);
                        }}
                        className="delete-icon"
                        size="1.3em"
                    />
                </div>
            </div>
            {open && (
                <NoteModal
                    ifOpen={open}
                    close={() => setOpen(false)}
                    data={data}
                    updateNote={(data) => setData(data)}//{text,title,date}
                />
            )}
        </>
    );
};

export default Note;
