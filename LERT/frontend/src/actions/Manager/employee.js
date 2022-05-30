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