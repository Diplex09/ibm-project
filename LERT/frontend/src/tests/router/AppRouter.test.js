import { render, screen } from "@testing-library/react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { AppRouter } from "../../router/AppRouter";

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
});
