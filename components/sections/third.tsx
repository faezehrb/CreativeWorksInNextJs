import Image from 'next/image'
import ThirdSoulSVG from "../svg/thirdSoulSVG"
import { useAppContext } from '../context'
import { GetStaticProps } from 'next'
import { company } from '@prisma/client'

async function Third() {
  const { nightMode } = useAppContext()
  const response = await fetch('http://localhost:3000/api/companies', { method: 'GET' })
  const companies: company[] = await response.json()

  return (
    <>
      <div className="mx-auto flex items-center justify-center">
        <div className={`${nightMode ? null : "rainBow"} grid grid-cols-4 backdrop-blur-md z-20 lg:rounded-none lg:grid-cols-2 md:grid-cols-1 gap-8 justify-items-center h-full w-full`}>
          
          {companies.map((item: company) => (
            <div key={item.id} className={`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-2 relative justify-center text-[1.5em] cursor-pointer`}>
              <Image
                src={item.img}
                width={100}
                height={100}
                alt="Picture of the author"
                className='z-10'
              />
              <p className='z-10 text-white text-center text-gl'>{item.name}</p>
              <p className='z-10 text-white p-5 text-center text-gl'>{item.position}</p>
              <p className='z-10 text-white  text-center text-sm'>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <ThirdSoulSVG />
    </>
  )
}

export default Third
