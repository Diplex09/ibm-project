import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    TableContainer,
    Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

import { Search, FilterList } from "@mui/icons-material";
import { makeStyles, styled } from "@material-ui/core/styles";

import { TableInfo } from "../reusable/TableInfo";
import { NewExpenseField } from "../Fields/NewExpenseField";
import { deleteExpense } from "../../actions/Manager/allExpenses";
import { updateExpense } from "../../actions/Manager/allExpenses";

import { ReadRowExpenses } from "../EditFields/ReadRowExpenses";
import { EditRowExpenses } from "../EditFields/EditRowExpenses";

const columns = [
    "Actions",
    "Employee Mail",
    "Type",
    "Cost",
    "Date",
    "ICA",
    "ICA MANAGER",
    "ADMINISTRATOR",
    "COMMENT",
];

const initialRecord = {
    mail: "",
    date_limit: "",
    cost: "",
    comment: "",
    ica_id: "",
    type_id: "",
    ica_manager: "",
    administrator: "",
};

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export const ExpensesMg = () => {
    const classes = useStyles();
    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/getExpenses",
            responseType: "json",
        }).then((response) => {
            setTypeData(response.data);
        });
    };

    return (
        <>
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    fontWeight: "600",
                    fontSize: 25,
                    marginBottom: "1rem",
                }}
            >
                Add New Expense
            </Typography>
            <NewExpenseField fetchData={fetchData} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "space-between",
                    mb: "15px",
                    height: "50px",
                }}
            >
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
            <TableContainer>
                <Typography
                    sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                        padding: "5px 16px",
                        paddingTop: "1rem",
                        textTransform: "uppercase",
                    }}
                >
                    All Expenses
                </Typography>

                <TableInfo
                    columns={columns}
                    fetchData={fetchData}
                    typeData={typeData}
                    initialRecord={initialRecord}
                    ReadComponent={(props) => <ReadRowExpenses {...props} />}
                    EditComponent={(props) => <EditRowExpenses {...props} />}
                    updateItem={updateExpense}
                    deleteItem={deleteExpense}
                />
            </TableContainer>
        </>
    );
};
