import { authLogin, authLogout, authSlice } from "../../reducers/authSlice";
import { authenticatedState, initialState } from "../fixtures/authStates";
import { testUserInfo } from "../fixtures/testUser";

describe("Tests in authSlice.js", () => {
    test("should return the initial state", () => {
        expect(authSlice.getInitialState()).toEqual(initialState);
    });

    test("should login", () => {
        const state = authSlice.reducer(initialState, authLogin(testUserInfo));
        expect(state).toEqual({
            checking: false,
            ...testUserInfo,
        });
    });

    test("should logout", () => {
        const state = authSlice.reducer(authenticatedState, authLogout());
        expect(state).toEqual({
            checking: false,
            uid: undefined, // Shouldn't be in state
        });
    });
});
