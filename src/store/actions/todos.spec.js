import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    TODO_CREATE, TODO_SET_COMPLETE, TODO_EDIT,
} from './types';
import { createTodo, setCompleteTodo, editTodo } from './todos';

const mockGetFirebase = () => ({
    auth: jest.fn(() => ({
        currentUser: { uid: 1 },
    })),
});

const mockGetFirestore = () => ({
    collection: jest.fn(() => ({
        add: jest.fn(),
        doc: jest.fn((id) => ({
            update: jest.fn(),
        })),
    })),
});

const mockStore = configureMockStore([thunk.withExtraArgument({
    getFirestore: mockGetFirestore,
    getFirebase: mockGetFirebase,
})]);

describe('todo actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('should create a todo create action', () => {
        const expectedActions = [{ type: TODO_CREATE }];

        return store.dispatch(createTodo()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a todo set complete action', () => {
        const expectedActions = [{ type: TODO_SET_COMPLETE }];

        return store.dispatch(setCompleteTodo(1, true)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create a todo edit action', () => {
        const expectedActions = [{ type: TODO_EDIT }];

        return store.dispatch(editTodo(1, 'new body')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
