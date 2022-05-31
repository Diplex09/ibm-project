export const postNewEmployee = async (record) => {
    const axios = require("axios").default;
    console.log("Record in add Employee");
    await axios
        .post("http://localhost:3000/newPostEmployee", {
            firstName: record.firstName,
            lastName: record.lastName,
            email: record.email,
            originCountry: record.originCountry,
            ICA: record.ICA,
            currentCountry: record.currentCountry,
            type: record.type,
            band: record.band,
            squad: record.squad,
            dateStart: record.dateStart,
            dateFinish: record.dateFinish
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};


export const deleteEmployee = async (id) => {
    const axios = require("axios").default;
    axios
        .delete(`http://localhost:3000/deleteEmployees/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}