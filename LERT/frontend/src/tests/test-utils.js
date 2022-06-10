import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../reducers/authSlice';

export const createTestStore = () => {
    const store = configureStore({
        reducer: {
            auth: authSlice,
        },
    });
    return store;
};
