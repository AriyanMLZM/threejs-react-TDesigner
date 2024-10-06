import { Dispatch, useEffect, useState } from 'react'

import { colors, file, bot, close, text } from '../assets/icons'
import {
	Button,
	ColorPicker,
	FilePicker,
	AiPicker,
	TextPicker,
} from '../components'
import { Irgb } from '../types'
import { textConverter } from '../helper'

const Tab2 = ({
	changeColor,
	color,
	setFile,
	img,
	setLogo,
	setFull,
}: {
	changeColor: (rgb: Irgb) => void
	color: Irgb
	setFile: Dispatch<File | null>
	img: string | null
	setLogo: Dispatch<string>
	setFull: Dispatch<string>
}) => {
	const [tab, setTab] = useState(0)
	const [textColor, setTextColor] = useState('#fff')
	const [textLogo, setTextLogo] = useState('')
	const [enLogo, setEnLogo] = useState(false)
	const [enText, setEnText] = useState(false)
	const [enFull, setEnFull] = useState(false)

	useEffect(() => {
		console.log('textLogo', textLogo)
		if (textLogo !== '' && enText) {
			setEnLogo(false)
			setLogo(textConverter(textLogo, textColor))
		}
	}, [textLogo, enText])

	const changeTab = (ind: number) => {
		if (tab === ind) setTab(0)
		else setTab(ind)
	}

	return (
		<>
			<section
				style={{
					borderColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
				}}
				className="absolute select-none border-[2px] bg-[#000]/50 rounded-full flex flex-col items-center justify-around z-1 md:top-[50%] top-[77%] left-[15px] translate-y-[-50%] gap-[10px] py-[10px] px-[10px]"
			>
				<Button
					img={colors}
					active={tab === 1 ? true : false}
					color={color}
					ind={1}
					changeTab={changeTab}
				/>
				<Button
					img={file}
					active={tab === 2 ? true : false}
					color={color}
					ind={2}
					changeTab={changeTab}
				/>
				<Button
					img={text}
					active={tab === 3 ? true : false}
					color={color}
					ind={3}
					changeTab={changeTab}
				/>
				<Button
					img={bot}
					active={tab === 4 ? true : false}
					color={color}
					ind={4}
					changeTab={changeTab}
				/>
			</section>
			{tab != 0 && (
				<section className="w-[220px] h-[330px] absolute bg-[#111] rounded md:top-[50%] top-[65%] left-[90px] translate-y-[-50%] ">
					<div className="flex justify-end">
						<button
							type="button"
							className="w-[30px] h-[30px] p-[6px]"
							onClick={() => changeTab(0)}
						>
							<img src={close} alt="close" className="select-none" />
						</button>
					</div>
					{tab === 1 && <ColorPicker color={color} changeColor={changeColor} />}
					{tab === 2 && (
						<FilePicker
							img={img}
							setLogo={setLogo}
							setFull={setFull}
							setFile={setFile}
							color={color}
							enLogo={enLogo}
							setEnLogo={setEnLogo}
							enFull={enFull}
							setEnFull={setEnFull}
						/>
					)}
					{tab === 3 && (
						<TextPicker
							textColor={textColor}
							setTextColor={setTextColor}
							setLogo={setLogo}
							textLogo={textLogo}
							setTextLogo={setTextLogo}
							enText={enText}
							setEnText={setEnText}
						/>
					)}
					{tab === 4 && <AiPicker />}
				</section>
			)}
		</>
	)
}

export default Tab2
