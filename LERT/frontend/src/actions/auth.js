import axios from "axios";
import {
  authLogin,
  authLogout,
  authCheckingFinish,
} from "../reducers/authSlice";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    await axios
      .post("https://lert-api.mybluemix.net/login", {
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
        console.log(error);
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await axios
      .get("https://lert-api.mybluemix.net/logout")
      .then((resp) => {
        dispatch(authLogout());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    await axios
      .get("https://lert-api.mybluemix.net/check")
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
        if (
          window.location.pathname !== "https://lert-api.mybluemix.net/login"
        ) {
          dispatch(startLogout());
        }
        dispatch(checkingFinish());
      });
  };
};

const checkingFinish = () => {
  return async (dispatch) => {
    dispatch(authCheckingFinish());
  };
};
