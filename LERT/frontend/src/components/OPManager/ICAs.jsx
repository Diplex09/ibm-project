import { useEffect, useState } from "react";
import axios from "axios";

import { HourFields } from "../Fields/IcaFields.jsx";
import { TableInfo } from "../reusable/TableInfo";
import { Typography } from "@mui/material";

export const Icas = () => {
    const [typeData, setTypeData] = useState([]);
    const [rowId, setRowId] = useState(null);

    const [editRecord, setEditRecord] = useState({
        id_ica: "",
        ica_code: "",
        ica_core: "",
        year: "",
        id_planning: "",
        ica_owner: "",
        budget: "",
        country: "",
        status: "",
        depto: "",
        frequency_bill: "",
        cc: "",
        city_name_req: "",
        division: "",
        major: "",
        minor: "",
        leru: "",
        description: "",
        id_type: "",
        nec: "",
        total_plus_taxes: "",
        start_Date: "",
        end_date: "",
        cty_name_perf: "",
        R_Cty_Perf: "",
        total_billing: ""
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/getIcas",
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
                ICAs
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

export default Icas;