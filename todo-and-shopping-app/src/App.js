import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import Root from "./Components/Root";
import "./App.css"
import ToDoList from "./Components/ToDoList/ToDoList";

const router = createBrowserRouter([
  {path: '/', 
  element : <Root/>,
  children : [
    {path: 'home', element : <Home/>},
    {path: 'products', element: <ProductList/>},
    {path: 'todos', element:<ToDoList/>}
  ]
}
  
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
