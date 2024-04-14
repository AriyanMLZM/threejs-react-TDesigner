import React from 'react'

const FilePicker = ({props}) => {
  return (
    <section className="flex flex-col items-center">
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="text-white w-[90%] mt-4"
        onChange={(e) => props.setFile(e.target.files[0])}
      />
      <div className='flex justify-center items-center h-[160px] w-full mt-4 select-none'>
        {props.img && <img width={'150px'} src={props.img} alt="img" draggable={false} />}
      </div>
    </section>
  )
}

export default FilePicker
