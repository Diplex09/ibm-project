import axios from "axios";
import { authLogin } from "../reducers/authSlice";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        await axios
            .post("/login", {
                email,
                password,
            })
            .then(function (response) {
                console.log(response);
                // TODO: Get uid & name from response
                dispatch(authLogin({ uid: "uid1", name: "UserName" }));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};
