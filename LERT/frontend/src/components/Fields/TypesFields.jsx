import React, { useState, useEffect } from "react";
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
} from "@mui/icons-material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const TypesFields = () => {
    const [value, setValue] = React.useState(null);

    const [typeData, getTypeData] = useState([]);
    const URL = "http://localhost:3000/getTypes";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(URL)
            .then((res) => res.json())

            .then((response) => {
                console.log(response);
                getTypeData(response);
            });
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
                />

                <LocalizationProvider
                    marginRight="50rem"
                    dateAdapter={AdapterDateFns}
                >
                    <DatePicker
                        label="Begin"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                sx={{
                                    marginTop: "2rem",
                                    marginLeft: "15rem",
                                    marginRight: "9.8rem",
                                    width: "18rem",
                                    border: "0",
                                }}
                                {...params}
                            />
                        )}
                    />
                </LocalizationProvider>

                <LocalizationProvider
                    marginRight="50rem"
                    dateAdapter={AdapterDateFns}
                >
                    <DatePicker
                        label="End"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
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
                    >
                        Submit
                    </Button>
                </Box>
            </Box>

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
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">
                                    {row.country}
                                </TableCell>
                                <TableCell align="left">{row.band}</TableCell>
                                <TableCell align="left">{row.rate}</TableCell>
                                <TableCell align="left">
                                    {row.date_to_start}
                                </TableCell>
                                <TableCell align="left">
                                    {row.date_to_finish}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TypesFields;
