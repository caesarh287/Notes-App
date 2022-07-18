import React, { useState, useEffect } from "react";

export const UpdateModal = ({ data, onUpdate, closeEditModal }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [info, setInfo] = useState({});
    useEffect(() => {
        setInfo(data);
    }, []);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}>
            <div>
                <label>Title: </label>
                <div>
                    <input
                        defaultValue={data.title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <label>Text: </label>
                <div>
                    <textarea
                        defaultValue={data.text}
                        onChange={(e) => setText(e.target.value ? e.target.value : data.text)}
                    ></textarea>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >
                <button
                    onClick={() =>
                        onUpdate({
                            title: title ? title : data.title,
                            text: text ? text : data.text,
                            date: info.date,
                        })
                    }
                >
                    Save changes
                </button>
                <button onClick={() => closeEditModal()}>Close</button>
            </div>
            <div>
                <small>{info.date}</small>
            </div>
        </div>
    );
};
