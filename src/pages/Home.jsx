import React, { useEffect, useState } from 'react'

import { Model } from '../model'
import { Tab1, Tab2 } from '../containers'

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
    <main className='h-screen overflow-hidden bg-[#eae6e0]'>
      <section className='h-full'>
        <Model props={{isMobile}} />
      </section>
      <Tab1 />
      <Tab2 />
    </main>
  )
}

export default Home
