import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
    Box,
    List,
    CssBaseline,
    Divider,
    IconButton,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import {
    AccountBalanceOutlined,
    GroupAddOutlined,
    HomeOutlined,
    LogoutOutlined,
    LoopOutlined,
    PersonOutlineOutlined,
    PostAddOutlined,
    Menu,
    ChevronRight,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";

import { authLogout } from "../reducers/authSlice";

const drawerWidth = 300;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export const NavBar = () => {
    const theme = useTheme();

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleDrawerClose = () => {
        if (open === true) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    const handleLogout = () => {
        dispatch(authLogout());
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Drawer variant="permanent" anchor="right" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {open === true ? (
                            <ChevronRight />
                        ) : (
                            <Menu sx={{ color: "#0062ff" }} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {[
                        {
                            text: "Home",
                            icon: <HomeOutlined />,
                        },
                        {
                            text: "Delegate",
                            icon: <GroupAddOutlined />,
                        },
                        {
                            text: "Employee",
                            icon: <PersonOutlineOutlined />,
                        },
                        {
                            text: "Expenses",
                            icon: <AccountBalanceOutlined />,
                        },
                        {
                            text: "Recovery",
                            icon: <LoopOutlined />,
                        },
                        {
                            text: "Reports",
                            icon: <PostAddOutlined />,
                        },
                        {
                            text: "Logout",
                            icon: <LogoutOutlined />,
                            handle: handleLogout,
                        },
                    ].map(({ text, icon, handle }, index) => (
                        <ListItemButton
                            key={text}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                            onClick={handle}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
