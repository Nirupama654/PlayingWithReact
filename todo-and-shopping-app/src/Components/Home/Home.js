import React from "react";
import { Link,useNavigate } from "react-router-dom";
import todoImg from "../../Assets/Images/to-do-list.png";
import cartImg from "../../Assets/Images/carts.png";
import './Home.css'
import Button from "../Button/Button";

const Home = () => {
  const toDoLabel = "Go to To Do List";
  const cartLabel =  "Go to Shopping"
  
  return (
    <div className="category">
      <div className="catalog">
        <div>
        <img src={todoImg}></img>
        </div>
        <div>
        <Link to="/todos" className="myBtn">{toDoLabel}</Link>
        </div>
      </div>
      <div className="catalog">
        <div>
        <img src={cartImg}></img>
        </div>
        <div>
        <Link to="/products" className="myBtn">{cartLabel}</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
