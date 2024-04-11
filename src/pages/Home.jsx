import React from 'react'

import { Model } from '../model'
import { Tab1, Tab2 } from '../containers'

const Home = () => {
  return (
    <main className='h-screen'>
      <section className='h-[70%]'>
        <Model />
      </section>
      <Tab1 />
      <Tab2 />
    </main>
  )
}

export default Home
