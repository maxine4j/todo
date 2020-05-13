import { 
    SIGNIN_SUCCESS, SIGNIN_ERROR, 
    SIGNUP_SUCCESS, SIGNUP_ERROR, 
    SIGNOUT_SUCCESS 
} from './types';

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email, credentials.password
        ).then(() => {
            dispatch({ type: SIGNIN_SUCCESS });
        }).catch((err) => {
            dispatch({ type: SIGNIN_ERROR, err });
        });
    }
}

export const signUp = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email, credentials.password
        ).then(() => {
            dispatch({ type: SIGNUP_SUCCESS });
        }).catch((err) => {
            dispatch({ type: SIGNUP_ERROR, err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: SIGNOUT_SUCCESS });
        });
    }
}