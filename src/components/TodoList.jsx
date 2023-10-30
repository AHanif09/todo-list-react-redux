import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions/action';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        setNewTodo('');
    }, [todos]);

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
        dispatch(addTodo(newTodo));
        }
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="add-todo">
                <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <div className="filter">
                <button className="kategori" onClick={() => setFilter('all')}>All</button>
                <button className="kategori" onClick={() => setFilter('active')}>Active</button>
                <button className="kategori" onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <ul className="todos">
                {todos.map((todo) => {
                if (filter === 'active' && todo.completed) return null;
                if (filter === 'completed' && !todo.completed) return null;
                return <TodoItem key={todo.id} todo={todo} />;
                })}
            </ul>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
};

export default TodoList;
