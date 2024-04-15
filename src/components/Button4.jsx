import React from 'react'

const Button4 = ({ props }) => {
  return (
    <button
      type="button"
      style={{
        background: props.active
          ? `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`
          : '',
        borderColor: !props.active
          ? `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`
          : '',
        borderWidth: !props.active ? `1px` : '',
      }}
      className={`text-white w-[100px] h-[32px] m-1 rounded-full ${
        !props.active && 'md:hover:bg-gray-700'
      }`}
      onClick={() => props.handleClick(props.ind)}
    >
      {props.text}
    </button>
  )
}

export default Button4
