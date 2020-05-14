import React from 'react';
import { useDispatch } from 'react-redux';
import { setCompleteTodo, editTodo, deleteTodo } from '../../store/actions/todos';
import './TodoItem.scss';

const TodoItem = ({ todoId, body, complete }) => {
    const dispatch = useDispatch();

    const onCheckboxChange = (event) => dispatch(setCompleteTodo(todoId, event.target.checked));

    const onBodyBlur = (event) => dispatch(editTodo(todoId, event.target.value));
    const onBodyKeyUp = (event) => {
        if (event.key === 'Enter') {
            dispatch(editTodo(todoId, event.target.value));
        }
    };

    const onDeleteClicked = (event) => dispatch(deleteTodo(todoId));

    return (
        <div className="todo-item">
            <input
                data-testid="complete"
                name="complete"
                type="checkbox"
                checked={complete}
                onChange={onCheckboxChange}
            />
            <input
                name="body"
                type="text"
                defaultValue={body}
                onKeyUp={onBodyKeyUp}
                onBlur={onBodyBlur}
            />
            <button
                data-testid="delete-btn"
                type="button"
                className="delete-btn"
                label="delete"
                onClick={onDeleteClicked}
            />
        </div>
    );
};

export default TodoItem;
