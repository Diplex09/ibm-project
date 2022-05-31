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
    Button,
} from "@mui/material";
import { Search, FilterList, ArrowForwardOutlined } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

import { ReadRowEmployees } from "../EditFields/ReadRowEmployees";
import { AddFormEmployee } from "../Fields/AddFormEmployee";
import { deleteEmployee } from "../../actions/Manager/employee";
import { updateEmployee } from "../../actions/Manager/employee";

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
    const [displayModal, setDisplayModal] = useState(false);
    const [rowId, setRowId] = useState(null);

    const [record, setRecord] = useState({
        firstName: "",
        lastName: "",
        email: "",
        originCountry: "",
        ICA: "",
        currentCountry: "",
        type: "",
        band: "",
        squad: "",
        dateStart: "",
        dateFinish: "",
    });

    const [editRecord, setEditRecord] = useState({
        firstName: "",
        lastName: "",
        email: "",
        originCountry: "",
        ICA: "",
        currentCountry: "",
        type: "",
        band: "",
        squad: "",
        dateStart: "",
        dateFinish: "",
    });

    const handleEditRecord = (e, row) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        console.log(fieldName);
        const fieldValue = e.target.value;

        const newRecord = { ...editRecord };
        newRecord[fieldName] = fieldValue;

        setEditRecord(newRecord);
    };

    const handleEditClick = (e, row) => {
        e.preventDefault();
        setRowId(row.employee_id);

        const formValues = {
            firstName: row.employeeName,
            lastName: row.employeeLastName,
            email: row.mail,
            originCountry: row.countryOrigin,
            ICA: row.ICA_ID,
            currentCountry: row.countryResidence,
            type: row.type_id,
            band: row.band,
            squad: row.squad,
            dateStart: row.startDate,
            dateFinish: row.endDate,
        };

        setEditRecord(formValues);
    };

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

    const handleEditSave = (e, editRecord, row) => {
        e.preventDefault();
        console.log(editRecord);
        updateEmployee(row.employee_id, editRecord);
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

                <Button
                    variant="contained"
                    sx={{
                        marginTop: "2rem",
                        marginBottom: "2rem",
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
                    onClick={() => {
                        setDisplayModal(true);
                    }}
                >
                    Add Employee <ArrowForwardOutlined />
                </Button>
                {displayModal && (
                    <AddFormEmployee
                        closeModal={setDisplayModal}
                        record={record}
                        setRecord={setRecord}
                    />
                )}
                {/* <Paper
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
                </Paper> */}
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
                                        handleEditClick={handleEditClick}
                                        editRecord={editRecord}
                                        handleEditRecord={handleEditRecord}
                                        handleEditSave={handleEditSave}
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
