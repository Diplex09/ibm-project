import axios from "axios";

export const postNewType = async (record) => {
  console.log(record);
  await axios
    .post("https://lert-api.mybluemix.net/newPostType", {
      name: record.name,
      country: record.country,
      band: record.band,
      rate: record.rate,
      date_to_start: record.date_to_start,
      date_to_finish: record.date_to_finish,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteType = async (id) => {
  await axios
    .delete(`https://lert-api.mybluemix.net/deleteTypes/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateType = async (id, editRecord) => {
  await axios
    .put(`https://lert-api.mybluemix.net/updateTypes/${id}`, {
      name: editRecord.name,
      country: editRecord.country,
      band: editRecord.band,
      rate: editRecord.rate,
      date_to_start: editRecord.date_to_start,
      date_to_finish: editRecord.date_to_finish,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
