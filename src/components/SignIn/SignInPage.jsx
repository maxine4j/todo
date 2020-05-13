import React from 'react';
import SignInForm from './SignInForm';
import { FirebaseContext } from '../Firebase';
import './SignInPage.scss';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';

const SignInPage = () => (
    <div className="signup-container">
        <div className="card-top">
            <h1>Sign In</h1>
        </div>
        <div className="card-bottom">
            <FirebaseContext.Consumer>
                {firebase => <SignInForm firebase={firebase} />}
            </FirebaseContext.Consumer>
            <p className="signup-msg">
                Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>.
            </p>
        </div>
    </div>
);

export default SignInPage;