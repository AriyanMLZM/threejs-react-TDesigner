import React, { useEffect, useState } from 'react'

import { Model } from '../model'
import { Tab1, Tab2, Header } from '../containers'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [color, setColor] = useState({ r: 44, g: 82, b: 44 })
  const [isLogo, setIsLogo] = useState(true)
  const [isFull, setIsFull] = useState(false)
  const [logo, setLogo] = useState('./logo.png')
  const [full, setFull] = useState('./full.png')

  const handleLogo = () => {
    setIsLogo(!isLogo)
  }
  const handleFull = () => {
    setIsFull(!isFull)
  }

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
        <Model props={{ isMobile, color, logo, isLogo, full, isFull }} />
      </section>
      <Header props={{ color }} />
      <Tab1 props={{ color, handleLogo, handleFull, isLogo, isFull }} />
      <Tab2 props={{ changeColor, color }} />
    </main>
  )
}

export default Home
