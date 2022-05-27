import { useState } from "react";
import {
    Box,
    InputAdornment,
    Typography,
    TextField,
    Button,
    Paper,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
    AttachMoney,
    EmailOutlined,
    Send,
    PublicOutlined,
} from "@mui/icons-material";

import { postNewHour } from "../../actions/OP Manager/extraHours";

export const HourFields = ({ fetchData }) => {
    const [dateStart, setDateStart] = useState(
        new Date().toLocaleDateString("fr-FR")
    );
    const [dateFinish, setDateFinish] = useState(
        new Date().toLocaleDateString("fr-FR")
    );
    const [record, setRecord] = useState({
        type: "",
        band: "",
        rate: "",
        country: "",
        dateStart: "",
        dateFinish: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        postNewHour(record);
        fetchData();
    };

    return (
        <>
            <Paper>
                <Box
                    sx={{
                        marginTop: "1rem",
                        marginBottom: "2rem",
                    }}
                >
                    <Typography
                        sx={{
                            paddingTop: "1.5rem",
                            marginBottom: "2.5rem",
                            textAlign: "center",
                            fontWeight: "1000",
                            fontSize: "1.5rem",
                        }}
                    >
                        INSERT EXTRA HOUR
                    </Typography>

                    <TextField
                        sx={{
                            marginRight: "10rem",
                            marginLeft: "3rem",
                            width: "18rem",
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlined size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="TYPE"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, type: e.target.value });
                        }}
                    />

                    <TextField
                        sx={{ width: "18rem", marginRight: "9.8rem" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoney size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="BAND NUMBER"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, band: e.target.value });
                        }}
                    />

                    <TextField
                        sx={{ width: "18rem", marginRight: "3rem" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoney size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="RATE"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, rate: e.target.value });
                        }}
                    />

                    <TextField
                        sx={{
                            marginTop: "2rem",
                            marginRight: "10rem",
                            marginLeft: "3rem",
                            width: "18rem",
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PublicOutlined size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic"
                        label="COUNTRY"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, country: e.target.value });
                        }}
                    />

                    <LocalizationProvider
                        marginRight="50rem"
                        dateAdapter={AdapterDateFns}
                    >
                        <DatePicker
                            label="Begin"
                            renderInput={(params) => (
                                <TextField
                                    sx={{
                                        marginTop: "2rem",
                                        marginRight: "9.8rem",
                                        width: "18rem",
                                        border: "0",
                                    }}
                                    {...params}
                                />
                            )}
                            value={dateStart}
                            onChange={(date) => {
                                let d = new Date(date).toLocaleDateString(
                                    "fr-FR"
                                );
                                setDateStart(d);
                                setRecord({ ...record, dateStart: d });
                            }}
                        />
                    </LocalizationProvider>

                    <LocalizationProvider
                        marginRight="50rem"
                        dateAdapter={AdapterDateFns}
                    >
                        <DatePicker
                            label="End"
                            renderInput={(params) => (
                                <TextField
                                    sx={{
                                        marginTop: "2rem",

                                        width: "18rem",
                                        border: "0",
                                    }}
                                    {...params}
                                />
                            )}
                            value={dateFinish}
                            onChange={(date) => {
                                let dF = new Date(date).toLocaleDateString(
                                    "fr-FR"
                                );
                                setDateFinish(dF);
                                setRecord({ ...record, dateFinish: dF });
                            }}
                        />
                    </LocalizationProvider>

                    <Box
                        sx={{
                            textAlign: "center",
                            marginTop: "2rem",
                            paddingBottom: "1rem",
                        }}
                    >
                        <Button
                            sx={{
                                width: "500",
                                borderRadius: "0",
                                bgcolor: "#0062ff",
                                ":hover": {
                                    bgcolor: "#0255DA",
                                },
                            }}
                            variant="contained"
                            endIcon={<Send />}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
};

export default HourFields;
