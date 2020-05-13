import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';
import './SignInPage.scss';
import * as ROUTES from '../../routes';

const SignInPage = () => (
    <div className="signup-container">
        <div className="card-top">
            <h1>Sign In</h1>
        </div>
        <div className="card-bottom">
            <SignInForm />
            <p className="signup-msg">
                Don&apos;t have an account?
                {' '}
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                .
            </p>
        </div>
    </div>
);

export default SignInPage;
