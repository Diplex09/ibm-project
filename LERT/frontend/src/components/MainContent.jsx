import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import { AdminRouter } from "../router/Roles Routers/AdminRouter";
import { ManagerRouter } from "../router/Roles Routers/ManagerRouter";
import { OPManagerRouter } from "../router/Roles Routers/OPManagerRouter";

export const MainContent = () => {
    const { rol } = useSelector((state) => state.auth);

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
                {rol === 1 ? (
                    <ManagerRouter />
                ) : rol === 2 ? (
                    <OPManagerRouter />
                ) : (
                    <AdminRouter />
                )}
            </Box>
        </Box>
    );
};
