import { Irgb } from '../types'

const Header = ({ color }: { color: Irgb }) => {
	return (
		<header className="absolute select-none flex justify-center z-1 top-5 left-[50%] translate-x-[-50%] w-[80%]">
			<h1 className="text-white md:text-[30px] text-[20px]">
				Design your{' '}
				<strong
					style={{
						color: `rgb(${color.r}, ${color.g}, ${color.b})`,
					}}
					className="md:text-[40px] text-[30px]"
				>
					T-shirt
				</strong>
			</h1>
		</header>
	)
}

export default Header
