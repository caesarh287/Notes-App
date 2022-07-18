import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Button, Input } from "@mui/material";
import { UpdateModal } from "./UpdateModal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const NoteModal = ({ ifOpen, close, data, updateNote }) => {
    const [info, setInfo] = useState({});
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(true);
    };
    useEffect(() => {
        setInfo(data);
    }, []);

    return (
        <Modal
            open={ifOpen}
            onClose={() => close()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {!edit ? (
                    <>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {info.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {info.text}
                        </Typography>
                        <Typography id="modal-modal-footer" sx={{ mt: 2 }}>
                            <small>{data.date}</small>
                            <Button onClick={handleEdit}>Edit</Button>
                        </Typography>
                    </>
                ) : (
                    <UpdateModal
                        data={data}
                        onUpdate={(update) => {
                            setEdit(false);
                            setInfo(update);
                            updateNote(update);
                        }}
                        closeEditModal={() => setEdit(false)}
                    />
                )}
            </Box>
        </Modal>
    );
};

export default NoteModal;
