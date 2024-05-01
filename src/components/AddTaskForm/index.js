// AddTaskForm.js

import React, { Component } from 'react';

import "./index.css"

class AddTaskForm extends Component {
  state = {
    name: '',
    description: '',
    dueDate: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description, dueDate } = this.state;
    if (!name.trim() || !description.trim() || !dueDate) {
      alert('Please fill in all fields.');
      return;
    }
    this.props.onAddTask({ name, description, dueDate });
    this.setState({ name: '', description: '', dueDate: '' });
  }

  render() {
    const { name, description, dueDate } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className='form-container'>
        <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Task Name" />
        <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="Task Description" />
        <input type="date" name="dueDate" value={dueDate} onChange={this.handleChange} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default AddTaskForm;
