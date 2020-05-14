import React from 'react';
import { useDispatch } from 'react-redux';
import { setCompleteTodo, editTodo } from '../../store/actions/todos';

const TodoItem = ({ todoId, body, complete }) => {
    const dispatch = useDispatch();

    const onCheckboxChange = (event) => dispatch(setCompleteTodo(todoId, event.target.checked));

    const onBodyKeyUp = (event) => {
        if (event.key === 'Enter') {
            dispatch(editTodo(todoId, event.target.value));
        }
    };

    return (
        <div>
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
            />
        </div>
    );
};

export default TodoItem;
