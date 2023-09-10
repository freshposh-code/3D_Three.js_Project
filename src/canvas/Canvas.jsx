import React from 'react'
import { Canvas } from '@react-three/fiber'
import {  Environment, Center } from '@react-three/drei'
import CameraRig from './CameraRig'
import Backdrop from "./Backdrop"
import Shirt from "./Shirt"

const canvas = () => {
  return (
   <Canvas
   shadows
   camera={{position: [0, 0 , 0], fov: 20}}
   gl={{preserveDrawingBuffer: true}}
   className='z-[1000] absolute sm:top-[22rem] top-[29rem]'>
    <ambientLight intensity={0.5}/>
    <Environment preset='city'/>

    <CameraRig>
      <Backdrop/>
        <Shirt/>
    </CameraRig>
   </Canvas>
  )
}

export default canvas