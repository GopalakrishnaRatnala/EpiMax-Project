import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import TaskAssignment from './components/TaskAssignment';
import TaskSummaryPage from './components/TaskSummaryPage';
import './App.css'; 

class App extends Component {
  state = {
    tasks: [
      { id: 1, name: 'Learn HTML', description: 'Build both Static Web Site', dueDate: '2024-05-10', status: 'pending', assignedTo: null },
      { id: 2, name: 'Learn CSS', description: 'Learn media queries ', dueDate: '2024-05-15', status: 'pending', assignedTo: null },
      { id: 3, name: 'Learn Java', description: 'Learn java programing', dueDate: '2024-05-10', status: 'pending', assignedTo: null },
      { id: 4, name: 'Learn JavaScript', description: 'Build best UI', dueDate: '2024-05-15', status: 'completed', assignedTo: null },
      { id: 5, name: 'Learn Python', description: 'Learn Pandas', dueDate: '2024-05-10', status: 'completed', assignedTo: null },
      { id: 6, name: 'Learn React.Js', description: 'Build Todo Clone', dueDate: '2024-05-15', status: 'completed', assignedTo: null },
      
    ],
    users: [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      
    ],
    teams: [
      { id: 1, name: 'Team 1' },
      { id: 2, name: 'Team 2' },
      
    ],
    selectedTask: null 
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
      selectedTask: null 
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
      <div className="container"> 
        <div className="header">
          <h1>Task Manager</h1>
          <p>Manage your tasks efficiently</p>
        </div>
        <AddTaskForm onAddTask={this.handleAddTask} />
        <TaskList tasks={tasks} onTaskStatusUpdate={this.handleTaskStatusUpdate} onTaskSelection={this.handleTaskSelection} selectedTask={selectedTask} users={users} teams={teams}/>
        <TaskAssignment users={users} teams={teams} onAssignTask={this.handleAssignTask} selectedTask={selectedTask} />
        <TaskSummaryPage tasks={tasks} />
      </div>
    );
  }
}

export default App;