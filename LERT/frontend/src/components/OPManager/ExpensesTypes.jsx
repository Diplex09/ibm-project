import { List, Typography, Button, Input, Grid, Box } from "@mui/material";

export const ExpensesTypes = () =>{
    return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "100%",
    }}
    >
    <Grid 
    container spacing={2}
    justify="center"
    alignItems="center"
    
    >
    
    <Grid item xs={8}>
        <Input  placeholder="Enter expense type" />
    </Grid>
    
    <Grid item xs={8}>
        <Button variant = "outlined" >
            Submit
        </Button>
    </Grid>
    </Grid>

    </Box>
    );
}