import React from 'react';

interface TaskProps{
  task:string;
  id:string;
  onDeleteTask:React.MouseEventHandler;
}

const Task:React.FC<TaskProps> = props => {
  return (
      <div className='task'>
        <div>
          <p>{props.task}</p>
        </div>
        <button className="btn" onClick={props.onDeleteTask}>delete</button>
      </div>

    );
};

export default Task;