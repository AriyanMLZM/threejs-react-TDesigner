import React, { useState } from 'react'

import { Button4 } from '../components'

const FilePicker = ({ props }) => {
  const [fileLogo, setFileLogo] = useState(false)
  const [fileFull, setFileFull] = useState(false)

  const handleClick = (ind) => {
    if (props.img) {
      switch (ind) {
        case 1:
          if (!fileLogo) props.setLogo(props.img)
          else props.setLogo('./logo.png')
          setFileLogo(!fileLogo)
          break
        case 2:
          if (!fileFull) props.setFull(props.img)
          else props.setFull('./full.jpg')
          setFileFull(!fileFull)
          break
      }
    }
  }
  const reset = () => {
    setFileFull(false)
    setFileLogo(false)
  }

  return (
    <section className="flex flex-col items-center">
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className=" w-[90%] text-[13px] file:hover:bg-gray-700 file:bg-[#111] file:border-white file:border-solid file:p-1 file:px-2 file:text-white file:rounded-full file:mr-2"
        style={{
          color: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
        }}
        onChange={(e) => {
          reset()
          props.setFile(e.target.files[0])
        }}
      />
      <div className="flex justify-center overflow-hidden h-[210px] w-full mt-2 mb-2 select-none">
        {props.img && (
          <img
            width={'150px'}
            src={props.img}
            alt="use an image file!"
            className="text-white"
            draggable={false}
          />
        )}
      </div>
      <div>
        <Button4
          props={{
            color: props.color,
            text: 'Logo',
            ind: 1,
            active: fileLogo,
            handleClick,
          }}
        />
        <Button4
          props={{
            color: props.color,
            text: 'Full',
            ind: 2,
            active: fileFull,
            handleClick,
          }}
        />
      </div>
    </section>
  )
}

export default FilePicker
