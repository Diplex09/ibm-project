import { List, Typography, Button } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";

export const Home = () => {
    const nombre = "Sebastián";
    return (
        <List>
            <Typography
                variant="h4"
                sx={{ marginBottom: "2rem", fontWeight: "600" }}
            >
                Hi, {nombre}!
            </Typography>
            <Typography
                variant="h3"
                sx={{ marginBottom: "8.5rem", fontWeight: "300" }}
            >
                Welcome to LERT <br /> Labor Expenses Recovery Tool
            </Typography>
            <Typography paragraph sx={{ fontSize: "25px" }}>
                Manage the accounts of the different roles
                <br />
                of the company in an easy way.
            </Typography>
            <Button
                variant="contained"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    textTransform: "none",
                    borderRadius: "0px",
                    width: "20rem",
                    height: "50px",
                    fontSize: "20px",
                    fontWeight: "400",
                    bgcolor: "#0062ff",
                    ":hover": {
                        bgcolor: "#0255DA",
                    },
                }}
            >
                Go there <ArrowForwardOutlined />
            </Button>
        </List>
    );
};
