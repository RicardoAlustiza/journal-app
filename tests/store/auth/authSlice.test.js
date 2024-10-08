import { authSlice, login, logout, checkingCredentials } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState, testUser } from "../../fixtures/authFixtures";

describe('Auth Slice', () => {

    test('should return the initial state', () => {
        const state = authSlice.reducer(initialState, {}); 
        
        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);
    });

    test('should handle login', () => {
        const state = authSlice.reducer(initialState, login(testUser));

        expect(state).toEqual({
            status: 'authenticated',
            uid: testUser.uid,
            email: testUser.email,
            displayName: testUser.displayName,
            photoURL: testUser.photoURL,
            errorMessage: null
        });
    });

    test('should handle logout', () => {
        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual({
            status: 'unauthenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });
    });

    test('should handle logout with error message', () => {
        const errorMessage = 'An error occurred';
        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));

        expect(state).toEqual({
            status: 'unauthenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage
        });
    });

    test('should handle checkingCredentials', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials());

        expect(state.status).toBe('checking');
    });
});