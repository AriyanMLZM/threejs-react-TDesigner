import React, { useEffect } from 'react'
import { useGLTF, useTexture, Decal } from '@react-three/drei'
import * as THREE from 'three'

import modelGltf from '../assets/3d/tshirt.glb'

const Tshirt = ({ props }) => {
  const { nodes, materials } = useGLTF(modelGltf)

  const logoTex = useTexture(props.logo)
  const fullTex = useTexture(props.full)

  fullTex.colorSpace = THREE.SRGBColorSpace
  logoTex.colorSpace = THREE.SRGBColorSpace

  useEffect(() => {
    if (props.color.r < 5 && props.color.g < 5 && props.color.b < 5) {
      materials.color.color.r = 5
      materials.color.color.g = 5
      materials.color.color.b = 5
    } else {
      materials.color.color.r = props.color.r
      materials.color.color.g = props.color.g
      materials.color.color.b = props.color.b
    }
  }, [props.color])

  const genP = () => {
    switch (props.logoP) {
      case 0:
        return -0.075
      case 1:
        return 0
      case 2:
        return 0.075
    }
  }
  const genS = () => {
    switch (props.logoS) {
      case 0:
        return 0.09
      case 1:
        return 0.12
      case 2:
        return 0.17
    }
  }

  return (
    <group scale={props.isMobile ? 6 : 9}>
      <mesh
        castShadow
        receiveShadow
        name="tshirt"
        geometry={nodes.tshirt.geometry}
        material={materials.color}
        position={[0, props.isMobile ? 0.35 : 0.1, 0]}
        dispose={null}
      >
        {props.isFull && (
          <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1}>
            <meshBasicMaterial map={fullTex} />
          </Decal>
        )}
        {props.isLogo && (
          <Decal
            position={[genP(), 0.08, 0.13]}
            rotation={[0, 0, 0]}
            scale={genS()}
            map={logoTex}
            depthTest={true}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Tshirt
