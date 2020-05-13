import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignInForm from './SignInForm';


describe('SignInForm', () => {
    it('should render the form fields', () => {
        const dom = render(<SignInForm/>);

        expect(dom.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(dom.getByPlaceholderText('Password')).toBeInTheDocument();
        
        const signUpBtn = dom.getByText('Sign In');
        expect(signUpBtn).toBeInTheDocument();
        expect(signUpBtn).toBeDisabled();
    });

    it('should enable the submit button when fields are valid', () => {
        const dom = render(<SignInForm/>);

        const signInBtn = dom.getByText('Sign In');
        const email = dom.getByPlaceholderText('Email');
        const password = dom.getByPlaceholderText('Password');

        expect(signInBtn).toBeInTheDocument();
        expect(signInBtn).toBeDisabled();

        fireEvent.change(email, { target: { value: 'valid@email.com' } });
        expect(signInBtn).toBeDisabled();

        fireEvent.change(password, { target: { value: 'password123' } });
        expect(signInBtn).toBeEnabled();

        fireEvent.change(email, { target: { value: '' } });
        expect(signInBtn).toBeDisabled();
    });
});