import React from "react";
import TableCell from "@mui/material/TableCell";
import { TextField, IconButton } from "@mui/material";
import { DoneOutlineOutlined } from "@mui/icons-material";

export const EditRowTypes = ({ editRecord, handleEditClick }) => {
    return (
        <>
            <TableCell>
                <IconButton>
                    <DoneOutlineOutlined />
                </IconButton>
            </TableCell>

            <TableCell>
                <TextField
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    value={editRecord.type}
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="COUNTRY"
                    variant="standard"
                    value={editRecord.country}
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="BAND"
                    variant="standard"
                    value={editRecord.band}
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="RATE"
                    variant="standard"
                    value={editRecord.rate}
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="DATE START"
                    variant="standard"
                    value={editRecord.dateStart}
                />
            </TableCell>
            <TableCell>
                <TextField
                    id="standard-basic"
                    label="DATE FINISH"
                    variant="standard"
                    value={editRecord.dateFinish}
                />
            </TableCell>
        </>
    );
};

export default EditRowTypes;
