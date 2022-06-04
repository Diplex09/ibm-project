import { useState, useEffect } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Button,
    Grid,
    Box,
    TextField,
    Paper,
    IconButton,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

export const ExpenseForm = (fetch) => {
    const [textValue, setTextValue] = useState("");
    // const handleReset = () => setTextValue('');

    const validExpense = (e) => {
        e.preventDefault();
        postNewExpenseType(textValue);
        fetch.fetchData();
    };

    return (
        <Grid container spacing={2} sx={{ marginBottom: 5 }}>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    onChange={(e) => setTextValue(e.target.value)}
                    label={"Enter expense type"} //optional
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    onClick={validExpense}
                    variant="contained"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        textTransform: "none",
                        borderRadius: "0px",
                        width: "12rem",
                        height: "50px",
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
            </Grid>
        </Grid>
    );
};

export const ExpensesTable = () => {
    const axios = require("axios").default;
    const [expenseData, getExpenseData] = useState([]);
    // const URL = "http://localhost:3000/expensesTypes";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/expensesTypes",
            responseType: "json",
        }).then(function (response) {
            getExpenseData(response.data);
        });
    };

    const deleteExpenseTypeRecord = (e, row) => {
        e.preventDefault();
        deleteExpenseType(row.typeName);
        fetchData();
    };

    return (
        <>
            <ExpensesTypes />
            <ExpenseForm fetchData={fetchData} />
            <TableContainer
                component={Paper}
                sx={{
                    "& .MuiTableCell-head": {
                        color: "#0062ff",
                        textTransform: "uppercase",
                        fontWeight: "500",
                    },
                    display: "flex",
                    justifyContent: "center",
                    padding: "5px 20px",
                }}
            >
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Actions</TableCell>
                            <TableCell align="left">
                                Expense Type Name
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {expenseData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    <IconButton
                                        onClick={(e) =>
                                            deleteExpenseTypeRecord(e, row)
                                        }
                                    >
                                        <DeleteOutlined />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="left">
                                    {row.typeName}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export const ExpensesTypes = () => {
    return (
        <Box>
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    marginBottom: "3.5rem",
                    fontWeight: "300",
                    fontWeight: "600",
                    textAlign: "center",
                }}
            >
                New Type of Expense
            </Typography>
        </Box>
    );
};

export function postNewExpenseType(eName) {
    const axios = require("axios").default;
    axios
        .post("http://localhost:3000/newExpenseType", {
            name: eName,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function deleteExpenseType(name) {
    const axios = require("axios").default;
    axios
        .delete(`http://localhost:3000/delExpenseType/${name}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
