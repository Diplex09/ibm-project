import { startLogin } from "../../actions/auth";
import { createTestStore } from "../test-utils";

describe("Test in auth actions", () => {
    let store;
    beforeEach(() => {
        store = createTestStore();
        jest.clearAllMocks();
    });

    test("startLogin correct", async () => {
        await store.dispatch(startLogin("remysharp@ibm.com", "password"));

        const currState = store.getState();

        expect(currState).toEqual({
            auth: {
                checking: false,
                uid: expect.any(Number),
                name: expect.any(String),
                rol: expect.any(Number),
                rolName: expect.any(String),
            },
        });
    });
});
