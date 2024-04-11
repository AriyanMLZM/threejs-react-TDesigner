import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls  } from '@react-three/drei'

import { Tshirt } from './'
import { AmbientLight } from 'three'

const Model = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight position={[0, 0, 10]} />
        <directionalLight position={[0, 0, -10]} />
        <Tshirt />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export default Model
