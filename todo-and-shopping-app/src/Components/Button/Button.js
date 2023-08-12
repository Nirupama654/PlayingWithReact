import React from 'react'
import './Button.css'

const Button = (props) => {
    console.log(props.function)
  return (
    <button className='myBtn' onClick={props.function}>
        {props.label}
    </button>
  )
}

export default Button