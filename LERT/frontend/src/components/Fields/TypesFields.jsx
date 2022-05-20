import { useState, useEffect, Fragment } from "react";
import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    TextField,
    Grid,
    Button,
    Paper,
} from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
    AttachMoney,
    EmailOutlined,
    CommentOutlined,
    Send,
    PublicOutlined,
    ModeEditOutlineOutlined,
    DeleteOutlined,
} from "@mui/icons-material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { set } from "date-fns";
import { ReadRowTypes } from "../EditFields/ReadRowTypes";
import { EditRowTypes } from "../EditFields/EditRowTypes";

export const TypesFields = () => {
    const [value, setValue] = useState(null);

    //Variables para textfields
    const [rowId, setRowId] = useState(null);
    const [type, setType] = useState("");
    const [band, setBand] = useState("");
    const [rate, setRate] = useState("");
    const [country, setCountry] = useState("");
    const [dateStart, setDateStart] = useState(
        new Date().toLocaleDateString("fr-FR")
    );
    const [dateFinish, setDateFinish] = useState(
        new Date().toLocaleDateString("fr-FR")
    );

    const axios = require("axios").default;
    const [typeData, setTypeData] = useState([]);
    const URL = "http://localhost:3000/getTypes";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/getTypes",
            responseType: "json",
        }).then(function (response) {
            setTypeData(response.data);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postNewType(type, band, rate, country, dateStart, dateFinish);
        await fetchData();
    };

    const handleEditClick = (e, row) => {
        e.preventDefault();
        setRowId(row.id);
    };

    const deleteRecord = (e, row) => {
        e.preventDefault();
        setRowId(row.id);
    };
    return (
        <>
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
                    ADD NEW TYPE
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
                        setType(e.target.value);
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
                        setBand(e.target.value);
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
                        setRate(e.target.value);
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
                        setCountry(e.target.value);
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
                            let d = new Date(date).toLocaleDateString("fr-FR");
                            setDateStart(d);
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
                            let dF = new Date(date).toLocaleDateString("fr-FR");
                            setDateFinish(dF);
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
            <form>
                <TableContainer
                    sx={{
                        "& .MuiTableCell-head": {
                            color: "#0062ff",
                            textTransform: "uppercase",
                            fontWeight: "500",
                        },
                        padding: "5px 20px",
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Actions</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell align="left">Country</TableCell>
                                <TableCell>Band</TableCell>
                                <TableCell>Rate</TableCell>
                                <TableCell>Date Start</TableCell>
                                <TableCell>Date Finish</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {typeData.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <Fragment>
                                        {rowId === row.id ? (
                                            <EditRowTypes />
                                        ) : (
                                            <ReadRowTypes
                                                row={row}
                                                handleEditClick={
                                                    handleEditClick
                                                }
                                            />
                                        )}
                                    </Fragment>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
        </>
    );
};

export default TypesFields;

export function postNewType(
    type,
    band,
    rate,
    country,
    date_start,
    date_finish
) {
    const axios = require("axios").default;
    axios
        .post("http://localhost:3000/newPostType", {
            name: type,
            country: country,
            band: band,
            rate: rate,
            date_to_start: date_start,
            date_to_finish: date_finish,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
