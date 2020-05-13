import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import SignUpForm from './SignUpForm';

const mockStore = configureStore([]);

describe('SignUpForm', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            auth: {
                signInError: null,
            },
        });
        store.dispatch = jest.fn();
    });

    it('should render the form fields', () => {
        const dom = render(<Provider store={store}><SignUpForm /></Provider>);

        expect(dom.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(dom.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(dom.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(dom.getByPlaceholderText('Confirm Password')).toBeInTheDocument();

        const signUpBtn = dom.getByText('Sign Up');
        expect(signUpBtn).toBeInTheDocument();
        expect(signUpBtn).toBeDisabled();
    });

    it('should enable the submit button when fields are valid', () => {
        const dom = render(<Provider store={store}><SignUpForm /></Provider>);

        const signUpBtn = dom.getByText('Sign Up');
        const userName = dom.getByPlaceholderText('Username');
        const email = dom.getByPlaceholderText('Email');
        const password = dom.getByPlaceholderText('Password');
        const passwordConfirm = dom.getByPlaceholderText('Confirm Password');

        expect(signUpBtn).toBeInTheDocument();
        expect(signUpBtn).toBeDisabled();

        // invalid
        fireEvent.change(userName, { target: { value: 'validuser' } });
        expect(signUpBtn).toBeDisabled();

        fireEvent.change(email, { target: { value: 'valid@email.com' } });
        expect(signUpBtn).toBeDisabled();

        fireEvent.change(password, { target: { value: 'password123' } });
        expect(signUpBtn).toBeDisabled();

        fireEvent.change(passwordConfirm, { target: { value: 'different321' } });
        expect(signUpBtn).toBeDisabled();

        // valid
        fireEvent.change(passwordConfirm, { target: { value: 'password123' } });
        expect(signUpBtn).toBeEnabled();

        // invalid
        fireEvent.change(email, { target: { value: 'invalid.email.com' } });
        expect(signUpBtn).toBeDisabled();
    });

    it('should dispatch an action when sign up is clicked and valid', () => {
        const dom = render(<Provider store={store}><SignUpForm /></Provider>);

        const signUpBtn = dom.getByText('Sign Up');
        const userName = dom.getByPlaceholderText('Username');
        const email = dom.getByPlaceholderText('Email');
        const password = dom.getByPlaceholderText('Password');
        const passwordConfirm = dom.getByPlaceholderText('Confirm Password');

        // invalid
        fireEvent.change(userName, { target: { value: 'validuser' } });
        fireEvent.click(signUpBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(0);

        fireEvent.change(email, { target: { value: 'valid@email.com' } });
        fireEvent.click(signUpBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(0);

        fireEvent.change(password, { target: { value: 'password123' } });
        fireEvent.click(signUpBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(0);

        fireEvent.change(passwordConfirm, { target: { value: 'different321' } });
        fireEvent.click(signUpBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(0);

        // valid
        fireEvent.change(passwordConfirm, { target: { value: 'password123' } });
        fireEvent.click(signUpBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        store.dispatch = jest.fn();

        // invalid
        fireEvent.change(email, { target: { value: 'invalid.email.com' } });
        fireEvent.click(signUpBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(0);
    });
});
