import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { LogInPage } from "../../../src/auth/pages/LogInPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe('LogInPage', () => {

    test('should render correctly', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LogInPage />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByText('Log In').lenght).toBeGreaterThanOrEqual(1);
    });

    test('should call startGoogleSignIn when click onGoogleSignIn', () => {
        
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LogInPage />
                </MemoryRouter>
            </Provider>
        )

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);
    });
});