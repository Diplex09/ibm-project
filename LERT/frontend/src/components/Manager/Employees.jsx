import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
} from "@mui/material";
import { Search, FilterList } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

const createData = (name, email, country, ica, band, type, status) => {
    return { name, email, country, ica, band, type, status };
};

const rows = [...Array(5)].map((e, index) =>
    createData(
        "Nombre",
        "luisalonsomg@ibm.com",
        "Mexico",
        "999AA000",
        "7",
        "CIO IBM SP",
        "Active"
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

export const Employees = () => {
    const classes = useStyles();

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
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Country</TableCell>
                            <TableCell align="left">ICA</TableCell>
                            <TableCell align="left">Band</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">
                                    {row.country}
                                </TableCell>
                                <TableCell align="left">{row.ica}</TableCell>
                                <TableCell align="left">{row.band}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
