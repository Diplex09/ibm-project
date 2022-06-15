import { authSlice } from "../../reducers/authSlice";
import { initialState } from "../fixtures/authStates";

describe("Tests in authSlice.js", () => {
    test("should return the initial state", () => {
        expect(authSlice.getInitialState()).toEqual(initialState);
    });
});
