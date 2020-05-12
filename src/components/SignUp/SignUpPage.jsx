import React from 'react';
import SignUpForm from './SignUpForm';
import './SignUpPage.scss';

const SignUpPage = ({ firebase }) => (
    <div className="signup-container">
        <h1>Sign Up</h1>
        <SignUpForm firebase={firebase} />
    </div>
);

export default SignUpPage;