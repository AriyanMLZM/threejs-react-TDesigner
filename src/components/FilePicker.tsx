import { Dispatch } from 'react'

import { Button4 } from '.'
import { Irgb } from '../types'

const FilePicker = ({
	img,
	setLogo,
	setFull,
	setFile,
	color,
	enLogo,
	setEnLogo,
	enFull,
	setEnFull,
}: {
	img: string | null
	setLogo: Dispatch<string>
	setFull: Dispatch<string>
	setFile: Dispatch<File>
	color: Irgb
	enLogo: boolean
	setEnLogo: Dispatch<boolean>
	enFull: boolean
	setEnFull: Dispatch<boolean>
}) => {
	const handleClick = (ind: number) => {
		if (img) {
			switch (ind) {
				case 1:
					if (!enLogo) setLogo(img)
					else setLogo('./logo.png')
					setEnLogo(!enLogo)
					break
				case 2:
					if (!enFull) setFull(img)
					else setFull('./full.jpg')
					setEnFull(!enFull)
					break
			}
		}
	}
	const reset = () => {
		setEnFull(false)
		setEnLogo(false)
	}

	return (
		<section className="flex flex-col items-center">
			<input
				id="file-upload"
				type="file"
				accept="image/*"
				className=" w-[90%] text-[13px] file:hover:bg-gray-700 file:bg-[#111] file:border-white file:border-solid file:p-1 file:px-2 file:text-white file:rounded-full file:mr-2"
				style={{
					color: `rgb(${color.r}, ${color.g}, ${color.b})`,
				}}
				onChange={(e) => {
					reset()
					setFile(e.target.files![0])
				}}
			/>
			<div className="flex justify-center overflow-hidden h-[210px] w-full mt-2 mb-2 select-none">
				{img && (
					<img
						width={'150px'}
						src={img}
						alt="use an image file!"
						className="text-white"
						draggable={false}
					/>
				)}
			</div>
			<div>
				<Button4
					color={color}
					text={'Logo'}
					ind={1}
					active={enLogo}
					handleClick={handleClick}
				/>
				<Button4
					color={color}
					text={'Full'}
					ind={2}
					active={enFull}
					handleClick={handleClick}
				/>
			</div>
		</section>
	)
}

export default FilePicker
