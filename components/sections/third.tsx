
import Image from 'next/image'
import shoga from '../../public/img/shoga.png' 
import { GET } from '../../app/api/companies/[id]/route'
import ThirdSoulSVG from "../svg/thirdSoulSVG"
import { useAppContext } from '../context'
import { NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
 
interface Company {
    id: number;
    name: string;
    img: string;
    position: string;
    detail: string;
  }
 
export const getStaticProps = (async (context) => {
  const res = await fetch('http//localhost:3000/api/companies',{ method: 'GET' })
  const company = await res.json()
  return { props: { company } }
}) satisfies GetStaticProps<{
  company: Company
}> 


export default async function Third({ company }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { nightMode } = useAppContext()


  return (
    <>
      <div className="mx-auto flex items-center justify-center">
        <div className={`${nightMode ? null : "rainBow"} grid grid-cols-4 backdrop-blur-md z-20 lg:rounded-none lg:grid-cols-2 md:grid-cols-1 gap-8 justify-items-center h-full w-full`}>
            <div key={company.id} className = {`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-2 relative justify-center text-[1.5em] cursor-pointer`}>
              <Image
                src={company.img}
                width={100}
                height={100}
                alt="Picture of the author"
                className='z-10'
              />
              <p className='z-10 text-white text-center text-gl'>{company.name}</p>
              <p className='z-10 text-white p-5 text-center text-gl'>{company.position}</p>
              <p className='z-10 text-white  text-center text-sm'>{company.detail}
              </p>
            </div>
        </div>
      </div>
      <ThirdSoulSVG />
    </> 
  )
}