import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Login from "./components/Login";
import MainView from "./MainView";

const theme = createTheme({
    typography: {
        fontFamily: "IBM Plex Sans, sans-serif",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
          @font-face {
            font-family: 'IBM Plex Sans';
          }
        `,
        },
    },
});

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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ fontFamily: "IBM Plex Sans" }}>
                {/* <Login /> */}
                <MainView />
            </Box>
        </ThemeProvider>
    );
}

export default App;
