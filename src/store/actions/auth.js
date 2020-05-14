import {
    SIGNIN_SUCCESS, SIGNIN_ERROR,
    SIGNUP_SUCCESS, SIGNUP_ERROR,
    SIGNOUT_SUCCESS,
} from './types';

export const signIn = (credentials) => async (dispatch, getState, { getFirebase }) => {
    try {
        await getFirebase().auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password);
        dispatch({ type: SIGNIN_SUCCESS });
    } catch (err) {
        dispatch({ type: SIGNIN_ERROR, err });
    }
};

export const signUp = (credentials) => async (dispatch, getState, { getFirebase }) => {
    try {
        await getFirebase().auth()
            .createUserWithEmailAndPassword(credentials.email, credentials.password);
        dispatch({ type: SIGNUP_SUCCESS });
    } catch (err) {
        dispatch({ type: SIGNUP_ERROR, err });
    }
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
    await getFirebase().auth().signOut();
    dispatch({ type: SIGNOUT_SUCCESS });
};
