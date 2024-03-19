

import { useAppContext } from "@/components/context"
import ThirdSoulSVG from "../svg/thirdSoulSVG"


const Third = () => {
  const { nightMode, setNightMode } = useAppContext() 
  return (
    <>
      <div className='text-8xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white'>
        <p >Third</p>
      </div>
      {nightMode ? <ThirdSoulSVG /> : null}
    </> 
  )
}

export default Third
