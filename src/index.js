/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore, createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import reducers from './store/reducers';
import * as serviceWorker from './serviceWorker';
import App from './App';
import firebase from './store/firebase';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk.withExtraArgument({
            getFirestore,
            getFirebase,
        })),
        reduxFirestore(firebase),
    ),
);

const rrfProps = {
    firebase,
    config: {
        attachAuthIsReady: true,
        useFirestoreForProfile: true,
        userProfile: 'users',
    },
    dispatch: store.dispatch,
    createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
    const auth = useSelector((state) => state.firebase.auth);
    if (!isLoaded(auth)) return <div />;
    return children;
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
