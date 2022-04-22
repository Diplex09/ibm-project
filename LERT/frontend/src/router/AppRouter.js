import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../components/Login";
import MainView from "../MainView";

export const AppRouter = () => {
    const { uid } = useSelector((state) => state.auth);

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
                    path="/"
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
