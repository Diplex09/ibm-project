import { Fragment } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

import { ReadRowHours } from "../EditFields/ReadRowHours";
import { EditRowHours } from "../EditFields/EditRowHours";

import { deleteHour, updateHour } from "../../actions/OP Manager/extraHours";

export const TableInfo = ({
    fetchData,
    typeData,
    rowId,
    setRowId,
    editRecord,
    setEditRecord,
}) => {
    const handleEditRecord = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        console.log(fieldName);
        const fieldValue = e.target.value;

        const newRecord = { ...editRecord };
        newRecord[fieldName] = fieldValue;

        setEditRecord(newRecord);
    };

    const handleEditClick = (e, row) => {
        e.preventDefault();
        setRowId(row.id);

        const formValues = {
            type: row.name,
            band: row.band,
            rate: row.rate,
            country: row.country,
            dateStart: row.date_to_start,
            dateFinish: row.date_to_finish,
        };

        setEditRecord(formValues);
    };

    const handleEditSave = (e, editRecord, row) => {
        e.preventDefault();
        console.log(editRecord);
        updateHour(row.id, editRecord);
        fetchData();
    };

    const deleteRecord = async (e, row) => {
        deleteHour(row.id);
        fetchData();
    };

    return (
        <form>
            <Paper>
                <TableContainer
                    sx={{
                        "& .MuiTableCell-head": {
                            color: "#0062ff",
                            textTransform: "uppercase",
                            fontWeight: "500",
                        },
                        padding: "5px 20px",
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Actions</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell align="left">Country</TableCell>
                                <TableCell>Band</TableCell>
                                <TableCell>Rate</TableCell>
                                <TableCell>Date Start</TableCell>
                                <TableCell>Date Finish</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {typeData.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <Fragment>
                                        {rowId === row.id ? (
                                            <EditRowHours
                                                row={row}
                                                editRecord={editRecord}
                                                handleEditRecord={
                                                    handleEditRecord
                                                }
                                                handleEditSave={handleEditSave}
                                            />
                                        ) : (
                                            <ReadRowHours
                                                row={row}
                                                handleEditClick={
                                                    handleEditClick
                                                }
                                                deleteRecord={deleteRecord}
                                            />
                                        )}
                                    </Fragment>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </form>
    );
};
