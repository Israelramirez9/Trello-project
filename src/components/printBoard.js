import React, { useState, useEffect } from "react";
import '../stylesheets/Board.css';
import ListOfTasks from "./listOfTasks.js";
function Board() {

    const getTasks=()=>{
        let data=localStorage.getItem("tasks");
        if(data){
            return JSON.parse(data);
        }else{
            return [];
        }        
    }
    const [tasks, setTask] = useState(getTasks());

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks])

    const changeColumnTaskToleft=(id)=>{
        const currentTasks=tasks.map((task)=>{
            if(task.id===id){
                task.columnID=task.columnID-1;
            } 
            return task;   
        })
        setTask(currentTasks);
    }
    const changeColumnTaskToRight=(id)=>{
        const currentTasks=tasks.map((task)=>{
            if(task.id===id){
                task.columnID=task.columnID+1;
            }
            return task;
        })
        setTask(currentTasks);
    }
    
    const addTask = (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const currentTasks = [task, ...tasks];
            setTask(currentTasks);
        }
    }

    const deleteTask = (id) => {
        const currentTasks = tasks.filter((task) => task.id !== id);
        setTask(currentTasks);
    }

    const completeTask = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTask(currentTasks);
    }
    
    return (
        <>
            <header>
                <h1> List Of Tasks </h1>
            </header>
            <section>
                <div className="column"><h2>Column 1</h2>
                    <ListOfTasks columnID={1} 
                    changeColumnTaskToRight={changeColumnTaskToRight} 
                    changeColumnTaskToleft={changeColumnTaskToleft}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    tasks={tasks}
                    addTask={addTask}></ListOfTasks>
                </div>
                <div className="column"><h2> Column 2</h2>
                    <ListOfTasks columnID={2} 
                    changeColumnTaskToRight={changeColumnTaskToRight} 
                    changeColumnTaskToleft={changeColumnTaskToleft}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    tasks={tasks}
                    addTask={addTask}></ListOfTasks>
                </div>
                <div className="column"><h2> Column 3</h2>
                    <ListOfTasks columnID={3} 
                    changeColumnTaskToRight={changeColumnTaskToRight} 
                    changeColumnTaskToleft={changeColumnTaskToleft}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    tasks={tasks}
                    addTask={addTask}></ListOfTasks>
                </div>
                <div className="column"><h2>Column 4</h2>
                    <ListOfTasks columnID={4} 
                    changeColumnTaskToRight={changeColumnTaskToRight} 
                    changeColumnTaskToleft={changeColumnTaskToleft}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    tasks={tasks}
                    addTask={addTask}></ListOfTasks>
                </div>
            </section>
        </>);
}
export default Board;