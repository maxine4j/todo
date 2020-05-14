import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    SIGNIN_SUCCESS, SIGNIN_ERROR,
    SIGNUP_SUCCESS, SIGNUP_ERROR,
    SIGNOUT_SUCCESS,
} from './types';
import { signIn, signUp, signOut } from './auth';

const validCreds = { email: 'valid@example.com', password: 'validpass123' };

const mockGetFirebase = () => ({
    auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn((email, password) => {
            // simulate signing in with the valid creds
            if (email === validCreds.email && password === validCreds.password) {
                return true;
            }
            throw Error();
        }),
        createUserWithEmailAndPassword: jest.fn((email, password) => {
            // simulate signing up, valid creds already exist as a user
            if (email === validCreds.email && password === validCreds.password) {
                throw Error();
            }
            return true;
        }),
        signOut: jest.fn(),
    })),
});

const mockStore = configureMockStore([thunk.withExtraArgument({
    getFirestore: jest.fn(),
    getFirebase: mockGetFirebase,
})]);

describe('auth actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('should create a sign in success action', () => {
        const expectedActions = [{ type: SIGNIN_SUCCESS }];

        return store.dispatch(signIn(validCreds)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a sign in error action', () => {
        const expectedActions = [{ type: SIGNIN_ERROR, err: Error() }];

        return store.dispatch(signIn({ email: 'invalid', password: '1234' })).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a sign up success action', () => {
        const expectedActions = [{ type: SIGNUP_SUCCESS }];

        return store.dispatch(signUp({ email: 'new@example.com', password: 'pass123' })).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a sign up error action', () => {
        const expectedActions = [{ type: SIGNUP_ERROR, err: Error() }];

        return store.dispatch(signUp(validCreds)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a sign out success action', () => {
        const expectedActions = [{ type: SIGNOUT_SUCCESS }];

        return store.dispatch(signOut()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
