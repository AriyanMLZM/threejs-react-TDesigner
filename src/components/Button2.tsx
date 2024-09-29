import { Irgb } from '../types'

const Button2 = ({
	img,
	active,
	color,
	ind,
	handleClick,
}: {
	img: string
	active: boolean
	color: Irgb
	ind: number
	handleClick: (ind: number) => void
}) => {
	return (
		<button
			type="button"
			className={`flex justify-center items-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-full
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
			<img
				className="md:w-[35px] w-[30px]"
				draggable={false}
				src={img}
				alt="icon"
			/>
		</button>
	)
}

export default Button2
