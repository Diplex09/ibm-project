import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

import { IcaFields } from "../Fields/IcaFields.jsx";
import { TableInfo } from "../reusable/TableInfo";

import { ReadRowICAs } from "../EditFields/ReadRowICAs.jsx";
import { EditRowICAs } from "../EditFields/EditRowICAs.jsx";

import { deleteIca, updateIca } from "../../actions/OP Manager/icas.js";

export const Icas = () => {
    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/getICAs",
            responseType: "json",
        }).then((response) => {
            setTypeData(response.data);
        });
    };

    const columns = [
        "Actions",
        "ICA Code",
        "ICA Core",
        "Year",
        "ID Planning",
        "ICA Owner",
        "Budget",
        "Country",
        "Status",
        "Depto",
        "Frequency Bills",
        "CC",
        "City Name Req",
        "Division",
        "Major",
        "Minor",
        "Leru",
        "Description",
        "ID Type",
        "Nec",
        "Total Plus Taxes",
        "Start Date",
        "End Date",
        "City Name Perf",
        "R Cty Perf",
        "Total Billing",
    ];

    const initialRecord = {
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
        start_date: "",
        end_date: "",
        cty_name_perf: "",
        r_cty_perf: "",
        total_billing: "",
    };

    return (
        <>
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    fontWeight: "600",
                    fontSize: 25,
                    marginBottom: "1rem",
                }}
            >
                Insert New ICA
            </Typography>
            <IcaFields fetchData={fetchData} />
            <TableInfo
                fetchData={fetchData}
                typeData={typeData}
                columns={columns}
                initialRecord={initialRecord}
                ReadComponent={(props) => <ReadRowICAs {...props} />}
                EditComponent={(props) => <EditRowICAs {...props} />}
                updateItem={updateIca}
                deleteItem={deleteIca}
            />
        </>
    );
};

export default Icas;
