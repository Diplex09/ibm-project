import axios from 'axios';
import { authLogin, authLogout } from '../reducers/authSlice';

export const startLogin = (email, password) => {
    return async (dispatch) => {
        await axios
            .post('/login', {
                email,
                password,
            })
            .then(function (resp) {
                const body = resp.data;
                dispatch(
                    authLogin({
                        uid: body.user.Id_user,
                        name: body.user.FullName,
                        rol: body.user.Rol,
                    })
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await axios
            .get('/logout')
            .then((resp) => {
                const { message } = resp.data;
                console.log(message);
                dispatch(authLogout());
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
