import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls  } from '@react-three/drei'

import { Tshirt } from './'

const Model = ({props}) => {
  return (
    <Canvas shadows camera={{
      fov: 25, position:[0, 5, 20]
    }}>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight position={[0, 0, 10]} />
        <directionalLight position={[0, 0, -10]} />
        <Tshirt props={props}/>
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

export default Model
