import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import TodoItem from './TodoItem';

const mockStore = configureStore([]);

describe('TodoItem', () => {
    let store;

    beforeEach(() => {
        store = mockStore({ });
        store.dispatch = jest.fn();
    });

    it('should render a todo item based on props', () => {
        const body = 'finish this app';
        const complete = false;
        const dom = render(<Provider store={store}><TodoItem body={body} complete={complete} /></Provider>);

        expect(dom.getByDisplayValue(body)).toBeInTheDocument();
        const cbComplete = dom.getByTestId('complete');
        expect(cbComplete).not.toBeChecked();
    });

    it('should dispatch an action when checkbox clicked', () => {
        const body = 'finish this app';
        const complete = false;
        const dom = render(<Provider store={store}><TodoItem body={body} complete={complete} /></Provider>);

        const cbComplete = dom.getByTestId('complete');
        fireEvent.click(cbComplete);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should dispatch an action when the body is changed and enter is pressed', () => {
        const body = 'finish this app';
        const complete = false;
        const dom = render(<Provider store={store}><TodoItem body={body} complete={complete} /></Provider>);

        const bodyInput = dom.getByDisplayValue(body);
        fireEvent.change(bodyInput, { target: { value: 'a new body' } });
        fireEvent.keyUp(bodyInput, { key: 'Enter' });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
