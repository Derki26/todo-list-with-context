
import { createContext, useContext, useReducer } from 'react';

const TodoListContext = createContext();

const initialState = {
  tasks: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
};

const TodoListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTask = task => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const deleteTask = taskId => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <TodoListContext.Provider value={{ tasks: state.tasks, addTask, deleteTask }}>
      {children}
    </TodoListContext.Provider>
  );
};

const useTodoList = () => {
  const context = useContext(TodoListContext);
  if (!context) {
    throw new Error('useTodoList must be used within a TodoListProvider');
  }
  return context;
};

export { TodoListProvider, useTodoList };
