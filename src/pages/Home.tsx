import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

import { Model } from '../model'
import { Tab1, Tab2, Tab3, Header } from '../containers'
import { reader, doGsap } from '../helper'
import { Irgb } from '../types'

const Home = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [color, setColor] = useState({ r: 19, g: 97, b: 189 })
	const [isLogo, setIsLogo] = useState(true)
	const [isFull, setIsFull] = useState(false)
	const [logoS, setLogoS] = useState(0)
	const [logoP, setLogoP] = useState(2)
	const [logo, setLogo] = useState('./logo.png')
	const [full, setFull] = useState('./full.jpg')
	const [file, setFile] = useState<File | null>(null)
	const [img, setImg] = useState<string | null>(null)

	const tref = useRef(null)

	useEffect(() => {
		if (file) {
			reader(file).then((result) => setImg(result))
		}
	}, [file])

	const handleLogo = () => {
		setIsLogo(!isLogo)
	}
	const handleFull = () => {
		setIsFull(!isFull)
	}

	const handleLogoP = (ind: number) => {
		setLogoP(ind)
	}
	const handleLogoS = (ind: number) => {
		setLogoS(ind)
	}

	const changeColor = (rgb: Irgb) => {
		setColor({ r: rgb.r, g: rgb.g, b: rgb.b })
	}

	useEffect(() => {
		if (window.innerWidth < 768) setIsMobile(true)
	}, [])

	useGSAP(() => {
		doGsap(tref)
	})

	const checkScreen = () => {
		if (window.innerWidth < 768) setIsMobile(true)
		else setIsMobile(false)
	}

	window.addEventListener('resize', checkScreen)

	return (
		<main className="h-screen overflow-hidden bg-center bg-main-img">
			<section ref={tref} className="h-full">
				<Model
					isMobile={isMobile}
					color={color}
					logo={logo}
					isLogo={isLogo}
					full={full}
					isFull={isFull}
					logoP={logoP}
					logoS={logoS}
				/>
			</section>
			<Header color={color} />
			<Tab1
				color={color}
				handleLogo={handleLogo}
				handleFull={handleFull}
				isLogo={isLogo}
				isFull={isFull}
			/>
			<Tab2
				changeColor={changeColor}
				color={color}
				setFile={setFile}
				img={img}
				setLogo={setLogo}
				setFull={setFull}
			/>
			<Tab3
				color={color}
				logoS={logoS}
				logoP={logoP}
				handleLogoP={handleLogoP}
				handleLogoS={handleLogoS}
			/>
		</main>
	)
}

export default Home
