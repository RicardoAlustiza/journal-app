import { render } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { LogInPage } from "../../../src/auth/pages/LogInPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginUserWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginUserWithEmailPassword: ({email, password}) => mockStartLoginUserWithEmailPassword({email, password})
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe('LogInPage', () => {

    beforeEach(() => jest.clearAllMocks());

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
        expect(mockStartGoogleSignIn).toHaveBeenCalled();
    });

    test('should call startLoginUserWithEmailPassword when submit form', () => {
        
        const email = 'test@test.com';
        const password = '123456';

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LogInPage />
                </MemoryRouter>
            </Provider>
        )

        const emailInput = screen.getByRole('textbox', { name: 'Email' });
        const passwordInput = screen.getByTextId('password');

        fireEvent.change(emailInput, { target: { name: 'email', value: email } });
        fireEvent.change(passwordInput, { target: { name: 'password', value: password} });

        const logInForm = screen.getByLabelText('submit-form');
        fireEvent.submit(logInForm);

        expect(mockStartLoginUserWithEmailPassword).toHaveBeenCalledWith({ email, password });
    });
});