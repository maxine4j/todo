import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import * as ROUTES from '../../routes';

const SignUpPage = () => (
    <div className="card">
        <div className="card-top">
            <h1>Sign Up</h1>
        </div>
        <div className="card-bottom">
            <SignUpForm />
            <p>
                Already have an account?
                {' '}
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                .
            </p>
        </div>
    </div>
);

export default SignUpPage;
