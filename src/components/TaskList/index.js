
import React from 'react';

import "./index.css"

const TaskList = ({ tasks, onTaskStatusUpdate, onTaskSelection }) => {
  const handleStatusToggle = (taskId, status) => {
    const newStatus = status === 'pending' ? 'completed' : 'pending';
    onTaskStatusUpdate(taskId, newStatus);
  };

  const handleTaskClick = (taskId) => {
    onTaskSelection(taskId);
  };

  return (
    <div className='task-list'>
      <h2>Task List</h2 >
      <div className='all-tasks-container'> 
        <div className='pending-container'>
        <h2 className='task-container-heading'>Pending Tasks</h2>
        <ul>
          {tasks.map((task) => (
            task.status === "pending" && <li key={task.id} className={task.assignedTo ? 'task-assigned' : ''} >
            <strong>{task.name}</strong>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>{task.assignedTo}</p>
            <div>
              <input
                type="checkbox"
                checked={task.status === 'completed'}
                onChange={() => handleStatusToggle(task.id, task.status)}
              />
              <p>{task.status === 'completed' ? 'Completed' : 'Pending'}</p>
              
            </div>

            <button type='button' onClick={() => handleTaskClick(task.id)}>Assign To</button>
          </li>
          ))}
        </ul>
        </div>
        <div className='completed-container'>
        <h2 className='task-container-heading'>Completed Tasks</h2>
        <ul>
          {tasks.map((task) => (
            task.status === "completed" && <li key={task.id} className={task.assignedTo ? 'task-assigned' : ''} >
            <strong>{task.name}</strong>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>{task.assignedTo}</p>
            <div>
              <input
                type="checkbox"
                checked={task.status === 'completed'}
                onChange={() => handleStatusToggle(task.id, task.status)}
              />
              <p>{task.status === 'completed' ? 'Completed' : 'Pending'}</p>
              
            </div>

            <button type='button' onClick={() => handleTaskClick(task.id)}>Assign To</button>
          </li>
          ))}
        </ul>
        </div> 
      </div>
    </div>
  );
};

export default TaskList;
