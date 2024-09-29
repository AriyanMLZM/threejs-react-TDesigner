import gsap from 'gsap'
import { MutableRefObject } from 'react'

const timeline = gsap.timeline()

const doGsap = (tref: MutableRefObject<null>) => {
	timeline.from(tref.current, { y: '-100%', duration: 4, ease: 'bounce' }, 0)
}

export default doGsap
