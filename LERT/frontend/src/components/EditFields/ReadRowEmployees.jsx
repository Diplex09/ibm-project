import React from "react";
import { useState, useEffect, Fragment } from "react";
import { FormEmployee } from "../Fields/FormEmployee";
import TableCell from "@mui/material/TableCell";
import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    Paper,
} from "@mui/material";

import {
    Search,
    FilterList,
    AttachMoney,
    EmailOutlined,
    CommentOutlined,
    Send,
    PublicOutlined,
    ModeEditOutlineOutlined,
    DeleteOutlined,
} from "@mui/icons-material";
export const ReadRowEmployees = (row) => {
    const [displayModal, setDisplayModal] = useState(false);
    return (
        <>
            <TableCell>
                <IconButton
                    onClick={() => {
                        setDisplayModal(true);
                    }}
                >
                    <ModeEditOutlineOutlined />
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {console.log(row.name)}
            </TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="left">{row.country}</TableCell>
            <TableCell align="left">{row.ica}</TableCell>
            <TableCell align="left">{row.band}</TableCell>
            <TableCell align="left">{row.type}</TableCell>
            <TableCell align="left">{row.status}</TableCell>
            {displayModal && <FormEmployee closeModal={setDisplayModal} />}
        </>
    );
};

export default ReadRowEmployees;
