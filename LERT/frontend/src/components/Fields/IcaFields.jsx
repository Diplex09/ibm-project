import { useState } from "react";
import {
    Box,
    InputAdornment,
    Typography,
    TextField,
    Button,
    Paper,
} from "@mui/material";
import esLocale from 'date-fns/locale/es';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
    AttachMoney,
    EmailOutlined,
    PublicOutlined,
    ArrowForwardOutlined,
} from "@mui/icons-material";

import { postNewHour } from "../../actions/OP Manager/extraHours";

export const HourFields = ({ fetchData }) => {

    const [dateStart, setDateStart] = useState(
        new Date().toLocaleDateString('es')
    );
    const [dateFinish, setDateFinish] = useState(
        new Date().toLocaleDateString('es')
    );
    const [record, setRecord] = useState({
        id_ica: "",
        ica_code: "",
        ica_core: "",
        year: "",
        id_planning: "",
        ica_owner: "",
        budget: "",
        country: "",
        status: "",
        depto: "",
        frequency_bill: "",
        cc: "",
        city_name_req: "",
        division: "",
        major: "",
        minor: "",
        leru: "",
        description: "",
        id_type: "",
        nec: "",
        total_plus_taxes: "",
        start_Date: "",
        end_date: "",
        cty_name_perf: "",
        R_Cty_Perf: "",
        total_billing: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        postNewHour(record)
            .then(fetchData());
    };

    return (
        <Paper>
            <Typography
                component="h2"
                variant="h5"
                sx={{
                    fontWeight: "600",
                    textAlign: "center",
                }}
            >
                Insert ICA
            </Typography>
            <Box
                sx={{
                    marginTop: "1rem",
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
                            setRecord({ ...record, type: e.target.value });
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
                        type="number"
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
                        type="number"
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
                            setRecord({
                                ...record,
                                country: e.target.value,
                            });
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
                    <LocalizationProvider dateAdapter={AdapterDateFns}adapterLocale={esLocale}
                    >
                        <DatePicker
                            label="Begin"
                            mask='__/__/____'
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
                                setRecord({ ...record, dateStart: newDate });
                            }}
                        />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDateFns}adapterLocale={esLocale}
                    >
                        <DatePicker
                            label="End"
                            mask='__/__/____'
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
                                setRecord({ ...record, dateFinish: newDate });
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

export default HourFields;