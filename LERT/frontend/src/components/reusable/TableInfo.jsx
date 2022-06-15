import { Fragment, useState } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

export const TableInfo = ({
    fetchData,
    typeData,
    columns,
    initialRecord,
    ReadComponent,
    EditComponent,
    deleteItem,
    updateItem,
}) => {
    const [rowId, setRowId] = useState(null);

    const [editRecord, setEditRecord] = useState(initialRecord);
    console.log(editRecord);

    const handleEditRecord = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newRecord = { ...editRecord };
        newRecord[fieldName] = fieldValue;

        setEditRecord(newRecord);
    };

    const handleEditClick = (e, row) => {
        e.preventDefault();
        setRowId(row.id);
        console.log(row);

        setEditRecord({ ...row });
    };

    const handleEditSave = async (e, editRecord, row) => {
        e.preventDefault();
        console.log(editRecord);
        await updateItem(row.id, editRecord);
        fetchData();
        setRowId(null); // To go back to Read state (ReadComponent)
    };

    const deleteRecord = async (e, row) => {
        await deleteItem(row.id);
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
                                {columns.map((c, index) => (
                                    <TableCell key={index}>{c}</TableCell>
                                ))}
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
                                            <EditComponent
                                                row={row}
                                                editRecord={editRecord}
                                                handleEditRecord={
                                                    handleEditRecord
                                                }
                                                handleEditSave={handleEditSave}
                                            />
                                        ) : (
                                            <ReadComponent
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
