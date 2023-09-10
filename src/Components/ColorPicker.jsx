import React from 'react'
import { SketchPicker } from 'react-color'
import state from '../Store'
import { useSnapshot } from 'valtio'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute bottom-36 left-full ml-3'>
      <SketchPicker
      color={snap.color}
      disableAlpha
      onChange={(color)=> state.color = color.hex}>
        
      </SketchPicker>
    </div>
  )
}

export default ColorPicker