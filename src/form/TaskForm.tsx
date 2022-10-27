import React from 'react';

const TaskForm = () =>  {
    return (
      <div className="form-wrapper">
        <form className="form">
          <input type="text" className="input"/>
          <button className='btn'>Add</button>
        </form>
      </div>
    );
};

export default TaskForm;