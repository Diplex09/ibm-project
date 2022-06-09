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

export const updateExpense = async (id, editRecord) => {
    const axios = require("axios").default;
    await axios
        .put(`http://localhost:3000/updateExpenses/${id}`, {
            mail: editRecord.mail,
            date: editRecord.date_limit,
            cost: editRecord.cost,
            comment: editRecord.comment,
            ica: editRecord.ica_id,
            type: editRecord.type_id,
            ica_manager: editRecord.ica_manager,
            administrator: editRecord.administrator

        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};