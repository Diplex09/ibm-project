import { Box } from "@mui/material";
import { Delegate } from "./Admin/Delegate";
import { Home } from "./Admin/Home";
import { ExpensesTypes } from "./OPManager/ExpensesTypes";

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
            <Delegate/>
        </Box>
    );
};
