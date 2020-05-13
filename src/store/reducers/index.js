import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import auth from './auth';
import todos from './todos';

export default combineReducers({
    auth,
    todos,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});
