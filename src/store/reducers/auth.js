import { 
    SIGNIN_SUCCESS, SIGNIN_ERROR, 
    SIGNUP_SUCCESS, SIGNUP_ERROR,
    SIGNOUT_SUCCESS
} from "../actions/types";

const initState = {
    signInError: null,
    signUpError: null,
}

const auth = (state=initState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                signInError: null,
            };
        case SIGNIN_ERROR:
            return { 
                ...state,
                signInError: action.error,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signUpError: null,
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                signUpError: action.error,
            }
        case SIGNOUT_SUCCESS:
            return state;
        default:
            return state;
    }
};

export default auth;