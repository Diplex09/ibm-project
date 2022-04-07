import { Box, List, Typography, Button } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";

export const MainContent = () => {
    const nombre = "Sebastián";
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "#f2f4f8", color: "#000" }}
        >
            <List sx={{ marginTop: "5rem", marginLeft: "5rem" }}>
                <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
                    Hi, {nombre}!
                </Typography>
                <Typography
                    paragraph
                    sx={{ marginBottom: "-5px", fontSize: "30px" }}
                >
                    Welcome to LERT
                </Typography>
                <Typography
                    paragraph
                    sx={{ fontSize: "30px", marginBottom: "8.5rem" }}
                >
                    Labor Expenses Recovery Tool
                </Typography>
                <Typography display="block" paragraph sx={{ fontSize: "25px" }}>
                    Manage the accounts of the different roles
                    <br />
                    of the company in an easy way.
                </Typography>
                <Button
                    style={{ width: 360, textAlign: "right", borderRadius: 0 }}
                    variant="contained"
                    endIcon={<HomeOutlined />}
                >
                    <Typography
                        sx={{
                            marginRight: "13rem",
                            textTransform: "none",
                        }}
                    >
                        Go there
                    </Typography>
                </Button>
            </List>
        </Box>
    );
};
