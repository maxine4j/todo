import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import AuthedLinks from './AuthedLinks';

const mockStore = configureStore([]);

describe('AuthedLinks', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            firebase: {
                auth: {
                    isEmpty: false,
                },
            },
        });
        store.dispatch = jest.fn();
    });

    it('should render the authed navigation links', () => {
        const dom = render(<Provider store={store}><AuthedLinks /></Provider>);
        expect(dom.getByText('Sign Out')).toBeInTheDocument();
    });

    it('should dispatch an action when sign out button is clicked', () => {
        const dom = render(<Provider store={store}><AuthedLinks /></Provider>);
        const signOutBtn = dom.getByText('Sign Out');
        fireEvent.click(signOutBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
