import React, { useState } from 'react';
import './SignUpForm.scss';

const SignUpForm = ({ firebase }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const isFormValid = 
        username !== '' &&
        email && email.match(/.*@.*/) &&
        password.length >= 6 &&
        password === passwordConfirm;

    const signUpSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            firebase.createUserWithEmailAndPassword(email, password)
            .then((authUser) => console.log("authed a user!"))
            .catch((err) => setError(err));
        }
    };

    return (
        <form onSubmit={signUpSubmit}>
            {error && <p className="error">{error.message}</p>}
            <input
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
            />
            <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
            />
            <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
            />
            <input
                name="password-confirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
                placeholder="Confirm Password"
            />
            <button 
                className="btn-primary" 
                disabled={!isFormValid} 
                type="submit">
                    Sign Up
            </button>
        </form>
    );
}

export default SignUpForm;