export const postNewExpense = async (record) => {
    const axios = require("axios").default;
    console.log("Record in Add AllExpenses");
    await axios
        .post("http://localhost:3000/newPostExpenses", {
            mail: record.mail,
            date: record.date,
            cost: record.cost,
            comment: record.comment,
            ica: record.ica,
            type: record.type,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteExpense = async (id) => {
    const axios = require("axios").default;
    axios
        .delete(`http://localhost:3000/deleteExpense/${id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}