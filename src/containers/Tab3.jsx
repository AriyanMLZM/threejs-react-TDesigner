import React, { useState } from 'react'

import { Button3 } from '../components'

const Tab3 = ({ props }) => {
  const handleClick = (ind) => {
    switch (ind) {
      case 0:
      case 1:
      case 2:
        props.handleLogoP(ind)
        break
      case 3:
        props.handleLogoS(0)
        break
      case 4:
        props.handleLogoS(1)
        break
      case 5:
        props.handleLogoS(2)
        break
    }
  }
  return (
    <section
      style={{
        borderColor: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
      }}
      className="absolute gap-1 py-2 select-none border-[2px] bg-[#000]/50 rounded-full flex flex-col items-center z-1 md:top-[50%] top-[68%] right-[15px] translate-y-[-50%] md:w-[70px] w-[60px]"
    >
      <h2
        style={{
          color: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
        }}
        className='md:text-[20px] text-[18px] font-bold md:mt-[-50px] md:mb-4 mt-[-40px] mb-[12px]'
      >
        LOGO
      </h2>
      <h2
        style={{
          color: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
        }}
        className='md:text-[20px] text-[18px] font-bold'
      >
        Pos
      </h2>
      <Button3
        props={{
          active: props.logoP === 0 ? true : false,
          color: props.color,
          ind: 0,
          text: 'L',
        }}
        funcs={{ handleClick }}
      />
      <Button3
        props={{
          active: props.logoP === 1 ? true : false,
          color: props.color,
          ind: 1,
          text: 'M',
        }}
        funcs={{ handleClick }}
      />
      <Button3
        props={{
          active: props.logoP === 2 ? true : false,
          color: props.color,
          ind: 2,
          text: 'R',
        }}
        funcs={{ handleClick }}
      />
      <h2
        style={{
          color: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
        }}
        className='md:text-[20px] text-[18px] font-bold mt-2'
      >
        Size
      </h2>
      <Button3
        props={{
          active: props.logoS === 0 ? true : false,
          color: props.color,
          ind: 3,
          text: 'S',
        }}
        funcs={{ handleClick }}
      />
      <Button3
        props={{
          active: props.logoS === 1 ? true : false,
          color: props.color,
          ind: 4,
          text: 'M',
        }}
        funcs={{ handleClick }}
      />
      <Button3
        props={{
          active: props.logoS === 2 ? true : false,
          color: props.color,
          ind: 5,
          text: 'L',
        }}
        funcs={{ handleClick }}
      />
    </section>
  )
}

export default Tab3
