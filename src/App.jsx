// App.js
import { TodoListProvider } from './context/TodoListContext';
import TodoList from './components/TodoList';
import "./App.css";


function App() {
  return (
    <TodoListProvider>
      <div className="card shrink-0 w-full shadow-2xl bg-base-100 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-secondary">Todo List</h1>
        <TodoList />
      </div>
    </TodoListProvider>
  );
}

export default App;
