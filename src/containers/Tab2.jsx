import React from 'react'

import { colors, file, bot } from '../assets/icons'
import { Button, ColorPicker } from '../components'

const Tab2 = ({ props }) => {
  return (
    <>
      <section
        style={{
          borderColor: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
        }}
        className="absolute select-none border-[2px] bg-[#000]/50 rounded-full flex flex-col items-center justify-around z-1 md:top-[50%] top-[77%] left-[15px] translate-y-[-50%] md:w-[70px] md:h-[220px] w-[60px] h-[210px]"
      >
        <Button props={{ img: colors, active: true }} color={props.color} />
        <Button props={{ img: file, active: false }} color={props.color} />
        <Button props={{ img: bot, active: false }} color={props.color} />
      </section>
      <section className="absolute md:top-[50%] top-[77%] left-[90px] translate-y-[-50%] ">
        <ColorPicker props={props} />
      </section>
    </>
  )
}

export default Tab2
