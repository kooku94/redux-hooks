const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/ADD';
const TOGGLE_CHECK = 'todos/TOGGLE_CHECK';
const REMOVE = 'todos/REMOVE';

// let id = 0;
// export const changeInput = input => dispatch({ type: CHANGE_INPUT, payload: input });
// export const insert = text => dispatch({
//   type: INSERT,
//   payload: {
//     id: ++id,
//     text
//   }
// });
// export const toggleCheck = id => dispatch({ type: TOGGLE_CHECK, payload: id });
// export const remove = id => dispatch({ type: REMOVE, payload: id });

const initialState = {
  input: '',
  todos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat({ ...action.payload, done: false })
      };
    case TOGGLE_CHECK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                done: !todo.done
              }
            : todo
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

export default todos;
