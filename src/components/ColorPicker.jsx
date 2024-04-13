import React from 'react'
import { SketchPicker } from 'react-color'

const ColorPicker = ({ props }) => {
  return (
    <SketchPicker
      styles={{default: {
        picker: {
          background: "#111",
        }
      }}}
      color={props.color}
      disableAlpha
      onChange={(color) => {
        props.changeColor(color.rgb)
      }}
    />
  )
}

export default ColorPicker
