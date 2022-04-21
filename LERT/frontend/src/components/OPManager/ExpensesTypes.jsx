import { List, Typography, Button, Input, Grid, Box, TextField, Paper } from "@mui/material";
import React, { useState } from "react";

export const ExpenseForm = () => {
    const [textValue, setTextValue] = useState("");
  
    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");
  
    return (
      
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <TextField
          fullWidth
          onChange={onTextChange}
          value={textValue}
          label={"Enter expense type"} //optional
        />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleSubmit}
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
          
          >Submit</Button>
          <Button onClick={handleReset}
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
          >Reset</Button>
        </Grid>
      </Grid>
      
    );
  };

export const ExpensesTypes = () =>{
    return (
    <Box
    sx={{
        width: "100%",
        height: "100%"
    }}
    >
        <Typography
                align = 'center'
                variant="h3"
                sx={{ marginBottom: "4.5rem", fontWeight: "300" }}
            >
                New expense type
        </Typography>
      
        <ExpenseForm/>
    </Box>
    );
}