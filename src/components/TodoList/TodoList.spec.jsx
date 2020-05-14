import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import TodoList from './TodoList';

const mockStore = configureStore([]);

describe('TodoList', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            firebase: {
                auth: {
                    uid: 1,
                },
            },
            firestore: {
                ordered: {
                    myTodos: [
                        {
                            id: 1,
                            body: 'one',
                            complete: false,
                        },
                        {
                            id: 2,
                            body: 'two',
                            complete: true,
                        },
                        {
                            id: 3,
                            body: 'three',
                            complete: true,
                        },
                    ],
                },
            },
        });
        store.dispatch = jest.fn();
    });

    it('should render the todo list from the store', () => {
        const dom = render(<Provider store={store}><TodoList /></Provider>);

        expect(dom.getByDisplayValue('one')).toBeInTheDocument();
        expect(dom.getByDisplayValue('two')).toBeInTheDocument();
        expect(dom.getByDisplayValue('three')).toBeInTheDocument();
    });
});
