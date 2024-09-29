import React from 'react'

const Button3 = ({ props, funcs }) => {
  return (
    <button
      type="button"
      className={`flex text-white md:text-[20px] text-[18px] justify-center items-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full
      } ${!props.active && 'md:hover:bg-gray-700'}`}
      style={{
        backgroundColor: props.active
          ? `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`
          : '',
      }}
      onClick={() => {
        funcs.handleClick(props.ind)
      }}
    >
      {props.text}
    </button>
  )
}

export default Button3
