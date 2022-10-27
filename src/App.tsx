import React from 'react';
import './App.css';
import TaskForm from "./form/TaskForm";
import Task from "./task/task";

function App() {
  return (
    <div className="App">
      <TaskForm/>
      <div className="tasks">
        <Task/>
        <Task/>
      </div>
    </div>
  );
}

export default App;
