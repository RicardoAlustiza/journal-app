import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn, startCreatingUserWithEmailPassword, startLoginUserWithEmailPassword, startLogOut } from '../../../src/store/auth/thunks';
import { testUser } from '../../fixtures/authFixtures';
import { logOutFirebase, registerUserWithEmailAndPassword, signInWithGoogle, logInUserWithEmailPassword } from '../../../src/firebase/providers';
import { clearNotesLogOut } from '../../../src/store/journal';

jest.mock('../../../src/firebase/providers');

describe('AuthThunks', () => {
    
    const dispatch = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should invoke checkingAuthentication', async () => {
        
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test('should invoke checkingCredentials and login in startGoogleSignIn', async () => {
        const loginData = {
            ok: true,
            ...testUser
        };

        await signInWithGoogle.mockResolvedValue(loginData);

        //thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('should invoke checkingCredentials and logout in startGoogleSignIn', async () => {
        const errorMessage = 'An error occurred';
        const loginData = {
            ok: false,
            errorMessage
        };

        await signInWithGoogle.mockResolvedValue(loginData);

        //thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('should invoke checkingCredentials, registerUserWithEmailAndPassword and login in startCreatingUserWithEmailPassword', async () => {
        const loginData = {
            ok: true,
            ...testUser
        };

        const formData = {
            email: testUser.email,
            password: '123456',
        };

        await registerUserWithEmailAndPassword.mockResolvedValue(formData);

        //thunk
        await startCreatingUserWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('should invoke checkingCredentials, registerUserWithEmailAndPassword and logout in startCreatingUserWithEmailPassword', async () => {
        const errorMessage = 'An error occurred';
        const loginData = {
            ok: false,
            errorMessage
        };

        const formData = {
            email: testUser.email,
            password: '123456',
        };

        await registerUserWithEmailAndPassword.mockResolvedValue(loginData);

        //thunk
        await startCreatingUserWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('should invoke checkingCredentials, logInUserWithEmailPassword and login in startLoginUserWithEmailPassword', async () => {
        const loginData = {
            ok: true,
            ...testUser
        };

        const formData = {
            email: testUser.email,
            password: '123',
        };

        await logInUserWithEmailPassword.mockResolvedValue(formData);

        //thunk
        await startLoginUserWithEmailPassword(formData)(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('should invoke checkingCredentials, logInUserWithEmailPassword and logout in startLoginUserWithEmailPassword', async () => {
        const errorMessage = 'An error occurred';
        const loginData = {
            ok: false,
            errorMessage
        };

        const formData = {
            email: testUser.email,
            password: '123',
        };

        await logInUserWithEmailPassword.mockResolvedValue(loginData);

        //thunk
        await startLoginUserWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('should invoke logOutFirebase, clearNotesLogOut and logout in startLogOut', async () => {
        //thunk
        await startLogOut()(dispatch);

        expect(logOutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogOut());
        expect(dispatch).toHaveBeenCalledWith(logout());
    });
});