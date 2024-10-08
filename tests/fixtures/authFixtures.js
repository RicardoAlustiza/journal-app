export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated',
    uid: 'ABC123',
    email: 'test@test.com',
    displayName: 'Test User',
    photoURL: 'https://test.com/test.jpg',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'unauthenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const testUser = {
    uid: 'ABC123',
    email: 'test@test.com',
    displayName: 'Test User',
    photoURL: 'https://test.com/test.jpg',
}