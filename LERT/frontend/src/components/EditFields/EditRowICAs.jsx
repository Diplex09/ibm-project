import TableCell from "@mui/material/TableCell";
import { TextField, IconButton } from "@mui/material";
import { DoneOutlineOutlined } from "@mui/icons-material";

export const EditRowICAs = ({
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
                    name="ica_code"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.ica_code}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="ica_core"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.ica_core}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="year"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.year}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="id_planning"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.id_planning}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="ica_owner"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.ica_owner}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="budget"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.budget}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="country"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.country}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="status"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.status}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="depto"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.depto}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="frequency_bill"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.frequency_bill}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="cc"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.cc}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="city_name_req"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.city_name_req}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="division"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.division}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="major"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.major}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="minor"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.minor}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="leru"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.leru}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="description"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.description}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="id_type"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.id_type}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="nec"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.nec}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="total_plus_taxes"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.total_plus_taxes}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="start_Date"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.start_Date}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="end_date"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.end_date}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="cty_name_perf"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.cty_name_perf}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="R_Cty_Perf"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.R_Cty_Perf}
                    onChange={handleEditRecord}
                />
            </TableCell>

            <TableCell>
                <TextField
                    name="total_billing"
                    id="standard-basic"
                    label="TYPE"
                    variant="standard"
                    defaultValue={editRecord.total_billing}
                    onChange={handleEditRecord}
                />
            </TableCell>
        </>
    );
};
