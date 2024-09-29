const reader: (file: File) => Promise<string> = (file) =>
	new Promise((resolve) => {
		const fileReader = new FileReader()
		fileReader.onload = () => resolve(fileReader.result as string)
		fileReader.readAsDataURL(file)
	})

export default reader
