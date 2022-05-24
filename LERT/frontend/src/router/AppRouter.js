import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Login from '../components/Login';
import MainView from '../MainView';
import { useEffect } from 'react';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, []);

    if (checking) {
        return <h5>Loading...</h5>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute isAuthenticated={!!uid}>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute isAuthenticated={!!uid}>
                            <MainView />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
