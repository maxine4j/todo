import React from 'react';
import SignUpForm from './SignUpForm';
import './SignUpPage.scss';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';

const SignUpPage = () => (
    <div className="signup-container">
        <div className="card-top">
            <h1>Sign Up</h1>
        </div>
        <div className="card-bottom">
            <SignUpForm />
            <p className="signin-msg">
                Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>.
            </p>
        </div>
    </div>
);

export default SignUpPage;