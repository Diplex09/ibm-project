import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../components/Login";
import MainView from "../MainView";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
    const { checking, uid, startChecking } = useAuthStore();
    // const dispatch = useDispatch();
    // const { checking, uid } = useSelector((state) => state.auth);

    useEffect(() => {
        startChecking();
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
