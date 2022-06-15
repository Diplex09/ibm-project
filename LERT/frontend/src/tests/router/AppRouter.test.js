import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import { AppRouter } from "../../router/AppRouter";
import { testUserInfo } from "../fixtures/testUser";

jest.mock("../../hooks/useAuthStore");

describe("Tests in AppRouter", () => {
    const mockStartChecking = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test("should show Loading screen and call startChecking", () => {
        useAuthStore.mockReturnValue({
            checking: true,
            startChecking: mockStartChecking,
        });

        render(<AppRouter />);

        expect(screen.getByText("Loading...")).toBeTruthy();
        expect(mockStartChecking).toHaveBeenCalled();
    });

    test("should show login in case user is not authenticated", () => {
        useAuthStore.mockReturnValue({
            checking: false,
            startChecking: mockStartChecking,
        });

        const { container } = render(<AppRouter />);

        expect(screen.getByText("Log in to IBM")).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    test("should show main view in case user is authenticated", () => {
        useAuthStore.mockReturnValue({
            checking: false,
            ...testUserInfo,
            startChecking: mockStartChecking,
        });

        render(<AppRouter />);

        expect(screen.getAllByText("Home")).toBeTruthy();
    });
});
