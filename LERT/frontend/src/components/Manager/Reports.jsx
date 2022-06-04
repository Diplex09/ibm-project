import { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";

export const Reports = () => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        fontWeight: "600",
                        mb: 3,
                    }}
                >
                    Get Reports
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#fff",
                            p: 5,
                        }}
                    >
                        <Box sx={{ mr: 3 }}>
                            <DesktopDatePicker
                                label="Start"
                                value={date1}
                                minDate={new Date("2017-01-01")}
                                onChange={(newValue) => {
                                    setDate1(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Box>
                        <Box sx={{ mr: 3 }}>
                            <DesktopDatePicker
                                label="Finish"
                                value={date2}
                                minDate={new Date("2017-01-01")}
                                maxDate={new Date()}
                                onChange={(newValue) => {
                                    setDate2(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                textTransform: "none",
                                borderRadius: "0px",
                                width: "12rem",
                                height: "40px",
                                fontSize: "15px",
                                fontWeight: "400",
                                bgcolor: "#0062ff",
                                ":hover": {
                                    bgcolor: "#0255DA",
                                },
                            }}
                        >
                            Download <ArrowForwardOutlined />
                        </Button>
                    </Box>
                </LocalizationProvider>
            </Box>
        </>
    );
};
