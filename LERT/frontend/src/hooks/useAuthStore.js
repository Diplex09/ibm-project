import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
    authLogin,
    authLogout,
    authCheckingFinish,
} from "../reducers/authSlice";

export const useAuthStore = () => {
    const { checking, uid, name, rol, rolName } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();

    const startLogin = async (email, password) => {
        await axios
            .post("http://localhost:3000/login", {
                email,
                password,
            })
            .then((resp) => {
                const { user } = resp.data;
                dispatch(
                    authLogin({
                        uid: user.uid,
                        name: user.fullName,
                        rol: user.rol,
                        rolName: user.rolName,
                    })
                );
            })
            .catch((error) => {
                if (error.response) {
                    // console.log(error.response.data);
                    checkingFinish();
                }
            });
    };

    const startLogout = async () => {
        await axios
            .get("http://localhost:3000/logout")
            .then((resp) => {
                dispatch(authLogout());
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const startChecking = async () => {
        await axios
            .get("http://localhost:3000/check")
            .then((resp) => {
                console.log(resp);
                const { user } = resp.data;
                dispatch(
                    authLogin({
                        uid: user.uid,
                        name: user.fullName,
                        rol: user.rol,
                        rolName: user.rolName,
                    })
                );
            })
            .catch((error) => {
                if (window.location.pathname !== "/login") {
                    dispatch(startLogout());
                }
                dispatch(checkingFinish());
            });
    };

    const checkingFinish = () => {
        dispatch(authCheckingFinish());
    };

    return {
        // Properties
        checking,
        uid,
        name,
        rol,
        rolName,

        // Methods
        startLogin,
        startLogout,
        startChecking,
        checkingFinish,
    };
};
