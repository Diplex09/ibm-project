import { TableCell, IconButton } from "@mui/material";
import { ModeEditOutlineOutlined, DeleteOutlined } from "@mui/icons-material";

export const ReadRowICAs = ({ row, handleEditClick, deleteRecord }) => {
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
                {row.ica_code}
            </TableCell>
            <TableCell align="left">{row.ica_core}</TableCell>
            <TableCell align="left">{row.year}</TableCell>
            <TableCell align="left">{row.id_planning}</TableCell>
            <TableCell align="left">{row.ica_owner}</TableCell>
            <TableCell align="left">{row.budget}</TableCell>
            <TableCell align="left">{row.country}</TableCell>
            <TableCell align="left">{row.status}</TableCell>
            <TableCell align="left">{row.depto}</TableCell>
            <TableCell align="left">{row.frequency_bill}</TableCell>
            <TableCell align="left">{row.cc}</TableCell>
            <TableCell align="left">{row.city_name_req}</TableCell>
            <TableCell align="left">{row.division}</TableCell>
            <TableCell align="left">{row.major}</TableCell>
            <TableCell align="left">{row.minor}</TableCell>
            <TableCell align="left">{row.leru}</TableCell>
            <TableCell align="left">{row.description}</TableCell>
            <TableCell align="left">{row.id_type}</TableCell>
            <TableCell align="left">{row.nec}</TableCell>
            <TableCell align="left">{row.total_plus_taxes}</TableCell>
            <TableCell align="left">{row.start_Date}</TableCell>
            <TableCell align="left">{row.end_date}</TableCell>
            <TableCell align="left">{row.cty_name_perf}</TableCell>
            <TableCell align="left">{row.R_Cty_Perf}</TableCell>
            <TableCell align="left">{row.total_billing}</TableCell>
        </>
    );
};
