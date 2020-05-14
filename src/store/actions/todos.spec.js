import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    TODO_CREATE, TODO_SET_COMPLETE, TODO_EDIT, TODO_DELETE,
} from './types';
import {
    createTodo, setCompleteTodo, editTodo, deleteTodo,
} from './todos';

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
            delete: jest.fn(),
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

    it('should create a todo create action', async () => {
        expect.assertions(1);
        const expectedActions = [{ type: TODO_CREATE }];

        await store.dispatch(createTodo());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create a todo set complete action', async () => {
        expect.assertions(1);
        const expectedActions = [{ type: TODO_SET_COMPLETE }];

        await store.dispatch(setCompleteTodo(1, true));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create a todo edit action', async () => {
        expect.assertions(1);
        const expectedActions = [{ type: TODO_EDIT }];

        await store.dispatch(editTodo(1, 'new body'));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should create a todo delete action', async () => {
        expect.assertions(1);
        const expectedActions = [{ type: TODO_DELETE }];

        await store.dispatch(deleteTodo(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
