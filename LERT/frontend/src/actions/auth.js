import axios from 'axios';
import { authLogin, authLogout } from '../reducers/authSlice';

export const startLogin = (email, password) => {
    return async (dispatch) => {
        await axios
            .post('/login', {
                email,
                password,
            })
            .then((resp) => {
                const { token, user } = resp.data;
                console.log(user);
                localStorage.setItem('jwt-token', token);
                dispatch(
                    authLogin({
                        uid: user.uid,
                        name: user.fullName,
                        rol: user.rol,
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
            .get('/logout')
            .then((resp) => {
                const { message } = resp.data;
                console.log(message);
                localStorage.removeItem('jwt-token');
                dispatch(authLogout());
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
