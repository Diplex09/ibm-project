import { useLocation } from "react-router-dom";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    CardMedia,
    Divider,
} from "@mui/material";

import { getHeadTitle } from "../utils/getHeadTitle";

export const Header = () => {
    const location = useLocation();
    const section = getHeadTitle(location.pathname);

    return (
        <AppBar
            sx={{
                backgroundColor: "white",
                height: "60px",
            }}
        >
            <Toolbar>
                <Box sx={{ width: "60px", marginRight: "5px" }}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 160,
                        }}
                        image="/assets/ibmLogo.jpg"
                        alt="IBM"
                    />
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    color="black"
                    fontWeight="Bold"
                    marginLeft={"11px"}
                >
                    LERT
                </Typography>
                <Divider
                    orientation="vertical"
                    style={{
                        marginLeft: "10px",
                        height: "30px",
                        width: "7px",
                    }}
                />
                <Typography
                    sx={{
                        color: "black",
                        marginLeft: "18px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                    }}
                >
                    {section}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
