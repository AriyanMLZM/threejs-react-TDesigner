import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

import { Model } from '../model'
import { Tab1, Tab2, Tab3, Header } from '../containers'
import { reader, doGsap } from '../helper'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [color, setColor] = useState({ r: 223, g: 12, b: 12 })
  const [isLogo, setIsLogo] = useState(true)
  const [isFull, setIsFull] = useState(false)
  const [logoS, setLogoS] = useState(0)
  const [logoP, setLogoP] = useState(2)
  const [logo, setLogo] = useState('./logo.png')
  const [full, setFull] = useState('./full.jpg')
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)

  const tref = useRef()

  useEffect(() => {
    if (file) {
      reader(file).then((result) => setImg(result))
    }
  }, [file])

  const handleLogo = () => {
    setIsLogo(!isLogo)
  }
  const handleFull = () => {
    setIsFull(!isFull)
  }

  const handleLogoP = (ind) => {
    setLogoP(ind)
  }
  const handleLogoS = (ind) => {
    setLogoS(ind)
  }

  const changeColor = (rgb) => {
    setColor({ r: rgb.r, g: rgb.g, b: rgb.b })
  }

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true)
  }, [])

  useGSAP(() => {
    doGsap(tref)
  })

  const checkScreen = () => {
    if (window.innerWidth < 768) setIsMobile(true)
    else setIsMobile(false)
  }

  window.addEventListener('resize', checkScreen)

  return (
    <main className="h-screen overflow-hidden bg-center bg-main-img">
      <section ref={tref} className="h-full">
        <Model
          props={{ isMobile, color, logo, isLogo, full, isFull, logoP, logoS }}
        />
      </section>
      <Header props={{ color }} />
      <Tab1 props={{ color, handleLogo, handleFull, isLogo, isFull }} />
      <Tab2
        props={{ changeColor, color, setFile, file, img, setLogo, setFull }}
      />
      <Tab3 props={{ color, logoS, logoP, handleLogoP, handleLogoS }} />
    </main>
  )
}

export default Home
