export const textConverter = (text: string, color: string) => {
	const canvas = document.getElementById('text-canvas') as HTMLCanvasElement
	const context = canvas.getContext('2d')

	const width = context!.measureText(text).width

	canvas.height = 150
	canvas.width = width
	context!.fillStyle = color
	context!.font = 'bold 30px Arial'
	context!.textAlign = 'center'

	context!.clearRect(0, 0, canvas.width, canvas.height)
	context!.fillText(text, canvas.width / 2, canvas.height / 2)

	const img = canvas.toDataURL('image/png')

	return img
}
