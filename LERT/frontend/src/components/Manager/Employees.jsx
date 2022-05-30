import { useState, useEffect, Fragment } from "react";
import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Search, FilterList } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

import { ReadRowEmployees } from "../EditFields/ReadRowEmployees";
import { deleteEmployee } from "../../actions/Manager/employee";

const useStyles = makeStyles((theme) => ({
    root: {
        borderColor: "#fff",
        borderWidth: 2,
    },
    focused: {
        borderColor: "#0062ff",
        borderWidth: 2,
        transition: "border-color 0.2s ease-in-out",
    },
}));

export const Employees = () => {
    const classes = useStyles();
    // const [displayModal, setDisplayModal] = useState(false);

    const [record, setRecord] = useState({
        type: "",
        band: "",
        rate: "",
        country: "",
        dateStart: "",
        dateFinish: "",
    });

    const axios = require("axios").default;
    const [typeData, setTypeData] = useState([]);
    const URL = "http://localhost:3000/getEmployees";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/getEmployees",
            responseType: "json",
        }).then(function (response) {
            setTypeData(response.data);
        });
    };

    const deleteRecord = async (e, row) => {
        console.log(row.employee_id);
        deleteEmployee(row.employee_id);
        fetchData();
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "space-between",
                    mb: "15px",
                    height: "115px",
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        fontWeight: "600",
                    }}
                >
                    All Employees
                </Typography>
                <Paper
                    component="form"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        boxShadow: "none",
                    }}
                >
                    <InputBase
                        sx={{
                            flex: 1,
                            height: 1,
                        }}
                        classes={{
                            root: classes.root,
                            focused: classes.focused,
                        }}
                        placeholder="Search"
                        startAdornment={
                            <InputAdornment position="start">
                                <Search sx={{ ml: "10px" }} />
                            </InputAdornment>
                        }
                    />

                    <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                    />
                    <IconButton sx={{ p: "10px" }} aria-label="directions">
                        <FilterList />
                    </IconButton>
                </Paper>
            </Box>
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
                            <TableCell align="left">Actions</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Country Origin</TableCell>
                            <TableCell align="left">ICA</TableCell>
                            <TableCell align="left">
                                Country Residence
                            </TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Band</TableCell>
                            <TableCell align="left">Squad</TableCell>
                            <TableCell align="left">Date Start</TableCell>
                            <TableCell align="left">Date Finish</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {typeData.map((row) => (
                            <TableRow
                                key={row.employee_id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <Fragment>
                                    <ReadRowEmployees
                                        row={row}
                                        deleteRecord={deleteRecord}
                                    />
                                </Fragment>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
export default Employees;
