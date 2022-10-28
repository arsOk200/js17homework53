import React from 'react';

interface formProps {
  value:React.ChangeEventHandler<HTMLInputElement>;
  addTask:React.MouseEventHandler;
}


const TaskForm:React.FC<formProps> = props => {
    return (
      <div className="form-wrapper">
        <form className="form">
          <input className="input" placeholder="ваше сообщение" onChange={props.value}/>
          <button onClick={props.addTask} className='btn'>Add</button>
        </form>
      </div>
    );
};

export default TaskForm;