import React from 'react'

const Button = ({ props, funcs }) => {
  return (
    <button
      type="button"
      className={`flex justify-center items-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full
      } ${!props.active && 'md:hover:bg-gray-700'}`}
      style={{
        backgroundColor: props.active
          ? `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`
          : '',
      }}
      onClick={() => {
        funcs.changeTab(props.ind)
      }}
    >
      <img
        className="md:w-[35px] w-[30px]"
        draggable={false}
        src={props.img}
        alt="icon"
      />
    </button>
  )
}

export default Button
