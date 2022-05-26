import { useState } from "react";
import {
    Box,
    IconButton,
    ListItem,
    List,
    Typography,
    Paper,
    Modal,
    TextField,
    Button,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const FormEmployee = ({ closeModal }) => {
    const [dateStart, setDateStart] = useState(new Date());
    const [dateFinish, setDateFinish] = useState(new Date());

    return (
        <>
            <Modal
                sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    top: "5rem",
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
                            sx={{
                                paddingLeft: 5,
                                paddingTop: 3,
                                paddingBottom: 2,
                            }}
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

                                <LocalizationProvider
                                    marginRight="50rem"
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ width: "14rem" }}
                                                {...params}
                                            />
                                        )}
                                        value={dateStart}
                                        onChange={(date) => {
                                            const d = new Date(date);
                                            console.log(d);
                                            setDateStart(d);
                                        }}
                                    />
                                </LocalizationProvider>
                            </ListItem>
                            <ListItem>
                                <LocalizationProvider
                                    marginRight="50rem"
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DatePicker
                                        renderInput={(params) => (
                                            <TextField
                                                sx={{ width: "14rem" }}
                                                {...params}
                                            />
                                        )}
                                        value={dateFinish}
                                        onChange={(date) => {
                                            const dF = new Date(date);
                                            console.log(dF);
                                            setDateFinish(dF);
                                        }}
                                    />
                                </LocalizationProvider>
                            </ListItem>

                            <ListItem sx={{ paddingTop: 5 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginRight: 6,
                                        textTransform: "none",
                                        borderRadius: "4px",
                                        width: "14rem",
                                        height: "40px",
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        bgcolor: "#0062ff",
                                        ":hover": {
                                            bgcolor: "#0255DA",
                                        },
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginRight: 6,
                                        textTransform: "none",
                                        borderRadius: "4px",
                                        width: "14rem",
                                        height: "40px",
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        bgcolor: "#0062ff",
                                        ":hover": {
                                            bgcolor: "#0255DA",
                                        },
                                    }}
                                >
                                    Modify
                                </Button>
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
