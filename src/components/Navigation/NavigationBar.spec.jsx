import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('NavigationBar', () => {
    it('should render the anon navigation links', () => {
        const store = mockStore({
            firebase: {
                auth: {
                    uid: undefined,
                }
            }
        });

        const dom = render(
            <Provider store={store}>
                <MemoryRouter>
                    <NavigationBar />
                </MemoryRouter>
            </Provider>
        );

        expect(dom.getByText('Home')).toBeInTheDocument();
        expect(dom.getByText('Sign Up')).toBeInTheDocument();
        expect(dom.getByText('Sign In')).toBeInTheDocument();
    });

    it('should render the authed navigation links', () => {
        const store = mockStore({
            firebase: {
                auth: {
                    uid: 123,
                }
            }
        });

        const dom = render(
            <Provider store={store}>
                <MemoryRouter>
                    <NavigationBar />
                </MemoryRouter>
            </Provider>
        );

        expect(dom.getByText('Home')).toBeInTheDocument();
        expect(dom.getByText('Sign Out')).toBeInTheDocument();
    });
});