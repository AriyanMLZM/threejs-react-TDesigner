import React, { useState } from 'react'

import { colors, file, bot } from '../assets/icons'
import { Button, ColorPicker, FilePicker, AiPicker } from '../components'
import { close } from '../assets/icons'

const Tab2 = ({ props }) => {
  const [tab, setTab] = useState(0)

  const changeTab = (ind) => {
    if (tab === ind) setTab(0)
    else setTab(ind)
  }

  return (
    <>
      <section
        style={{
          borderColor: `rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`,
        }}
        className="absolute select-none border-[2px] bg-[#000]/50 rounded-full flex flex-col items-center justify-around z-1 md:top-[50%] top-[77%] left-[15px] translate-y-[-50%] md:w-[70px] md:h-[220px] w-[60px] h-[210px]"
      >
        <Button
          props={{
            img: colors,
            active: tab === 1 ? true : false,
            color: props.color,
            ind: 1,
          }}
          funcs={{ changeTab }}
        />
        <Button
          props={{
            img: file,
            active: tab === 2 ? true : false,
            color: props.color,
            ind: 2,
          }}
          funcs={{ changeTab }}
        />
        <Button
          props={{
            img: bot,
            active: tab === 3 ? true : false,
            color: props.color,
            ind: 3,
          }}
          funcs={{ changeTab }}
        />
      </section>
      {tab != 0 && (
        <section className="w-[220px] h-[300px] absolute bg-[#111] rounded md:top-[50%] top-[70%] left-[90px] translate-y-[-50%] ">
          <div className="flex justify-end">
            <button
              type="button"
              className="w-[30px] h-[30px] p-[6px]"
              onClick={() => changeTab(0)}
            >
              <img src={close} alt="close" className="select-none" />
            </button>
          </div>
          {tab === 1 && <ColorPicker props={props} />}
          {tab === 2 && <FilePicker props={props} />}
          {tab === 3 && <AiPicker />}
        </section>
      )}
    </>
  )
}

export default Tab2
