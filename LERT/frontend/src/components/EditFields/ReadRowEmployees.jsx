import { useState } from "react";
import { IconButton, TableCell } from "@mui/material";
import { ModeEditOutlineOutlined } from "@mui/icons-material";

import { FormEmployee } from "../Fields/FormEmployee";

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
