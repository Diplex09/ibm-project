import React from "react";
import TableCell from "@mui/material/TableCell";
import { TextField } from "@mui/material";

export const EditRowTypes = () => {
    return (
        <>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="COUNTRY"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="BAND"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="RATE"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="DATE START"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="DATE FINISH"
                    variant="standard"
                />
            </TableCell>
        </>
    );
};

export default EditRowTypes;
