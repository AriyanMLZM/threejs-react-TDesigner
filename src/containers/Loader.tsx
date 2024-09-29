import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html center>
      <div className='border-t-[5px] animate-spin w-20 h-20 rounded-full'/>
    </Html>
  )
}

export default Loader