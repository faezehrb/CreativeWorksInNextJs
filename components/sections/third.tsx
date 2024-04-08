import Image from 'next/image'
import shoga from '../../public/img/shoga.png' 

import ThirdSoulSVG from "../svg/thirdSoulSVG"
import { useAppContext } from '../context'

const Third: React.FC = () => {
  const { nightMode } = useAppContext()
  return (
    <>
      <div className="mx-auto flex items-center justify-center">
        <div className={`${nightMode ? null : "rainBow"} grid grid-cols-4 backdrop-blur-md z-20 lg:rounded-none lg:grid-cols-2 md:grid-cols-1 gap-8 justify-items-center h-full w-full`}>
            <div  className = {`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-[3px] relative justify-center text-[1.5em] cursor-pointer`}>
              <Image
                src={shoga}
                width={100}
                height={100}
                alt="Picture of the author"
                className='z-10'
              />
              <p className='z-10 text-white p-5 text-center text-gl'>SHISHE va Gaz Industries Group</p>
              <p className='z-10 text-white p-5 text-center text-sm'>A factory for the domestic production and export of glass jars and bottles.<br></br>
                - Design and implementation of the main site.
              </p>
            </div>
            <div  className = {`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-[3px] relative justify-center text-[1.5em] cursor-pointer`}>
            <Image
                src={shoga}
                width={100}
                height={100}
                alt="Picture of the author"
                className='z-10'
              />
                <p className='z-10 text-white p-5 text-center text-gl'>SHISHE va Gaz Industries Group</p>
              <p className='z-10 text-white p-5 text-center text-sm'>A factory for the domestic production and export of glass jars and bottles.<br></br>
                - Design and implementation of the main site.
              </p>
            </div>
            <div  className = {`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-[3px] relative justify-center text-[1.5em] cursor-pointer`}>
              <Image
                src={shoga}
                width={100}
                height={100}
                alt="Picture of the author"
                className='z-10'
              />
              <p className='z-10 text-white p-5 text-center text-gl'>SHISHE va Gaz Industries Group</p>
              <p className='z-10 text-white p-5 text-center text-sm'>A factory for the domestic production and export of glass jars and bottles.<br></br>
                - Design and implementation of the main site.
              </p>
            </div>
            <div  className = {`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-[3px] relative justify-center text-[1.5em] cursor-pointer`}>
            <Image
                src={shoga}
                width={100}
                height={100}
                alt="Picture of the author"
                className='z-10'
              />
              <p className='z-10 text-white p-5 text-center text-gl'>SHISHE va Gaz Industries Group</p>
              <p className='z-10 text-white p-5 text-center text-sm'>A factory for the domestic production and export of glass jars and bottles.<br></br>
                - Design and implementation of the main site.
              </p>
            </div>
        </div>
      </div>
      <ThirdSoulSVG />
    </> 
  )
}

export default Third