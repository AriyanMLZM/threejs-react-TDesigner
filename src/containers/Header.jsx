import React from 'react'

const Header = ({ props }) => {
  return (
    <header className="absolute select-none flex justify-center z-1 top-5 left-[50%] translate-x-[-50%] w-[80%]">
      <h1 className="text-white md:text-[30px] text-[20px]">
        Design your{' '}
        <strong
          style={{
            color: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
          }}
          className="md:text-[40px] text-[30px]"
        >
          T-shirt
        </strong>
      </h1>
    </header>
  )
}

export default Header
