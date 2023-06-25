import React from "react";
import TaskForm from "./taskForm.js";
import Task from "./task.js";
import '../stylesheets/listOfTasks.css';

function ListOfTasks({ columnID, addTask, tasks,completeTask,deleteTask, changeColumnTaskToRight,changeColumnTaskToleft }) {

    const currentTasks=tasks.filter((task)=>task.columnID===columnID);
    return (
        <>

            <TaskForm onSubmit={addTask} columnID={columnID}></TaskForm>
            <div className="tasks-list-container">
                {
                    currentTasks.map((task, index) =>
                        <Task
                            key={index}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            columnID={columnID}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                            changeColumnTaskToRight={changeColumnTaskToRight}
                            changeColumnTaskToleft={changeColumnTaskToleft}></Task>
                    )
                }
            </div>
        </>

    );
}
export default ListOfTasks;