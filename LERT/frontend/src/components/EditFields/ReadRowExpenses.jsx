import { TableCell, IconButton } from "@mui/material";
import { ModeEditOutlineOutlined, DeleteOutlined } from "@mui/icons-material";

export const ReadRowExpenses = ({ row, handleEditClick, deleteRecord }) => {
    return (
        <>
            <TableCell>
                <IconButton onClick={(e) => handleEditClick(e, row)}>
                    <ModeEditOutlineOutlined />
                </IconButton>
                <IconButton onClick={(e) => deleteRecord(e, row)}>
                    <DeleteOutlined />
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {row.mail}
            </TableCell>
            <TableCell align="left">{row.type_id}</TableCell>
            <TableCell align="left">{row.cost}</TableCell>
            <TableCell align="left">{row.date_limit}</TableCell>
            <TableCell align="left">{row.ica_id}</TableCell>
            <TableCell align="left">{row.ica_manager}</TableCell>
            <TableCell align="left">{row.administrator}</TableCell>
            <TableCell align="left">{row.comment}</TableCell>
        </>
    );
};

export default ReadRowExpenses;
