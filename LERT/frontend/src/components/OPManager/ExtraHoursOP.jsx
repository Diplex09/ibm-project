import { useEffect, useState } from "react";
import axios from "axios";

import { HourFields } from "../Fields/HourFields";
import { TableInfo } from "../reusable/TableInfo";
import { Typography } from "@mui/material";

export const ExtraHoursOP = () => {
    const [typeData, setTypeData] = useState([]);
    const [rowId, setRowId] = useState(null);

    const [editRecord, setEditRecord] = useState({
        type: "",
        band: "",
        rate: "",
        country: "",
        dateStart: "",
        dateFinish: "",
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/getHours",
            responseType: "json",
        }).then((response) => {
            setTypeData(response.data);
        });
    };

    return (
        <>
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    fontWeight: "600",
                    textAlign: "center",
                }}
            >
                Extra Hours
            </Typography>
            <HourFields fetchData={fetchData} />
            <TableInfo
                fetchData={fetchData}
                typeData={typeData}
                rowId={rowId}
                setRowId={setRowId}
                editRecord={editRecord}
                setEditRecord={setEditRecord}
            />
        </>
    );
};

export default ExtraHoursOP;
