// src/store.js
import { createStore } from 'redux';
import todosReducer from './reducers/todo-reducer'

const store = createStore(todosReducer);

export default store;
