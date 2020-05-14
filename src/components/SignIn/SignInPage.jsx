import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';
import * as ROUTES from '../../routes';

const SignInPage = () => {
    const auth = useSelector((state) => state.firebase.auth);

    if (auth.uid) { // redirect to landing after successful sign in
        return <Redirect to={ROUTES.LANDING} />;
    }

    return (
        <div className="card">
            <div className="card-top">
                <h1>Sign In</h1>
            </div>
            <div className="card-bottom">
                <SignInForm />
                <p>
                    Don&apos;t have an account?
                    {' '}
                    <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignInPage;
