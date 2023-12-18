
import { useState } from 'react';
import { useTodoList } from '../context/TodoListContext';
import Task from './Task';


const TodoList = () => {
  const { tasks, addTask } = useTodoList();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask({ id: Date.now(), text: newTask });
      setNewTask('');
    }
  };

  return (
    <div className="max-w-md mx-auto my-4 bg-white">
      <div className="flex mb-2">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full p-2 border mr-2"
        />
        <button onClick={handleAddTask} className="p-2 bg-blue-500 text-white btn btn-primary">
          Add Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks, add a task</p>
      ) : (
        tasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TodoList;