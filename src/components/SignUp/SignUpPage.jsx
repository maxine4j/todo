import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import * as ROUTES from '../../routes';

const SignUpPage = () => {
    const auth = useSelector((state) => state.firebase.auth);

    if (auth.uid) { // redirect to landing after successful sign up
        return <Redirect to={ROUTES.LANDING} />;
    }

    return (
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
};

export default SignUpPage;
