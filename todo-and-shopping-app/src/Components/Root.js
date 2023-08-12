import React from 'react'
import NavigationBar from './NavigationBar/NavigationBar'
import "../App.css"
import Home from './Home/Home'
import { Outlet } from 'react-router-dom';


const Root = () => {
  return (
    <>
    <NavigationBar/>
    
    <Outlet/>
    </>
  )
}

export default Root