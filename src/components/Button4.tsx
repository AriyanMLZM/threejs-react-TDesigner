import { Irgb } from '../types'

const Button4 = ({
	color,
	text,
	ind,
	active,
	handleClick,
}: {
	color: Irgb
	text: string
	ind: number
	active: boolean
	handleClick: (ind: number) => void
}) => {
	return (
		<button
			type="button"
			style={{
				background: active ? `rgb(${color.r}, ${color.g}, ${color.b})` : '',
				borderColor: !active ? `rgb(${color.r}, ${color.g}, ${color.b})` : '',
				borderWidth: !active ? `1px` : '',
			}}
			className={`text-white w-[100px] h-[32px] m-1 rounded-full ${
				!active && 'md:hover:bg-gray-700'
			}`}
			onClick={() => handleClick(ind)}
		>
			{text}
		</button>
	)
}

export default Button4
