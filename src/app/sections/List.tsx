"use client"
import {useEffect, useState } from 'react';
import Link from "next/link";
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//
import Image from 'next/image'
import MopileLogo from '../../../public/images/logo.png'
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const List = () => {
    const [showMenu, setShowMenu] = useState(false);
    function showMenuo(){
        setShowMenu(true);
      }

      useEffect(()=>{
        const els = document.querySelectorAll(".list-ul li")
        console.log(els)
        // els.forEach((el)=>{
        // })
      },[])


      useEffect(()=>{
        window.addEventListener("click",(e)=>{
          if (e.target instanceof Element) {
            if(e.target.classList.contains("menuo")){
              setShowMenu(false)
            }
          }
        })
      },[])
      
      function Menuo (){
          if(showMenu){
            return(
            <div className={` md:hidden fixed bg-[#0000005d] w-1/1 h-[100vh] top-0 right-0 flex justify-end translate-x-1/1 opacity-0 transition-all ${showMenu ? "menuo":""} z-50`}> 
              <div className='bg-black h-[100vh] w-[250px] flex flex-col justify-evenly px-8'>
                <span onClick={()=>{
                  setShowMenu(false)
                }} className='text-2xl text-white font-medium cursor-pointer absolute top-6 right-6 transition-all hover:text-red-500'>X</span>
                <div>
                  <Link href={'#hero'}>
                    <Image src={MopileLogo} alt='logo'/>
                  </Link>
                </div>
                <ul className='flex flex-col gap-6 text-white items-center list-ul'>
                    <Link href={'#hero'} onClick={()=>{setShowMenu(false)}}>
                      <li className='on cursor-pointer transition-all hover:text-[#ffd76e]'>HOME</li>
                    </Link>
                    <Link href={'#about'} onClick={()=>{setShowMenu(false)}}>
                      <li className='cursor-pointer transition-all hover:text-[#ffd76e]'>ABOUT</li>
                    </Link>
                    <Link href={'#services'} onClick={()=>{setShowMenu(false)}}>
                      <li className='cursor-pointer transition-all hover:text-[#ffd76e]'>SERVICES</li>
                    </Link>
                    <Link href={'#projects'} onClick={()=>{setShowMenu(false)}}>
                      <li className='cursor-pointer transition-all hover:text-[#ffd76e]'>PROJECTS</li>
                    </Link>
                    <Link href={'#contact'} onClick={()=>{setShowMenu(false)}}>
                      <li className='cursor-pointer transition-all hover:text-[#ffd76e]'>CONTACT</li>
                    </Link>
                </ul>
                <div className="flex gap-8 text-white justify-center">
                    <FontAwesomeIcon icon={faFacebookF} width={11} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                    <FontAwesomeIcon icon={faYoutube} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                    <FontAwesomeIcon icon={faXTwitter} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                    <FontAwesomeIcon icon={faInstagram} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]'/>
                </div>
              </div>
            </div>
        )
          }
    }


  return (
    <>
      <FontAwesomeIcon icon={faBars} onClick={showMenuo} className='list text-white text-[28px]  cursor-pointer'/>
      <Menuo/>
    </>
  )
}

export default List