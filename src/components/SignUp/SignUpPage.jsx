import React from 'react';
import SignUpForm from './SignUpForm';
import { FirebaseContext } from '../Firebase';
import './SignUpPage.scss';

const SignUpPage = () => (
    <div className="signup-container">
        <div className="card-top">
            <h1>Sign Up</h1>
        </div>
        <div className="card-bottom">
            <FirebaseContext.Consumer>
                {firebase => <SignUpForm firebase={firebase} />}
            </FirebaseContext.Consumer>
        </div>
    </div>
);

export default SignUpPage;