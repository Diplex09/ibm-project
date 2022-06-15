export const initialState = {
    checking: true,
    // uid: null,
    // name: null,
};

export const authenticatedState = {
    initialState: {
        checking: false,
        uid: 1,
        name: "Remy Sharp",
        rol: 1,
        rolName: "Manager",
    },
};

export const notAuthenticatedState = {
    initialState: {
        checking: false,
    },
};
