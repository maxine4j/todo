import React, { useState } from 'react';
import './SignInForm.scss';

const SignInForm = ({ firebase }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isFormValid = 
        email !== '' &&
        password !== '';

    const signInSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            firebase.signInWithEmailAndPassword(email, password)
            .then((authUser) => console.log("authed a user!"))
            .catch((err) => setError(err));
        }
    };

    return (
        <form onSubmit={signInSubmit}>
            {error && <p className="error">{error.message}</p>}
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
            <button 
                className="btn-primary" 
                disabled={!isFormValid} 
                type="submit">
                    Sign In
            </button>
        </form>
    );
}

export default SignInForm;