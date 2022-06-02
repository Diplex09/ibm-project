import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { Search, FilterList } from "@mui/icons-material";
import { makeStyles, styled } from "@material-ui/core/styles";

import { NewExpenseField } from "../Fields/NewExpenseField";

const createData = (
    email,
    type,
    cost,
    date,
    ica,
    icaManager,
    administrator,
    comment
) => {
    return { email, type, cost, date, ica, icaManager, administrator, comment };
};

const rows = [...Array(7)].map((e, index) =>
    createData(
        "luisalonsomg@ibm.com",
        "Course",
        "100",
        "2022-02-10",
        "781L2355",
        "luisalonsomg@ibm.com",
        "luisalonsomg@ibm.com",
        "Test comment"
    )
);

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
            <NewExpenseField />
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

                <Divider
                    sx={{ height: 1, m: 0.5, width: "10rem" }}
                    orientation="horizontal"
                />

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">EMPLOYEE EMAIl</TableCell>
                            <TableCell align="left">TYPE</TableCell>
                            <TableCell align="left">COST</TableCell>
                            <TableCell align="left">DATE</TableCell>
                            <TableCell align="left">ICA</TableCell>
                            <TableCell align="left">ICA MANAGER</TableCell>
                            <TableCell align="left">ADMINISTRATOR</TableCell>
                            <TableCell align="left">COMMENT</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">{row.cost}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.ica}</TableCell>
                                <TableCell align="left">
                                    {row.icaManager}
                                </TableCell>
                                <TableCell align="left">
                                    {row.administrator}
                                </TableCell>
                                <TableCell align="left">
                                    {row.comment}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
