import React from 'react'
import { SketchPicker } from 'react-color'

const ColorPicker = ({ props }) => {
  return (
    <SketchPicker
      color={props.color}
      disableAlpha
      onChange={(color) => {
        props.changeColor(color.rgb)
      }}
    />
  )
}

export default ColorPicker
