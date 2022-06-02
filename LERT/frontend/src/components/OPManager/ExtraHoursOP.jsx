import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

import { HourFields } from "../Fields/HourFields";
import { TableInfo } from "../reusable/TableInfo";

import { ReadRowHours } from "../EditFields/ReadRowHours";
import { EditRowHours } from "../EditFields/EditRowHours";

import { deleteHour, updateHour } from "../../actions/OP Manager/extraHours";

export const ExtraHoursOP = () => {
    const [typeData, setTypeData] = useState([]);

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
                Insert Extra Hour
            </Typography>
            <HourFields fetchData={fetchData} />
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    fontWeight: "600",
                    fontSize: 25,
                    marginBottom: "1rem",
                }}
            >
                All Extra Hours
            </Typography>
            <TableInfo
                fetchData={fetchData}
                typeData={typeData}
                columns={columns}
                initialRecord={initialRecord}
                ReadComponent={(props) => <ReadRowHours {...props} />}
                EditComponent={(props) => <EditRowHours {...props} />}
                updateItem={updateHour}
                deleteItem={deleteHour}
            />
        </>
    );
};

export default ExtraHoursOP;
