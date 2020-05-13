import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import SignInForm from './SignInForm';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('SignInForm', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            auth: {
                signInError: null,
            }
        });
        store.dispatch = jest.fn();
    });

    it('should render the form fields', () => {
        const dom = render(<Provider store={store}><SignInForm/></Provider>);

        expect(dom.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(dom.getByPlaceholderText('Password')).toBeInTheDocument();
        
        const signIpBtn = dom.getByText('Sign In');
        expect(signIpBtn).toBeInTheDocument();
        expect(signIpBtn).toBeDisabled();
    });

    it('should enable the submit button when fields are valid', () => {
        const dom = render(<Provider store={store}><SignInForm/></Provider>);

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

    it('should dispatch an action when sign in is clicked and valid', () => {
        const dom = render(<Provider store={store}><SignInForm/></Provider>);

        const signInBtn = dom.getByText('Sign In');
        const email = dom.getByPlaceholderText('Email');
        const password = dom.getByPlaceholderText('Password');

        // invalid details
        fireEvent.change(email, { target: { value: 'valid@email.com' } });
        fireEvent.change(password, { target: { value: '' } });
        fireEvent.click(signInBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(0);

        fireEvent.change(email, { target: { value: '' } });
        fireEvent.change(password, { target: { value: '' } });
        fireEvent.click(signInBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(0);

        fireEvent.change(email, { target: { value: '' } });
        fireEvent.change(password, { target: { value: 'password123' } });
        fireEvent.click(signInBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(0);

        // valid details
        fireEvent.change(email, { target: { value: 'valid@email.com' } });
        fireEvent.change(password, { target: { value: 'password123' } });
        fireEvent.click(signInBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});