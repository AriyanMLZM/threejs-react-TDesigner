import React from 'react'

import { logo, full, save } from '../assets/icons'
import { Button } from '../components'

const Tab1 = ({ props }) => {
  return (
    <section
      style={{
        borderColor: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
      }}
      className="absolute select-none border-[2px] bg-[#000]/50 rounded-full flex items-center justify-around z-1 bottom-[15px] left-[50%] translate-x-[-50%] md:w-[220px] md:h-[70px] w-[210px] h-[60px]"
    >
      <Button props={{ img: logo, active: true, color: props.color }} />
      <Button props={{ img: full, active: false, color: props.color }} />
      <Button props={{ img: save, active: false, color: props.color }} />
    </section>
  )
}

export default Tab1
