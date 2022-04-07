import {
    Avatar,
    Box,
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItemText,
    CardMedia,
    ListItemButton,
    ListItemIcon,
} from "@mui/material";

import {
    HomeOutlined,
    GroupAddOutlined,
    AccountBalanceOutlined,
    LoopOutlined,
    PostAddOutlined,
    PersonOutlineOutlined,
} from "@mui/icons-material";

const drawerWidth = 240;

export default function MainView() {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="left"
                sx={{
                    backgroundColor: " white",
                    width: `calc(100% - ${drawerWidth}px)`,
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
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <Toolbar sx={{ marginTop: 2, marginBottom: 2 }}>
                    <List sx={{ margin: "auto" }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{
                                width: 56,
                                height: 56,
                                margin: "auto",
                                marginBottom: 2,
                            }}
                        />
                        <h3>Sebastián Rojas</h3>
                        <Typography sx={{ fontSize: ".7rem", marginBottom: 1 }}>
                            Administrador
                        </Typography>
                    </List>
                </Toolbar>
                <Divider />
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <GroupAddOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Delegate" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <PersonOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Employee" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBalanceOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Expenses" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <LoopOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Recovery" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <PostAddOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <PersonOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
                <Divider />
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
                <Toolbar />
            </Box>
        </Box>
    );
}
