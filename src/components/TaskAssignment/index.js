import React, { Component } from 'react';

import "./index.css"

class TaskAssignment extends Component {
  state = {
    selectedType: 'user', // Default selected type
    selectedUser: '',
    selectedTeam: ''
  };

  handleAssignTask = () => {
    const { selectedType, selectedUser, selectedTeam } = this.state;
    console.log(selectedTeam, selectedUser)
    console.log(true && 1)
    const { onAssignTask } = this.props;
    if (selectedType === 'user' && selectedUser) {
      onAssignTask(selectedUser);
    } else if (selectedType === 'team' && selectedTeam) {
      onAssignTask(selectedTeam);
    } else {
      alert('Please select a user or team.');
    }
    this.setState({ selectedUser: '', selectedTeam: '' });
  };

  render() {
    const { users, teams } = this.props;
    const { selectedType, selectedUser, selectedTeam } = this.state;

    return (
      <div className='assignment-container'>
        <h2>Assign Task</h2>
        <select value={selectedType} onChange={(e) => this.setState({ selectedType: e.target.value })}>
          <option value="user">User</option>
          <option value="team">Team</option>
        </select>
        {selectedType === 'user' ? (
          <select value={selectedUser} onChange={(e) => this.setState({ selectedUser: e.target.value })}>
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        ) : (
          <select value={selectedTeam} onChange={(e) => this.setState({ selectedTeam: e.target.value })}>
            <option value="">Select Team</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        )}
        <button onClick={this.handleAssignTask}>Assign Task</button>
      </div>
    );
  }
}

export default TaskAssignment;
