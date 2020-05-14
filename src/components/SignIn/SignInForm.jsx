import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/actions/auth';
import './SignInForm.scss';

const SignInForm = () => {
    const dispatch = useDispatch();

    const error = useSelector((state) => state.auth.signInError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = email !== '' && password !== '';

    const signInSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            dispatch(signIn({ email, password }));
        }
    };

    return (
        <form className="signin-form" onSubmit={signInSubmit}>
            {error && <p className="error">{error}</p>}
            <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
            />
            <button
                className="btn-primary"
                disabled={!isFormValid}
                type="submit"
            >
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;
