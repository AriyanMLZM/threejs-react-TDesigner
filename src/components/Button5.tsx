const Button5 = ({
	color,
	text,
	active,
	handleClick,
}: {
	color: string
	text: string
	active: boolean
	handleClick: () => void
}) => {
	return (
		<button
			type="button"
			style={{
				background: active ? color : '',
				borderColor: !active ? color : '',
				borderWidth: !active ? `1px` : '',
			}}
			className={`text-white w-[100px] h-[32px] m-1 rounded-full ${
				!active && 'md:hover:bg-gray-700'
			}`}
			onClick={handleClick}
		>
			{text}
		</button>
	)
}

export default Button5
