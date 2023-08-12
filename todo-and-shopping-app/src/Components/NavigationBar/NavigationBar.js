import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/home" className="navHeader">To Do + Shopping App</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
