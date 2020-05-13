import firebase from '../firebase';
import 'firebase/database';
import { FETCH_TODOS } from './types';

const todos = firebase.database().child('todos');

export const createTodo = (newTodo) => async (dispatch) => {
    todos.push().set(newTodo);
};

export const completeToDo = (completeTodo) => async (dispatch) => {
    todos.child(completeToDo).remove();
};

export const fetchTodos = () => async (dispatch) => {
    todos.on('value', (snapshot) => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val(),
        });
    });
};
