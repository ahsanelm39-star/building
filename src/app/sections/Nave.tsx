"use client"
import Image from 'next/image';
import Logo from '../../../public/images/logo.png'
import  List  from './List';
import Btn from './Btn';
import Link from "next/link";
import { useEffect } from 'react';

const Nave = () => {


    useEffect(()=>{
        const els = document.querySelectorAll(".ul li") as NodeListOf<HTMLElement>
        els.forEach((el)=>{
            el.addEventListener("click",()=>{
                els.forEach((ele)=>{
                    ele.classList.remove("on")
                })
                el.classList.add("on")
            })
        })
    },[])


    return (
        <nav className='bg-primary '>
            <div className="collect  flex justify-between items-center py-3">
                <div>
                    <Image src={Logo} alt="Logo"  height={48} width={230} className='max-md:w-50 mr-8'/>
                </div>
                <div className='flex gap-10'>
                    <ul className='flex text-white items-center max-md:hidden ml-9 ul'>
                        <Link href='#hero'>
                            <li className=' on relative font-medium p-2 cursor-pointer text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>HOME</li>
                        </Link>
                        <Link href='#about'>
                            <li className=' relative font-medium p-2 cursor-pointer text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>ABOUT</li>
                        </Link>
                        <Link href='#services'>
                        <li className=' relative font-medium p-2 cursor-pointer text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>SERVICES</li>
                        </Link>
                        <Link href='#projects'>
                        <li className=' relative font-medium p-2 cursor-pointer text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>PROJECTS</li>
                        </Link>
                        <Link href='#contact'>
                        <li className=' relative font-medium p-2 cursor-pointer text-sm  hover:text-[#ffd76e] transition-all'>CONTACT</li>
                        </Link>
                    </ul>
                    <Link href={'#contact'}>
                        <Btn bg={'white'} text={"GET A QUOTE"}/>
                    </Link>
                </div>
                <List/>
            </div>
            
        </nav>
    )
}

export default Nave