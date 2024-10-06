import { Dispatch } from 'react'
import Button5 from './Button5'
import { ChromePicker } from 'react-color'

const TextPicker = ({
	textColor,
	setTextColor,
	textLogo,
	setTextLogo,
	enText,
	setEnText,
}: {
	textColor: string
	setTextColor: Dispatch<string>
	setLogo: Dispatch<string>
	textLogo: string
	setTextLogo: Dispatch<string>
	enText: boolean
	setEnText: Dispatch<boolean>
}) => {
	const handleClick = () => {
		setEnText(!enText)
	}

	return (
		<section className="flex flex-col items-center px-[10px]">
			<input
				id="text-input"
				type="text"
				autoCapitalize="off"
				value={textLogo}
				className="bg-[#222] text-white p-[5px] mt-[5px] rounded-[10px] outline-none"
				style={{
					border: `1px solid ${textColor}`,
				}}
				placeholder="Enter Text..."
				onChange={(e) => {
					setTextLogo(e.target.value)
				}}
			/>
			<div className="mt-[10px]">
				<ChromePicker
					styles={{
						default: {
							picker: {
								background: '#222',
								borderRadius: '20px',
								width: '100%',
							},
						},
					}}
					color={textColor}
					disableAlpha
					onChange={(color) => {
						setTextColor(color.hex)
					}}
				/>
			</div>
			<div>
				<Button5
					color={textColor}
					text={'Text'}
					active={enText}
					handleClick={handleClick}
				/>
			</div>
			<canvas id="text-canvas" style={{ display: 'none' }}></canvas>
		</section>
	)
}

export default TextPicker
