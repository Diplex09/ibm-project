import React from "react";
import TableCell from "@mui/material/TableCell";

export const ReadRowTypes = ({ row }) => {
    return (
        <>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="left">{row.country}</TableCell>
            <TableCell align="left">{row.band}</TableCell>
            <TableCell align="left">{row.rate}</TableCell>
            <TableCell align="left">{row.date_to_start}</TableCell>
            <TableCell align="left">{row.date_to_finish}</TableCell>
        </>
    );
};

export default ReadRowTypes;
