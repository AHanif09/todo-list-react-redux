import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/action';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(editTodo(todo.id, editedText));
        setIsEditing(false);
    };

    return (
        <li className={`todo-item ${isEditing ? 'editing' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            {isEditing ? (
                <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                />
            ) : (
                <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            )}
            <button className="action-edit" onClick={handleEdit}>Edit</button>
            <button className="action-delete" onClick={handleDelete}>Delete</button>
            {isEditing && (
                <button onClick={handleSave} className="save-button">
                Save
                </button>
            )}
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
};

export default TodoItem;
