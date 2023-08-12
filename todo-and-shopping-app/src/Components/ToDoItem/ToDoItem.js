import React from "react";
import "./ToDoItem.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const ToDoItem = (props) => {
  return (
    <div>
        <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.item.id}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {props.item.todo}
        </h6>
      </div>
    </div>
    </div>
  );
};

export default ToDoItem;
