import React, { useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import toDoData from "../../Assets/Data/todos.json";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () => {
  const [todos,setTodos] = useState(toDoData)

  return (
    <div className="container my-2 mx-5" >
    {todos.map((item,index)=>{
        return <ToDoItem item={item} key={index}/>
    })}
    </div>
  );
};

export default ToDoList;
