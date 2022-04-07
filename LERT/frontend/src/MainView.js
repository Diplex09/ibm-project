import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import a from "../src/assets/ibmLogo.jpg";

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
                    <img src={a} width="50" height="60" />
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
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <GroupAddOutlinedIcon />
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
                            <AccountBalanceOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Expenses" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <LoopOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Recovery" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <PostAddOutlinedIcon />
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
