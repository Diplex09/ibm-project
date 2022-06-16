import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";

import {
    authenticatedState,
    initialState,
    notAuthenticatedState,
} from "../fixtures/authStates";
import { useAuthStore } from "../../hooks/useAuthStore";
import { authSlice } from "../../reducers/authSlice";
import { testUserCredentials, testUserInfo } from "../fixtures/testUser";

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
    jest.setTimeout(20000);

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

    test("startLogin should login correctly", async () => {
        const mockStore = getMockStore({ ...notAuthenticatedState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => (
                <Provider store={mockStore}>{children}</Provider>
            ),
        });

        await act(async () => {
            if (result) {
                await result.current.startLogin(
                    testUserCredentials.email,
                    testUserCredentials.password
                );
            }
        });

        const { checking, uid, name, rol, rolName } = result.current;

        expect({ checking, uid, name, rol, rolName }).toEqual({
            checking: false,
            uid: testUserInfo.uid,
            name: testUserInfo.name,
            rol: testUserInfo.rol,
            rolName: testUserInfo.rolName,
        });
    });

    test("startLogin should fail authentication", async () => {
        const mockStore = getMockStore({ ...notAuthenticatedState });

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => (
                <Provider store={mockStore}>{children}</Provider>
            ),
        });

        await act(async () => {
            await result.current.startLogin(
                testUserCredentials.email,
                "wrongpassword"
            );
        });

        const { checking, uid } = result.current;
        expect({ checking, uid }).toEqual({
            checking: false,
            uid: undefined,
        });
    });
});
