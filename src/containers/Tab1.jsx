import React from 'react'

import { logo, full, save } from '../assets/icons'
import { Button } from '../components'

const Tab1 = () => {
  return (
    <section className="absolute border-[2px] border-green-500 bg-[#000]/50 rounded-full flex items-center justify-around z-1 bottom-[15px] left-[50%] translate-x-[-50%] md:w-[220px] md:h-[70px] w-[210px] h-[60px]">
      <Button props={{ img: logo, active: true }} />
      <Button props={{ img: full, active: false }} />
      <Button props={{ img: save, active: false }} />
    </section>
  )
}

export default Tab1
