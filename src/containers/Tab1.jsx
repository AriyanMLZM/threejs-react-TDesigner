import React from 'react'

import { logo, full, save } from '../assets/icons'
import { Button2 } from '../components'

const Tab1 = ({ props }) => {
  const handleClick = (ind) => {
    switch (ind) {
      case 1:
        props.handleLogo()
        break
      case 2:
        props.handleFull()
        break
    }
  }

  return (
    <section
      style={{
        borderColor: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
      }}
      className="absolute select-none border-[2px] bg-[#000]/50 rounded-full flex items-center justify-around z-1 bottom-[15px] left-[50%] translate-x-[-50%] md:w-[220px] md:h-[70px] w-[210px] h-[60px]"
    >
      <Button2
        props={{ img: logo, active: props.isLogo, color: props.color, ind: 1 }}
        funcs={{ handleClick }}
      />
      <Button2
        props={{ img: full, active: props.isFull, color: props.color, ind: 2 }}
        funcs={{ handleClick }}
      />
      <Button2
        props={{ img: save, active: false, color: props.color, ind: 3 }}
        funcs={{ handleClick }}
      />
    </section>
  )
}

export default Tab1
