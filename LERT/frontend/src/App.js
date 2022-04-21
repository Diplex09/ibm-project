import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, CssBaseline } from "@mui/material";

import Login from "./components/Login";
import MainView from "./MainView";

import "./App.css";

function App() {
    const [getMessage, setGetMessage] = useState({});

    useEffect(() => {
        axios
            .get("/flask/hello")
            .then((response) => {
                console.log("SUCCESS", response);
                setGetMessage(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Box
            sx={{
                fontFamily: "IBM Plex Sans",
                width: "100vw",
                height: "100vh",
                "& .MuiTypography-root": {
                    fontFamily: "IBM Plex Sans, sans-serif",
                },
                "& .MuiTableCell-root": {
                    fontFamily: "IBM Plex Sans, sans-serif",
                },
                "& .MuiInputBase-root": {
                    fontFamily: "IBM Plex Sans, sans-serif",
                },
            }}
        >
            <CssBaseline />
            {/* <Login /> */}
            <MainView />
        </Box>
    );
}

export default App;
