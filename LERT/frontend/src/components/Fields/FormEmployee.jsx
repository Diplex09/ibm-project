import React from "react";
import {
    Box,
    IconButton,
    ListItem,
    List,
    Typography,
    Paper,
    Modal,
    TextField,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { useState, useEffect, Fragment } from "react";

export const FormEmployee = ({ closeModal }) => {
    return (
        <>
            <Modal
                sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    top: "10rem",
                    justifyContent: "center",
                    width: 700,
                }}
                open={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper>
                    <Box>
                        <Typography
                            sx={{ paddingLeft: 5, paddingTop: 3 }}
                            variant="h5"
                            component="h2"
                        >
                            Employee Information
                        </Typography>
                        <List sx={{ paddingLeft: 10, display: "inline-block" }}>
                            <ListItem>
                                <TextField
                                    sx={{ paddingRight: 6 }}
                                    required
                                    size="small"
                                    label="First Name"
                                    defaultValue="Hello World"
                                />

                                <TextField
                                    required
                                    size="small"
                                    label="LastName"
                                    defaultValue="Hello World"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    sx={{ paddingRight: 6 }}
                                    required
                                    size="small"
                                    label="Email"
                                    defaultValue="Hello World"
                                />

                                <TextField
                                    required
                                    size="small"
                                    label="Country from"
                                    defaultValue="Hello World"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    sx={{ paddingRight: 6 }}
                                    required
                                    size="small"
                                    label="ICA "
                                    defaultValue="Hello World"
                                />

                                <TextField
                                    required
                                    size="small"
                                    label="Country Working"
                                    defaultValue="Hello World"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    sx={{ paddingRight: 6 }}
                                    required
                                    size="small"
                                    label="Type"
                                    defaultValue="Hello World"
                                />

                                <TextField
                                    required
                                    size="small"
                                    label="Band"
                                    defaultValue="Hello World"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    sx={{ paddingRight: 6 }}
                                    required
                                    size="small"
                                    label="Squad"
                                    defaultValue="Hello World"
                                />

                                <TextField
                                    required
                                    size="small"
                                    label="Start Date"
                                    defaultValue="Hello World"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    required
                                    size="small"
                                    label="Finish Date"
                                    defaultValue="Hello World"
                                />
                            </ListItem>
                        </List>
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
