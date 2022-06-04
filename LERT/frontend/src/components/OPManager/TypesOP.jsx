import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

import { TypesFields } from "../Fields/TypesFields";
import { TableInfo } from "../reusable/TableInfo";

import { ReadRowTypes } from "../EditFields/ReadRowTypes";
import { EditRowTypes } from "../EditFields/EditRowTypes";

import { deleteType, updateType } from "../../actions/OP Manager/types";

export const TypesOP = () => {
    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios({
            method: "get",
            url: "http://localhost:3000/getTypes",
            responseType: "json",
        }).then((response) => {
            setTypeData(response.data);
        });
    };

    const columns = [
        "Actions",
        "Type",
        "Country",
        "Band",
        "Rate",
        "Date Start",
        "Date Finish",
    ];

    const initialRecord = {
        name: "",
        band: "",
        rate: "",
        country: "",
        date_to_start: "",
        date_to_finish: "",
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
                Insert New Type
            </Typography>
            <TypesFields fetchData={fetchData} />
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    fontWeight: "600",
                    fontSize: 25,
                    marginBottom: "1rem",
                }}
            >
                All types
            </Typography>
            <TableInfo
                fetchData={fetchData}
                typeData={typeData}
                columns={columns}
                initialRecord={initialRecord}
                ReadComponent={(props) => <ReadRowTypes {...props} />}
                EditComponent={(props) => <EditRowTypes {...props} />}
                updateItem={updateType}
                deleteItem={deleteType}
            />
        </>
    );
};

export default TypesOP;
