import Image from "next/image";
import ThirdSoulSVG from "../svg/thirdSoulSVG";
import { useAppContext } from "../context";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Company {
  id: number;
  name: string;
  img: string;
  position: string;
  detail: string;
  href: string;
}

function Carrer() {
  const { nightMode } = useAppContext();

  const [companies, setCompanies] = useState<Company[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8000/companies", {
          method: "GET",
          cache: "no-store",
        });
        setCompanies(await response.json());
      } catch (error) {
        console.error(error)
        setCompanies([])
      }
    })();
  }, []);

  return (
    <>
      <div className="container mx-auto px-32 lg:px-20 md:px-10 min-h-screen grid content-center">
        <div className="backdrop-blur-md z-20 rounded-full p-3 mb-1">
          <h2 className="text-center text-white text-4xl">
             Some of The Companies I Have Worked With
          </h2>
        </div>
        <div
          className={`${
            nightMode ? null : "rainBow"
          } grid place-items-center grid-cols-4 backdrop-blur-md rounded-2xl z-20 lg:grid-cols-2 md:grid-cols-1 gap-8 justify-items-center p-10`}
        >
          {companies === undefined ? (
            <>Loading...</>
          ) : (
            companies.map((item) => (
              <Link key={item.id} href={item.href} target="_blank">
                <div
                  className={`${
                    nightMode ? null : "rainBow"
                  } card grid place-content-center min-h-[50vh] w-full rounded-sm  p-2 relative text-[1.5em] cursor-pointer`}
                >
                  <Image
                    src={item.img}
                    width={70}
                    height={70}
                    alt="Picture of the author"
                    className="z-10 rounded-xl  m-auto"
                  />
                   <p className="z-10 text-white text-center text-gl">
                    {item.position}
                  </p>
                  <p className="z-10 text-white text-center mt-4 text-gl">
                    {item.name}
                  </p>
                  <p className="z-10 text-white text-center text-sm">
                    {item.detail}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <ThirdSoulSVG />
    </>
  );
}

export default Carrer;

{
  /* <div  className={`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none grid place-items-center p-2 relative  text-[1.5em] cursor-pointer`}>
              <Link href='https://sepanodata.ir/' target='_blank'>
                <Image
                  src="/img/sepano.png"
                  width={70}
                  height={70}
                  alt="Picture of the author"
                  className='z-10 m-auto rounded-xl'
                />
                <p className='z-10 text-white text-center mt-4 text-gl'>SEPANO DATA</p>
                <p className='z-10 text-white  text-center text-gl'>FRONT-END</p>
                <p className='z-10 text-white  text-center text-sm'>A design and production of Windows and web software company in cooperation with government organizations.</p>
              </Link>
              
            </div>
            <div  className={`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-2 relative justify-center text-[1.5em] cursor-pointer`}>
            <Link href='https://bimito.com/blog/' target='_blank'>
              <Image
                src="/img/bimito.jpeg"
                width={70}
                height={70}
                alt="Picture of the author"
                className='z-10 m-auto rounded-xl'
              />
              <p className='z-10 text-white text-center mt-4 text-gl'>BIMITO</p>
              <p className='z-10 text-white mb-4 text-center text-gl'>FRONT-END</p>
              <p className='z-10 text-white  text-center text-sm'>An online insurance shopping platform for buying and renewing all types of insurance.</p>
              </Link>
            </div>
            <div  className={`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-2 relative justify-center text-[1.5em] cursor-pointer`}>
            <Link href='https://shoga.net/' target='_blank'>
              <Image
                  src="/img/shoga.png"
                  width={70}
                  height={70}
                  alt="Picture of the author"
                  className='z-10 m-auto rounded-lg'
                />
                <p className='z-10 text-white text-center mt-4 text-gl'>SHOGA</p>
                <p className='z-10 text-white mb-4 text-center text-gl'>FRONT-END</p>
                <p className='z-10 text-white  text-center text-sm'>A factory for the domestic production and export of glass jars and bottles.</p>
            </Link>
            </div>
            <div  className={`${nightMode ? null : "rainBow"} card min-h-[50vh] w-full lg:rounded-none flex items-center flex-col p-2 relative justify-center text-[1.5em] cursor-pointer`}>
            <Link href='https://dermavitrin.com/' target='_blank'>
              <Image
                  src="/img/dermavitrin.jpeg"
                  width={70}
                  height={70}
                  alt="Picture of the author"
                  className='z-10 m-auto rounded-lg '
                />
                <p className='z-10 text-white text-center mt-4 text-gl'>DERMA VITRIN</p>
                <p className='z-10 text-white mb-4 text-center text-gl'>FRONT-END</p>
                <p className='z-10 text-white text-center text-sm'>A platform for buying and selling medical and beauty equipment.</p>
            </Link>
            </div>
            {/* <div  className={`${nightMode ? null : "rainBow"} card min-h-[50vh] lg:rounded-none flex items-center flex-col p-2 relative justify-center text-[1.5em] cursor-pointer`}>
              <Link href='https://dermavitrin.com/' target='_blank'>
                <Image
                  src="/img/dermavitrin.jpeg"
                  width={70}
                  height={70}
                  alt="Picture of the author"
                  className='z-10 pb-4 m-auto rounded-full'
                />
                <p className='z-10 text-white text-center text-gl'>DERMA VITRIN</p>
                <p className='z-10 text-white p-5 text-center text-gl'>FRONT END</p>
                <p className='z-10 text-white  text-center text-sm'>A platform for buying and selling medical and beauty equipment.</p>
              </Link>
            </div> */
}
