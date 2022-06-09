import { useState } from "react";
import { Box, InputAdornment, TextField, Button, Paper } from "@mui/material";
import esLocale from "date-fns/locale/es";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { ArrowForwardOutlined, AttachMoney } from "@mui/icons-material";

import { postNewIca } from "../../actions/OP Manager/icas";

export const IcaFields = ({ fetchData }) => {
    const [dateStart, setDateStart] = useState(
        new Date().toLocaleDateString("es")
    );
    const [dateFinish, setDateFinish] = useState(
        new Date().toLocaleDateString("es")
    );
    const [record, setRecord] = useState({
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
        total_billing: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        postNewIca(record).then(fetchData());
    };

    return (
        <Paper>
            <Box
                sx={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    padding: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, 18rem)",
                        columnGap: "1rem",
                        rowGap: "1rem",
                        mb: "1.5rem",
                        justifyContent: "center",
                    }}
                >
                    <TextField
                        id="standard-basic"
                        label="ICA Code"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, ica_code: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="ICA Core"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, ica_core: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Year"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, year: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="ID Planning"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({
                                ...record,
                                id_planning: e.target.value,
                            });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="ICA Owner"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, ica_owner: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Budget"
                        variant="standard"
                        type="number"
                        onChange={(e) => {
                            setRecord({ ...record, budget: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Country"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, country: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Status"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, status: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Depto"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, depto: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Frequency Bill"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({
                                ...record,
                                frequency_bill: e.target.value,
                            });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="CC"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, cc: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="City Name Req"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({
                                ...record,
                                city_name_req: e.target.value,
                            });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Division"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, division: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Major"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, major: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Minor"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, minor: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Leru"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({ ...record, leru: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Description"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({
                                ...record,
                                description: e.target.value,
                            });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="ID Type"
                        variant="standard"
                        type="number"
                        onChange={(e) => {
                            setRecord({ ...record, id_type: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Nec"
                        variant="standard"
                        type="number"
                        onChange={(e) => {
                            setRecord({ ...record, nec: e.target.value });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Total Plus Taxes"
                        variant="standard"
                        type="number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoney size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) => {
                            setRecord({
                                ...record,
                                total_plus_taxes: e.target.value,
                            });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="City Name Perf"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({
                                ...record,
                                cty_name_perf: e.target.value,
                            });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="R Cty Perf"
                        variant="standard"
                        onChange={(e) => {
                            setRecord({
                                ...record,
                                R_Cty_Perf: e.target.value,
                            });
                        }}
                    />

                    <TextField
                        id="standard-basic"
                        label="Total Billing"
                        variant="standard"
                        type="number"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoney size="10rem" />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(e) => {
                            setRecord({
                                ...record,
                                total_billing: e.target.value,
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
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={esLocale}
                    >
                        <DatePicker
                            label="Begin"
                            mask="__/__/____"
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
                                setRecord({ ...record, start_Date: newDate });
                            }}
                        />
                    </LocalizationProvider>

                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={esLocale}
                    >
                        <DatePicker
                            label="End"
                            mask="__/__/____"
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
                                setRecord({ ...record, end_date: newDate });
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

export default IcaFields;
