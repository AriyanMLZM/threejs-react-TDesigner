import React from 'react'

import { colors, file, bot } from '../assets/icons'
import { Button } from '../components'

const Tab2 = () => {
  return (
    <section className="absolute border-[2px] border-green-500 bg-[#000]/50 rounded-full flex flex-col items-center justify-around z-1 md:top-[50%] top-[77%] left-[15px] translate-y-[-50%] md:w-[70px] md:h-[220px] w-[60px] h-[210px]">
      <Button props={{ img: colors, active: true }} />
      <Button props={{ img: file, active: false }} />
      <Button props={{ img: bot, active: false }} />
    </section>
  )
}

export default Tab2
