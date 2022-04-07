import { Box } from "@mui/material";
import { Home } from "./Admin/Home";

export const MainContent = () => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                bgcolor: "#f2f4f8",
                color: "#000",
                padding: "5rem",
            }}
        >
            <Home />
        </Box>
    );
};
