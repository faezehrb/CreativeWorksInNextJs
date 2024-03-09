// components/HamburgerMenu.tsx
import React, { useState } from 'react';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 500);
  };
  return (
    <div className="relative inline-block text-left">
      <div className='z-50'>
        <button
          type="button"
          className="inline-flex justify-center m-8 w-12 h-12 p-2 text-white-800 transition transform border border-transparent hover:text-white-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white-500 hover:scale-125 focus-visible:ring-opacity-50"
          aria-expanded = {isOpen ? 'true' : 'false'}
          onClick={handleClick}
        >
          <svg
            className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'} text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'} text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* Dropdown menu */}
      <div
        className={`${ isOpen ? 'block' : 'hidden'} origin-top-right absolute left-0 right-0  mt-2 w-6 rounded-md shadow-lg bg-opacity-50 backdrop-blur-lg ring-opacity-5 focus:outline-none transition-all `}
      >
        <div className="absolute top-[-2rem] left-[3.5rem] w-1/2 h-full flex justify-center items-center">
          <div className="relative w-8 h-8 rounded-full">
            <ul className="absolute inset-0 flex flex-col justify-center items-center list-none p-0 m-0">
              <li className = {`${clicked ? 'w-0 h-0 before:w-0 before:h-0' : 'w-[1.5rem] h-[1.5rem] before:w-[50px] before:h-[50px]'} transform transition-all translate-x-0 translate-y-[5.7rem] before:content-[''] before:bg-slate-300 before:absolute before:top-[-12px] before:left-[-12px] before:z-0 before:rounded-full before:blur-sm before:opacity-30`}>
                <a
                  href="#"
                  className= "rounded-full flex justify-center items-center text-white-800 transform transition-all "
                  role="menuitem"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[1.6rem] h-[1.6rem] before:content-[''] before:w-8 before:h-8 before:blur-sm before:opacity-40 before:rounded-full text-white transform transition-all hover:scale-125">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                </a>
              </li>
              <li className = {`${clicked ? 'w-0 h-0 before:w-0 before:h-0' : 'w-[1.6rem] h-[1.6rem] before:w-[50px] before:h-[50px]'} transform transition-all translate-x-[5.7rem] translate-y-[-2rem] before:content-[''] before:bg-slate-300 before:absolute before:top-[-12px] before:left-[-12px] before:z-0 before:rounded-full before:blur-sm before:opacity-30`}>
                <a
                  href="#"
                  className= "rounded-full flex justify-center items-center text-white-800 transform transition-all "
                  role="menuitem"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[1.6rem] h-[1.6rem] text-white transform transition-all hover:scale-125">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </a>
              </li>
              <li className = {`${clicked ? 'w-0 h-0 before:w-0 before:h-0' : 'w-[1.6rem] h-[1.6rem] before:w-[50px] before:h-[50px]'} transform transition-all translate-x-[4.5rem] translate-y-[0.8rem] before:content-[''] before:bg-slate-300 before:absolute before:top-[-12px] before:left-[-12px] before:z-0 before:rounded-full before:blur-sm before:opacity-30`}>
                <a
                  href="#"
                  className= "rounded-full flex justify-center items-center text-white-800 transform transition-all "
                  role="menuitem"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[1.5rem] h-[1.5rem] transform transition-all text-white hover:scale-125">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
