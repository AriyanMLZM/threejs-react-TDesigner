import { Irgb } from '../types'

const Button3 = ({
	active,
	color,
	ind,
	text,
	handleClick,
}: {
	active: boolean
	color: Irgb
	ind: number
	text: string
	handleClick: (ind: number) => void
}) => {
	return (
		<button
			type="button"
			className={`flex text-white md:text-[20px] text-[18px] justify-center items-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full
      } ${!active && 'md:hover:bg-gray-700'}`}
			style={{
				backgroundColor: active
					? `rgb(${color.r}, ${color.g}, ${color.b})`
					: '',
			}}
			onClick={() => {
				handleClick(ind)
			}}
		>
			{text}
		</button>
	)
}

export default Button3
