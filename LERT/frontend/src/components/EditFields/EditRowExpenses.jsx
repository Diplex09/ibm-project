import TableCell from "@mui/material/TableCell";
import { TextField, IconButton } from "@mui/material";
import { DoneOutlineOutlined } from "@mui/icons-material";

export const EditRowExpenses = ({
    row,
    editRecord,
    handleEditRecord,
    handleEditSave,
}) => {
    return (
        <>
            {console.log(editRecord)}
            <TableCell>
                <IconButton onClick={(e) => handleEditSave(e, editRecord, row)}>
                    <DoneOutlineOutlined />
                </IconButton>
            </TableCell>

            <TableCell>
                <TextField
                    name="mail"
                    id="standard-basic"
                    label="Employee mail"
                    variant="standard"
                    defaultValue={editRecord.mail}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="type_id"
                    id="standard-basic"
                    label="Type"
                    variant="standard"
                    defaultValue={editRecord.type_id}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="cost"
                    id="standard-basic"
                    label="Cost"
                    variant="standard"
                    defaultValue={editRecord.cost}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="date_limit"
                    id="standard-basic"
                    label="Date"
                    variant="standard"
                    defaultValue={editRecord.date_limit}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="ica_id"
                    id="standard-basic"
                    label="ICA"
                    variant="standard"
                    defaultValue={editRecord.ica_id}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="ica_manager"
                    id="standard-basic"
                    label="ICA Manager"
                    variant="standard"
                    defaultValue={editRecord.ica_manager}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="administrator"
                    id="standard-basic"
                    label="Administrator"
                    variant="standard"
                    defaultValue={editRecord.administrator}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="comment"
                    id="standard-basic"
                    label="Comment"
                    variant="standard"
                    defaultValue={editRecord.comment}
                    onChange={handleEditRecord}
                />
            </TableCell>
        </>
    );
};

export default EditRowExpenses;
