import { Button3 } from '../components'
import { Irgb } from '../types'

const Tab3 = ({
	color,
	logoS,
	logoP,
	handleLogoP,
	handleLogoS,
}: {
	color: Irgb
	logoS: number
	logoP: number
	handleLogoP: (ind: number) => void
	handleLogoS: (ind: number) => void
}) => {
	const handleClick = (ind: number) => {
		switch (ind) {
			case 0:
			case 1:
			case 2:
				handleLogoP(ind)
				break
			case 3:
				handleLogoS(0)
				break
			case 4:
				handleLogoS(1)
				break
			case 5:
				handleLogoS(2)
				break
		}
	}
	return (
		<section
			style={{
				borderColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
			}}
			className="absolute gap-1 py-2 select-none border-[2px] bg-[#000]/50 rounded-full flex flex-col items-center z-1 md:top-[50%] top-[68%] right-[15px] translate-y-[-50%] md:w-[70px] w-[60px]"
		>
			<h2
				style={{
					color: `rgb(${color.r}, ${color.g}, ${color.b})`,
				}}
				className="md:text-[20px] text-[18px] font-bold md:mt-[-50px] md:mb-4 mt-[-40px] mb-[12px]"
			>
				LOGO
			</h2>
			<h2
				style={{
					color: `rgb(${color.r}, ${color.g}, ${color.b})`,
				}}
				className="md:text-[20px] text-[18px] font-bold"
			>
				Pos
			</h2>
			<Button3
				active={logoP === 0 ? true : false}
				color={color}
				ind={0}
				text="L"
				handleClick={handleClick}
			/>
			<Button3
				active={logoP === 1 ? true : false}
				color={color}
				ind={1}
				text="M"
				handleClick={handleClick}
			/>
			<Button3
				active={logoP === 2 ? true : false}
				color={color}
				ind={2}
				text="R"
				handleClick={handleClick}
			/>
			<h2
				style={{
					color: `rgb(${color.r}, ${color.g}, ${color.b})`,
				}}
				className="md:text-[20px] text-[18px] font-bold mt-2"
			>
				Size
			</h2>
			<Button3
				active={logoS === 0 ? true : false}
				color={color}
				ind={3}
				text="S"
				handleClick={handleClick}
			/>
			<Button3
				active={logoS === 1 ? true : false}
				color={color}
				ind={4}
				text="M"
				handleClick={handleClick}
			/>
			<Button3
				active={logoS === 2 ? true : false}
				color={color}
				ind={5}
				text="L"
				handleClick={handleClick}
			/>
		</section>
	)
}

export default Tab3
