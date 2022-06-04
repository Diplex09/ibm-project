import TableCell from "@mui/material/TableCell";
import { TextField, IconButton } from "@mui/material";
import { DoneOutlineOutlined } from "@mui/icons-material";

export const EditRowTypes = ({
    row,
    editRecord,
    handleEditRecord,
    handleEditSave,
}) => {
    return (
        <>
            <TableCell>
                <IconButton onClick={(e) => handleEditSave(e, editRecord, row)}>
                    <DoneOutlineOutlined />
                </IconButton>
            </TableCell>

            <TableCell>
                <TextField
                    name="name"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.name}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="country"
                    id="standard-basic"
                    label="COUNTRY"
                    variant="standard"
                    defaultValue={editRecord.country}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="band"
                    id="standard-basic"
                    label="BAND"
                    variant="standard"
                    defaultValue={editRecord.band}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="rate"
                    id="standard-basic"
                    label="RATE"
                    variant="standard"
                    defaultValue={editRecord.rate}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="date_to_start"
                    id="standard-basic"
                    label="DATE START"
                    variant="standard"
                    defaultValue={editRecord.date_to_start}
                    onChange={handleEditRecord}
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="date_to_finish"
                    id="standard-basic"
                    label="DATE FINISH"
                    variant="standard"
                    defaultValue={editRecord.date_to_finish}
                    onChange={handleEditRecord}
                />
            </TableCell>
        </>
    );
};

export default EditRowTypes;
