import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Tshirt } from '.'
import { Loader } from '../containers'

const Model = ({ props }) => {
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        position: [0, 5, 20],
      }}
    >
      <Suspense fallback={<Loader />}>
        <hemisphereLight groundColor={'#111'} intensity={0.01}/>
        <Tshirt props={props} />
        <OrbitControls
          target={[0, props.isMobile ? 0.8 : 0.4, 0]}
          maxDistance={30}
          minDistance={8}
          maxPolarAngle={Math.PI / 1.94}
          minPolarAngle={Math.PI / 4}
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  )
}

export default Model
