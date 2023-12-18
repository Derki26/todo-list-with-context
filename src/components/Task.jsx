
import { useState } from 'react';
import { useTodoList } from '../context/TodoListContext';


const Task = ({ task }) => {
  const { deleteTask } = useTodoList();
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`flex justify-between items-center p-2 border ${
        isHovered ? 'bg-gray-100' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{task.text}</span>
      {isHovered && (
        <button onClick={() => deleteTask(task.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-red-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Task;
