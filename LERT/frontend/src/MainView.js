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
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";

const drawerWidth = 240;

export default function MainView() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${100}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LERT - Labor Expenses Recovery Tool
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
        anchor="left"
      >
        <Toolbar sx={{ marginTop: 2, marginBottom: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{
              width: 56,
              height: 56,
              margin: "auto",
            }}
          />
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
