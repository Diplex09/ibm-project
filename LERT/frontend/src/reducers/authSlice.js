import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        checking: true,
        // uid: null,
        // name: null,
    },
    reducers: {
        authLogin: (state, action) => ({
            ...state,
            ...action.payload,
            checking: false,
        }),
        authCheckingFinish: (state) => ({
            ...state,
            checking: false,
        }),
        authLogout: (state) => ({
            checking: false,
        }),
    },
});

// Action creators are generated for each case reducer function
export const { authLogin, authCheckingFinish, authLogout } = authSlice.actions;

export default authSlice.reducer;
