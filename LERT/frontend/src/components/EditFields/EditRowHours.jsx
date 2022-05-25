import React from "react";
import TableCell from "@mui/material/TableCell";
import { TextField, IconButton } from "@mui/material";
import { DoneOutlineOutlined } from "@mui/icons-material";

export const EditRowHours = ({
    row,
    editRecord,
    handleEditRecord,
    handleEditSave,
}) => {
    return (
        <>
            <TableCell>
                <IconButton>
                    <DoneOutlineOutlined />
                </IconButton>
            </TableCell>

            <TableCell>
                <TextField
                    name="type"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="country"
                    id="standard-basic"
                    label="COUNTRY"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="band"
                    id="standard-basic"
                    label="BAND"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="rate"
                    id="standard-basic"
                    label="RATE"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="dateStart"
                    id="standard-basic"
                    label="DATE START"
                    variant="standard"
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="dateFinish"
                    id="standard-basic"
                    label="DATE FINISH"
                    variant="standard"
                />
            </TableCell>
        </>
    );
};

export default EditRowHours;
