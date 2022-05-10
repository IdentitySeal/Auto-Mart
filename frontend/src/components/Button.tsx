import React from 'react'

interface IButton {
    title:string;
    onClick:() => void;
}
const Button = (props:IButton) => {
  return (
      <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" onClick={props.onClick}>
          {props.title}
      </button>
  )
}

export default Button