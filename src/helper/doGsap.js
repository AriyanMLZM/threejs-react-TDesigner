import gsap from 'gsap'

const timeline = gsap.timeline()

const doGsap = (tref) => {
  timeline.from(tref.current, { y: '-100%', duration: 4, ease: 'bounce' }, 0)
}

export default doGsap
