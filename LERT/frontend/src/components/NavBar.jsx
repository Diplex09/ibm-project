import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    List,
    CssBaseline,
    Divider,
    IconButton,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
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
    TrackChangesOutlined,
    ReceiptOutlined,
    AttachMoneyOutlined,
    AddAlarmOutlined,
    PeopleAltOutlined,
    EditOutlined,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { authLogout } from '../reducers/authSlice';
import { Link } from 'react-router-dom';

const drawerWidth = 300;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export const NavBar = ({ userRole }) => {
    const theme = useTheme();

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [barBtns, setBarBtns] = useState([
        {
            text: 'Home',
            icon: <HomeOutlined />,
            path: '/',
        },
    ]);

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

    useEffect(() => {
        if (userRole === 1) {
            // Manager
            setBarBtns([
                ...barBtns,
                {
                    text: 'Delegate',
                    icon: <GroupAddOutlined />,
                    path: '/delegate',
                },
                {
                    text: 'Employee',
                    icon: <PersonOutlineOutlined />,
                    path: '/employee',
                },
                {
                    text: 'Expenses',
                    icon: <AccountBalanceOutlined />,
                    path: '/expenses',
                },
                {
                    text: 'Recovery',
                    icon: <LoopOutlined />,
                    path: '/recovery',
                },
                {
                    text: 'Reports',
                    icon: <PostAddOutlined />,
                    path: '/reports',
                },
            ]);
        } else if (userRole === 2) {
            // OP Manager
            setBarBtns([
                ...barBtns,
                {
                    text: 'Types',
                    icon: <TrackChangesOutlined />,
                    path: '/types',
                },
                {
                    text: 'ICAS',
                    icon: <ReceiptOutlined />,
                    path: '/icas',
                },
                {
                    text: 'Expenses Types',
                    icon: <AttachMoneyOutlined />,
                    path: '/expenses',
                },
                {
                    text: 'Extra Hours',
                    icon: <AddAlarmOutlined />,
                    path: '/hours',
                },
                {
                    text: 'Manage Manager Functions',
                    icon: <PeopleAltOutlined />,
                    path: '/manage',
                },
                {
                    text: 'Edit Manager Information',
                    icon: <EditOutlined />,
                    path: '/edit',
                },
            ]);
        } else if (userRole === 3) {
            // Admin
            setBarBtns([
                ...barBtns,
                {
                    text: 'Delegate',
                    icon: <GroupAddOutlined />,
                    path: '/delegate',
                },
            ]);
        }
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" anchor="right" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {open === true ? (
                            <ChevronRight />
                        ) : (
                            <Menu sx={{ color: '#0062ff' }} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {barBtns.map(({ text, icon, path }, index) => (
                        <Link key={text} to={`${path}`}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </Link>
                    ))}
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        onClick={handleLogout}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LogoutOutlined />
                        </ListItemIcon>
                        <ListItemText
                            primary="Logout"
                            sx={{ opacity: open ? 1 : 0 }}
                        />
                    </ListItemButton>
                </List>
            </Drawer>
        </Box>
    );
};
