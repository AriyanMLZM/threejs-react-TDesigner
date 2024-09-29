import { SketchPicker } from 'react-color'
import { Irgb } from '../types'

const ColorPicker = ({
	color,
	changeColor,
}: {
	color: Irgb
	changeColor: (rgb: Irgb) => void
}) => {
	return (
		<SketchPicker
			styles={{
				default: {
					picker: {
						background: '#111',
					},
				},
			}}
			color={color}
			disableAlpha
			onChange={(color) => {
				changeColor(color.rgb)
			}}
		/>
	)
}

export default ColorPicker
