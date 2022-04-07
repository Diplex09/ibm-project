import { Box, AppBar, Toolbar, Typography, CardMedia } from "@mui/material";

export const Header = () => {
    return (
        <AppBar
            position="left"
            sx={{
                backgroundColor: " white",
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
            </Toolbar>
        </AppBar>
    );
};
