import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUpForm from './SignUpForm';


describe('SignUpForm', () => {
    it('should render the form fields', () => {
        const dom = render(<SignUpForm/>);

        expect(dom.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(dom.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(dom.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(dom.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
        
        const signUpBtn = dom.getByText('Sign Up');
        expect(signUpBtn).toBeInTheDocument();
        expect(signUpBtn).toBeDisabled();
    });

    it('should enable the submit button when fields are valid', () => {
        const dom = render(<SignUpForm/>);

        const signUpBtn = dom.getByText('Sign Up');
        const userName = dom.getByPlaceholderText('Username');
        const email = dom.getByPlaceholderText('Email');
        const password = dom.getByPlaceholderText('Password');
        const passwordConfirm = dom.getByPlaceholderText('Confirm Password');

        expect(signUpBtn).toBeInTheDocument();
        expect(signUpBtn).toBeDisabled();

        fireEvent.change(userName, { target: { value: 'validuser' } });
        expect(signUpBtn).toBeDisabled();

        fireEvent.change(email, { target: { value: 'valid@email.com' } });
        expect(signUpBtn).toBeDisabled();

        fireEvent.change(password, { target: { value: 'password123' } });
        expect(signUpBtn).toBeDisabled();

        fireEvent.change(passwordConfirm, { target: { value: 'different321' } });
        expect(signUpBtn).toBeDisabled();

        fireEvent.change(passwordConfirm, { target: { value: 'password123' } });
        expect(signUpBtn).toBeEnabled();

        fireEvent.change(email, { target: { value: 'invalid.email.com' } });
        expect(signUpBtn).toBeDisabled();
    });
});