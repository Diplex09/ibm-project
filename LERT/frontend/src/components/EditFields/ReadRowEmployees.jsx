import { IconButton, TableCell } from "@mui/material";
import { ModeEditOutlineOutlined, DeleteOutlined } from "@mui/icons-material";

import { FormEmployee } from "../Fields/FormEmployee";

import { useState, useEffect, fra } from "react";

export const ReadRowEmployees = ({
    row,
    handleEditClick,
    editRecord,
    handleEditRecord,
    handleEditSave,
    deleteRecord,
}) => {
    const [displayModal, setDisplayModal] = useState(false);
    //console.log(row);
    return (
        <>
            <TableCell>
                <IconButton
                    onClick={(e) => {
                        handleEditClick(e, row);
                        setDisplayModal(true);
                    }}
                >
                    <ModeEditOutlineOutlined />
                </IconButton>

                <IconButton onClick={(e) => deleteRecord(e, row)}>
                    <DeleteOutlined />
                </IconButton>
            </TableCell>
            <TableCell>
                {row.employeeName + " " + row.employeeLastName}
            </TableCell>
            <TableCell>{row.mail}</TableCell>
            <TableCell>{row.countryOrigin}</TableCell>
            <TableCell>{row.ICA_ID}</TableCell>
            <TableCell>{row.countryResidence}</TableCell>
            <TableCell>{row.type_id}</TableCell>
            <TableCell>{row.band}</TableCell>
            <TableCell>{row.squad}</TableCell>
            <TableCell>{row.startDate}</TableCell>
            <TableCell>{row.endDate}</TableCell>

            {displayModal && (
                <FormEmployee
                    closeModal={setDisplayModal}
                    editRecord={editRecord}
                    handleEditRecord={handleEditRecord}
                    handleEditSave={handleEditSave}
                    row={row}
                />
            )}
        </>
    );
};

export default ReadRowEmployees;
