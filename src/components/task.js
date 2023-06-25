import React from 'react';
import '../stylesheets/task.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Task({ id, text, completed, completeTask, deleteTask, columnID, changeColumnTaskToleft, changeColumnTaskToRight }) {
    return (
        <div className="tasks-container">
            {columnID !== 1 ? <div className="row" onClick={()=>changeColumnTaskToleft(id)}><AiOutlineArrowLeft /></div> : null}

            <div className={completed ? 'text-task-container completed' : 'text-task-container'}>
                {text}
            </div>
            <div className='task-icon-container'
                onClick={() => completeTask(id)}>
                <AiOutlineCheckCircle className="done-task-icon" />
            </div>
            <div className='task-icon-container'
                onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className='delete-task-icon' />
            </div>
            {columnID !== 4 ? <div className="row" onClick={()=>changeColumnTaskToRight(id)}><AiOutlineArrowRight /></div> : null}
        </div>
    );
}

export default Task;