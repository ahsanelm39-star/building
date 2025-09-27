"use client"
import { useEffect, useState } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import MopileLogo from '../../../public/images/logo.png'
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const menuItems = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const List = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function showMenuo() {
    setShowMenu(true);
  }

  useEffect(()=>{
    window.addEventListener("click",(e)=>{
      if (e.target instanceof Element) {
        if(e.target.classList.contains("menuo")){
          setShowMenu(false)
        }
      }
    })
  },[])

  function Menuo() {

    if (!showMenu) return null;
    return (
      <div className="md:hidden fixed bg-[#0000005d] w-full h-[100vh] top-0 right-0 flex justify-end z-50 menuo">
        <div className=' bg-black h-[100vh] w-[250px] flex flex-col justify-evenly px-8'>
          <span onClick={() => setShowMenu(false)} className='text-2xl text-white font-medium cursor-pointer absolute top-6 right-6 transition-all hover:text-red-500'>X</span>
          <div>
            <Link href={'#hero'}>
              <Image src={MopileLogo} alt='logo' />
            </Link>
          </div>
          <ul className='flex flex-col gap-6 text-white items-center list-ul'>
            {menuItems.map((item, idx) => (
              <Link href={item.href} key={item.label} onClick={() => { setActiveIndex(idx); setShowMenu(false); }}>
                <li className={`cursor-pointer transition-all hover:text-[#ffd76e] ${activeIndex === idx ? "on" : ""}`}>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex gap-8 text-white justify-center">
            <FontAwesomeIcon icon={faFacebookF} width={11} className='cursor-pointer transition-all hover:text-[#ffc221]' />
            <FontAwesomeIcon icon={faYoutube} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]' />
            <FontAwesomeIcon icon={faXTwitter} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]' />
            <FontAwesomeIcon icon={faInstagram} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]' />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <FontAwesomeIcon icon={faBars} onClick={showMenuo} className='list text-white text-[28px] cursor-pointer' />
      <Menuo />
    </>
  )
}

export default List