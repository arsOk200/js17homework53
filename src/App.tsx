import React, {useState} from 'react';
import './App.css';
import TaskForm from "./form/TaskForm";
import Task from "./task/task";


function App() {
  const [tasks, setTasks] = useState([
    {text:'buy milk and bread', id:'1'},
    {text:'go to the party', id:'2'},
    {text:'learn French', id:'3'},
  ]);

  const randomId = () => {
    let random  = Math.random();
    let randomString:string = String(random);
    return randomString;
  };

  const [value, setValue] = useState('');

  const currentValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const addTask = (e:any) =>{
    e.preventDefault();
    setTasks([
      ...tasks, {
        id:randomId(),
        text:String(value),
      }
    ]);
  };

  function deleteTask(id:string) {
    const index = tasks.findIndex(p => p.id ===id);
    const tasksCopy = [...tasks];
    console.log('deleted '+id);
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }

  return (
    <div className="App">
      <h1>ТуДу Апп</h1>
      <TaskForm
        addTask={addTask}
        value={event => currentValue(event)}
      />
      <div className="tasks">
        {tasks.map((task)=>
          <Task onDeleteTask={() => deleteTask(task.id)}
                task={task.text}
                 id={task.id}
                 key={task.id}
          />)}
      </div>
     </div>
  );
}

export default App;
