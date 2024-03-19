
import { useAppContext } from "@/components/context"
import ForthSoulSVG from "../svg/forthSoulSVG"


const Forth = () => {
  const { nightMode, setNightMode } = useAppContext() 
  return (
    <>
      <div className='text-8xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-black'>
        <p >Forth</p>
      </div>
      {nightMode ? <ForthSoulSVG /> : null}
    </>    
  )
}
export default Forth
