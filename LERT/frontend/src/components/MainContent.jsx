import { Box } from "@mui/material";
import { ExpensesTypes } from "./OPManager/ExpensesTypes";
import { HomeMg } from "./Manager/HomeMg";
import { ExpensesMg } from "./Manager/ExpensesMg";
import { Employees } from "./Manager/Employees";
import { QuarterMg } from "./Manager/QuarterMg";
import { AdminRouter } from "../router/Roles Routers/AdminRouter";

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
                <AdminRouter />
            </Box>
        </Box>
    );
};
