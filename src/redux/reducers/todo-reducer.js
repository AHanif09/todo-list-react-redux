const initialState = {
    todos: [],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
            todos: [
                ...state.todos,
                {
                id: Date.now(),
                text: action.payload,
                completed: false,
                },
            ],
            };
        case 'TOGGLE_TODO':
            return {
            todos: state.todos.map((todo) =>
                todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo
            ),
            };

        case 'DELETE_TODO':
            return {
            todos: state.todos.filter((todo) => todo.id !== action.payload),
            };

        case 'EDIT_TODO':
            return {
            todos: state.todos.map((todo) =>
                todo.id === action.payload.id
                ? { ...todo, text: action.payload.text }
                : todo
            ),
            };
            
        default:
            return state;
    }
};

export default todosReducer;
