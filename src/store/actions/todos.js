import { TODO_EDIT, TODO_CREATE, TODO_SET_COMPLETE } from './types';

const defaultTodo = {
    body: '',
    complete: false,
};

const getTodoCollection = (firebase, firestore) => firestore.collection(`users/${firebase.auth().currentUser.uid}/todos`);
const getTodoByID = (firebase, firestore, id) => getTodoCollection(firebase, firestore).doc(id);

export const createTodo = (todo) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const todos = getTodoCollection(firebase, firestore);

    await todos.add({
        ...defaultTodo,
        ...todo,
        createdAt: new Date(),
    });
    dispatch({ type: TODO_CREATE });
};

export const setCompleteTodo = (todoID, complete) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const todo = await getTodoByID(firebase, firestore, todoID);

    await todo.update({
        complete,
    });
    dispatch({ type: TODO_SET_COMPLETE });
};

export const editTodo = (todoID, body) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const todo = await getTodoByID(firebase, firestore, todoID);

    await todo.update({
        body,
    });
    dispatch({ type: TODO_EDIT });
};
