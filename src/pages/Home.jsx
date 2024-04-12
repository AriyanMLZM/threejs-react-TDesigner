import React, { useEffect, useState } from 'react'

import { Model } from '../model'
import { Tab1, Tab2, Header } from '../containers'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [color, setColor] = useState({ r: 126, g: 211, b: 33 })

  const changeColor = (rgb) => {
    setColor({ r: rgb.r, g: rgb.g, b: rgb.b })
  }

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true)
  }, [])

  const checkScreen = () => {
    if (window.innerWidth < 768) setIsMobile(true)
    else setIsMobile(false)
  }

  window.addEventListener('resize', checkScreen)

  return (
    <main className="h-screen overflow-hidden bg-center bg-main-img">
      <section className="h-full">
        <Model props={{ isMobile, color }} />
      </section>
      <Header props={{ color }} />
      <Tab1 props={{ color }} />
      <Tab2 props={{ changeColor, color }} />
    </main>
  )
}

export default Home
