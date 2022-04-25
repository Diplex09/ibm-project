import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {
    List,
    Typography,
    Button,
    Input,
    Grid,
    Box,
    TextField,
    Paper,
    DataTable,
} from "@mui/material";
import React, { useState } from "react";
import data1 from "./dataTest";

export const ExpenseForm = () => {
    const [textValue, setTextValue] = useState("");

    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");

    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    onChange={onTextChange}
                    value={textValue}
                    label={"Enter expense type"} //optional
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    onClick={handleSubmit}
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
                >
                    Submit
                </Button>
                {/* <Button
                    onClick={handleReset}
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
                >
                    Reset
                </Button> */}
            </Grid>
        </Grid>
    );
};

export const ExpensesTable = () => {
    return (
        <TableContainer
            component={Paper}
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
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Expense Type Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data1.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">
                                {row.expenseTypeName}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export const ExpensesTypes = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
            }}
        >
            <Typography
                align="center"
                variant="h3"
                sx={{ marginBottom: "4.5rem", fontWeight: "300" }}
            >
                New Type of Expense
            </Typography>

            <ExpenseForm />
            <ExpensesTable />
        </Box>
    );
};
