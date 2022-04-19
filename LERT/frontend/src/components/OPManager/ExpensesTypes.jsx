import { List, Typography, Button, Input, Grid, Box, TextField, Paper } from "@mui/material";
import React, { useState } from "react";

export const ExpenseForm = () => {
    const [textValue, setTextValue] = useState("");
  
    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");
  
    return (
      <Paper>
  
        <TextField
          onChange={onTextChange}
          value={textValue}
          label={"Enter expense type"} //optional
        />
  
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Paper>
    );
  };

export const ExpensesTypes = () =>{
    return (
    <Box
    sx={{
        alignItems: "center",
        width: "100%",
        height: "100%",
    }}
    >
        <Typography
                variant="h3"
                sx={{ marginBottom: "4.5rem", fontWeight: "300" }}
            >
                New expense type
        </Typography>

        <ExpenseForm/>
    </Box>
    );
}