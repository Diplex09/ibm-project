import {
    Avatar,
    Drawer,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItemText,
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

export const NavBar = () => {
    return (
        <Drawer
            sx={{
                width: 260,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 260,
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
                    <Typography
                        sx={{
                            fontSize: ".7rem",
                            marginBottom: 1,
                            textAlign: "center",
                        }}
                    >
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
    );
};
