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

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { ReadRowHours } from "../EditFields/ReadRowHours";
import { HourFields } from "../Fields/HourFields";

export const ExtraHoursOP = () => {
    const [typeData, setTypeData] = useState([]);
    const axios = require("axios").default;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/getHours",
            responseType: "json",
        }).then(function (response) {
            setTypeData(response.data);
        });
    };

    return (
        <>
            <HourFields />
            <form>
                <Paper>
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
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <Fragment>
                                            <ReadRowHours row={row} />
                                        </Fragment>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </form>
        </>
    );
};

export default ExtraHoursOP;
