import { useState, useEffect } from "react";
import { Box, InputAdornment, TextField, Button, Paper } from "@mui/material";
import { es } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
    AttachMoney,
    EmailOutlined,
    PublicOutlined,
    ArrowForwardOutlined,
} from "@mui/icons-material";

import { postNewType } from "../../actions/OP Manager/types";

export const TypesFields = ({ fetchTypeData }) => {
    const locale = "es-MX";
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const [dateStart, setDateStart] = useState(new Date());
    const [dateFinish, setDateFinish] = useState(new Date());

    //Variables para textfields
    const [record, setRecord] = useState({
        name: "",
        band: "",
        rate: "",
        country: "",
        date_to_start: "",
        date_to_finish: "",
    });

    const axios = require("axios").default;
    const [typeData, setTypeData] = useState([]);
    const URL = "https://lert-api.mybluemix.net/getTypes";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "https://lert-api.mybluemix.net/getTypes",
            responseType: "json",
        }).then(function (response) {
            setTypeData(response.data);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        postNewType(record).then(fetchData());
    };

    return (
        <Paper>
            <Box
                sx={{
                    marginBottom: "1rem",
                    padding: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "1.5rem",
                    }}
                >
                    <TextField
                        sx={{ width: "18rem" }}
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
                            setRecord({ ...record, name: e.target.value });
                        }}
                    />

                    <TextField
                        sx={{ width: "18rem" }}
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
                        sx={{ width: "18rem" }}
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
                        sx={{ width: "18rem" }}
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
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        mb: "1rem",
                        alignItems: "center",
                    }}
                >
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={es}
                    >
                        <DatePicker
                            label="Begin"
                            inputFormat="dd/MM/yyyy"
                            renderInput={(params) => (
                                <TextField
                                    sx={{
                                        width: "18rem",
                                        border: "0",
                                    }}
                                    {...params}
                                />
                            )}
                            value={dateStart}
                            onChange={(newDate) => {
                                setDateStart(newDate);
                                setRecord({
                                    ...record,
                                    date_to_start: newDate,
                                });
                            }}
                        />

                        <DatePicker
                            label="End"
                            inputFormat="dd/MM/yyyy"
                            renderInput={(params) => (
                                <TextField
                                    sx={{
                                        width: "18rem",
                                        border: "0",
                                    }}
                                    {...params}
                                />
                            )}
                            value={dateFinish}
                            onChange={(newDate) => {
                                setDateFinish(newDate);
                                setRecord({
                                    ...record,
                                    date_to_finish: newDate,
                                });
                            }}
                        />
                    </LocalizationProvider>

                    <Button
                        variant="contained"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "none",
                            borderRadius: "0px",
                            width: "12rem",
                            height: "40px",
                            fontSize: "15px",
                            fontWeight: "400",
                            bgcolor: "#0062ff",
                            ":hover": {
                                bgcolor: "#0255DA",
                            },
                        }}
                        onClick={handleSubmit}
                    >
                        Submit <ArrowForwardOutlined />
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default TypesFields;

// export function postNewType(record) {
//     const axios = require("axios").default;
//     console.log(record);
//     axios
//         .post("https://lert-api.mybluemix.net/newPostType", {
//             name: record.type,
//             country: record.country,
//             band: record.band,
//             rate: record.rate,
//             date_to_start: record.dateStart,
//             date_to_finish: record.dateFinish,
//         })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

export function deleteType(id) {
    const axios = require("axios").default;
    axios
        .delete(`https://lert-api.mybluemix.net/deleteTypes/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function updateType(id, editRecord) {
    const axios = require("axios").default;
    axios
        .put(`https://lert-api.mybluemix.net/updateTypes/${id}`, {
            name: editRecord.type,
            country: editRecord.country,
            band: editRecord.band,
            rate: editRecord.rate,
            date_to_start: editRecord.dateStart,
            date_to_finish: editRecord.dateFinish,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
