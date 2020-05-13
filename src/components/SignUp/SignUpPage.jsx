import React from 'react';
import SignUpForm from './SignUpForm';
import { FirebaseContext } from '../Firebase';
import './SignUpPage.scss';

const SignUpPage = () => (
    <div className="signup-container">
        <h1>Sign Up</h1>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default SignUpPage;