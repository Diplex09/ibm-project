import axios from "axios";

export const postNewIca = async (record) => {
    await axios
        .post("http://localhost:3000/postICA", {
            ica_code: record.ica_code,
            ica_core: record.ica_core,
            year: record.year,
            id_planning: record.id_planning,
            ica_owner: record.ica_owner,
            budget: record.budget,
            country: record.country,
            status: record.status,
            depto: record.depto,
            frequency_bill: record.frequency_bill,
            cc: record.cc,
            city_name_req: record.city_name_req,
            division: record.division,
            major: record.major,
            minor: record.minor,
            leru: record.leru,
            description: record.description,
            id_type: record.id_type,
            nec: record.nec,
            total_plus_taxes: record.total_plus_taxes,
            start_date: record.start_Date,
            end_date: record.end_date,
            cty_name_perf: record.cty_name_perf,
            r_cty_perf: record.R_Cty_Perf,
            total_billing: record.total_billing,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteIca = async (id) => {
    await axios
        .delete(`http://localhost:3000/deleteICA/${id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const updateIca = async (id, editRecord) => {
    await axios
        .put(`http://localhost:3000/updateICA/${id}`, {
            ica_code: editRecord.ica_code,
            ica_core: editRecord.ica_core,
            year: editRecord.year,
            id_planning: editRecord.id_planning,
            ica_owner: editRecord.ica_owner,
            budget: editRecord.budget,
            country: editRecord.country,
            status: editRecord.status,
            depto: editRecord.depto,
            frequency_bill: editRecord.frequency_bill,
            cc: editRecord.cc,
            city_name_req: editRecord.city_name_req,
            division: editRecord.division,
            major: editRecord.major,
            minor: editRecord.minor,
            leru: editRecord.leru,
            description: editRecord.description,
            id_type: editRecord.id_type,
            nec: editRecord.nec,
            total_plus_taxes: editRecord.total_plus_taxes,
            start_Date: editRecord.start_date,
            end_date: editRecord.end_date,
            cty_name_perf: editRecord.cty_name_perf,
            R_Cty_Perf: editRecord.r_cty_perf,
            total_billing: editRecord.total_billing,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
