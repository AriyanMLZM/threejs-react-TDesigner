import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'main-img': "url('/bg.png')",
			},
		},
	},
	plugins: [],
}

export default config
