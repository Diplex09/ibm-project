import { Box } from "@mui/material";
import { Delegate } from "./Admin/Delegate";
import { Home } from "./Admin/Home";
import { ExpensesTypes } from "./OPManager/ExpensesTypes";

export const MainContent = () => {
    return (
        <Box
            component="main"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                bgcolor: "#f2f4f8",
                color: "#000",
                mr: "3.5rem", // Navbar width}
                mt: "65px",
                p: "2rem 4rem",
            }}
        >
            <Box sx={{ width: "100%", height: "100%" }}>
                <Delegate />
            </Box>
        </Box>
    );
};
