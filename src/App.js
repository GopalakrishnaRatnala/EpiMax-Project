import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import TaskAssignment from './components/TaskAssignment';
import './App.css'; // Import CSS file

class App extends Component {
  state = {
    tasks: [
      { id: 1, name: 'Task 1', description: 'Description for Task 1', dueDate: '2024-05-10', status: 'pending', assignedTo: null },
      { id: 2, name: 'Task 2', description: 'Description for Task 2', dueDate: '2024-05-15', status: 'pending', assignedTo: null },
      { id: 3, name: 'Task 3', description: 'Description for Task 3', dueDate: '2024-05-10', status: 'pending', assignedTo: null },
      { id: 4, name: 'Task 4', description: 'Description for Task 4', dueDate: '2024-05-15', status: 'completed', assignedTo: null },
      { id: 5, name: 'Task 5', description: 'Description for Task 5', dueDate: '2024-05-10', status: 'completed', assignedTo: null },
      { id: 6, name: 'Task 6', description: 'Description for Task 6', dueDate: '2024-05-15', status: 'completed', assignedTo: null },
      // Add more tasks as needed
    ],
    users: [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      // Add more users as needed
    ],
    teams: [
      { id: 1, name: 'Team 1' },
      { id: 2, name: 'Team 2' },
      // Add more teams as needed
    ],
    selectedTask: null // Track selected task for assignment
  };

  handleAddTask = (newTask) => {
    
    this.setState(prevState => ({
      tasks: [...prevState.tasks, { id: prevState.tasks.length + 1,status: 'pending', assignedTo: null, ...newTask }]
    }));
    console.log(newTask)
  };

  handleAssignTask = (assigneeId) => {
    const { selectedTask } = this.state;
    if (!selectedTask) {
      alert('Please select a task.');
      return;
    }
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === selectedTask) {
          return { ...task, assignedTo: assigneeId };
        }
        return task;
      }),
      selectedTask: null // Reset selected task after assignment
    }));
  };

  handleTaskStatusUpdate = (taskId, status) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    }));
  };

  handleTaskSelection = (taskId) => {
    this.setState({ selectedTask: taskId });
  };

  render() {
    const { tasks, users, teams, selectedTask } = this.state;
    console.log(tasks)
    return (
      <div className="container"> {/* Apply container class */}
        <div className="header"> {/* Apply header class */}
          <h1>Task Manager</h1>
          <p>Manage your tasks efficiently</p>
        </div>
        <AddTaskForm onAddTask={this.handleAddTask} />
        <TaskList tasks={tasks} onTaskStatusUpdate={this.handleTaskStatusUpdate} onTaskSelection={this.handleTaskSelection} />
        <TaskAssignment users={users} teams={teams} onAssignTask={this.handleAssignTask} selectedTask={selectedTask} />
      </div>
    );
  }
}

export default App;