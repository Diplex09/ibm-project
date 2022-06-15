import { configureStore } from "@reduxjs/toolkit";
import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";

import { initialState } from "../fixtures/authStates";
import { useAuthStore } from "../../hooks/useAuthStore";
import { authSlice } from "../../reducers/authSlice";

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer,
        },
        preloadedState: {
            auth: { ...initialState },
        },
    });
};

describe("Test in auth actions", () => {
    test("should return default values", async () => {
        const mockStore = getMockStore({ ...initialState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => (
                <Provider store={mockStore}>{children}</Provider>
            ),
        });

        expect(result.current).toEqual({
            checking: true,
            uid: undefined,
            name: undefined,
            rol: undefined,
            rolName: undefined,
            startLogin: expect.any(Function),
            startLogout: expect.any(Function),
            startChecking: expect.any(Function),
            checkingFinish: expect.any(Function),
        });
    });
});
