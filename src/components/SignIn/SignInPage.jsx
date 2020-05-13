import React from 'react';
import SignInForm from './SignInForm';
import { FirebaseContext } from '../Firebase';
import './SignInPage.scss';

const SignInPage = () => (
    <div className="signup-container">
        <div className="card-top">
            <h1>Sign In</h1>
        </div>
        <div className="card-bottom">
            <FirebaseContext.Consumer>
                {firebase => <SignInForm firebase={firebase} />}
            </FirebaseContext.Consumer>
        </div>
    </div>
);

export default SignInPage;