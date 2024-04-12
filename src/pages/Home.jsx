import React, { useEffect, useState } from 'react'

import { Model } from '../model'
import { Tab1, Tab2, Header } from '../containers'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(window.innerWidth < 768) setIsMobile(true)
  }, [])

  const checkScreen = () => {
    if(window.innerWidth < 768) setIsMobile(true)
    else setIsMobile(false)
  }

  window.addEventListener('resize', checkScreen)

  return (
    <main className='h-screen overflow-hidden bg-center bg-main-img'>
      <section className='h-full'>
        <Model props={{isMobile}} />
      </section>
      <Header />
      <Tab1 />
      <Tab2 />
    </main>
  )
}

export default Home
