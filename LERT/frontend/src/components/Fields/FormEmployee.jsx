import React from "react";
import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    Paper,
    Modal,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { useState, useEffect, Fragment } from "react";

export const FormEmployee = ({ closeModal }) => {
    return (
        <>
            <Modal
                open={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper>
                    <Box>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat
                            porttitor ligula.
                        </Typography>
                    </Box>
                    <IconButton onClick={() => closeModal(false)}>
                        <DeleteOutlined />
                    </IconButton>
                </Paper>
            </Modal>
        </>
    );
};

export default FormEmployee;
