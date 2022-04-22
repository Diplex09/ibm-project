import axios from "axios";
import { authLogin } from "../reducers/authSlice";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        await axios
            .post("/login", {
                email,
                password,
            })
            .then(function (resp) {
                const body = resp.data;
                dispatch(
                    authLogin({
                        uid: body.user.Id_user,
                        name: body.user.FullName,
                    })
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};
