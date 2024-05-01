
import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './index.css'; 

class TaskSummaryPage extends Component {
  render() {
    const { tasks } = this.props;
    
    const taskData = tasks.map(task => ({ name: task.name, completed: task.status === 'completed' ? 1 : 0 }));

    return (
      <div className="task-summary-container">
        <h2 className="task-summary-header">Task Summary</h2>
        <div className="chart-container">
          <BarChart width={500} height={300} data={taskData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    );
  }
}

export default TaskSummaryPage;
