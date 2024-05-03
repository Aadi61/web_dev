import React, { Component } from 'react';
import '../styles.css'; // Import the CSS file

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  // Function to add a new task
  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() !== '') {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: ''
      });
    }
  };

  // Function to delete a task
  deleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks, newTask } = this.state;
    return (
      <div className="container">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
          placeholder="Add a new task"
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
