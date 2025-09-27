"use client"
import { faIgloo, faPaintRoller, faUserGear, faWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Image from "next/image"
import Img_1 from '../../../public/images/img/services/thumb-1.jpg'
import Img_2 from '../../../public/images/img/services/thumb-2.jpg'
import Img_3 from '../../../public/images/img/services/thumb-3.jpg'
import Img_4 from '../../../public/images/img/services/thumb-4.jpg'
import Img_5 from '../../../public/images/img/services/thumb-5.jpg'
import Img_6 from '../../../public/images/img/services/thumb-6.jpg'
import Btn from "./Btn"
import SpecialHead from "./SpecialHead"


const Services = () => {
    const [clickedBtn, setClickedBtn] = useState(0)


useEffect(()=>{
        const btn = document.querySelectorAll('.btn-groub div') as NodeListOf<HTMLElement>;
        btn.forEach((button,index) => {
            button.addEventListener('click', () => {
                const ele = button.firstElementChild
                btn.forEach((btn) => {
                    if (btn.firstElementChild) {
                        btn.firstElementChild.classList.remove('active');
                    }
                });
                ele?.classList.add('active');
                setClickedBtn(index);
            })
        })
        return ()=>{
            btn.forEach((button) => {
                button.removeEventListener('click', () => {}); 
            });
        }
},[])


const data = [
    {
        url1: Img_1,
        url2: Img_2,
        title: 'Construction Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list1:["Residentail builds","Site Prep","Framing & Roofing"],
        list2:["Structural Design","Concrete Work","Interior Finishing"]
    },
    {
        url1: Img_3,
        url2: Img_4,
        title: 'Renovation Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list1:["Kitchen Remodel","Flooring","Carpentry"],
        list2:["Basement Finish","Energy Upgrades","Painting"]
    },
    {
        url1: Img_5,
        url2: Img_6,
        title: 'Restoration Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list1:["Historic Restore","Fire Repair","mold Removal"],
        list2:["Water damage","structural Fix","Roof Store"]
    },
    {
        url1: Img_1,
        url2: Img_3,
        title: 'Consulting Services',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list1:["Project plans","Site Management","Sustainability"],
        list2:["Costing","Permits","safety"]
    }
]

const dataList = data.map((item, index) => {
    console.log(item.url1);
    if(index === clickedBtn){
        return (
            <div key={index} className="flex gap-6 max-lg:flex-col">
                <div className="flex flex-col gap-8 justify-center max-lg:flex-row">
                    <Image src={item.url1} alt='service photo' className="max-h-[160px] max-w-[160px]"/>
                    <Image src={item.url2} alt='service photo' className="max-h-[160px] max-w-[160px]"/>
                </div>
                <div className="max-lg:w-1/1">
                    <h2 className="text-2xl font-bold mb-4 max-lg:text-center">{item.title}</h2>
                    <p className="lg:max-w-100  text-[#0000009c] max-lg:w-1/1 max-lg:text-center">{item.desc}</p>
                    <div className="flex gap-14 max-md:flex-col max-md:gap-0 max-md:mt-4 mb-10 max-lg:w-1/1 max-lg:justify-center">
                            <ul className="list-disc list-inside mt-4 flex flex-col gap-3 ul-ser">
                                {item.list1.map((listItem, idx) => (
                                    <li key={idx} className="text-[#000] font-medium">{listItem}</li>
                                ))}
                            </ul>
                            <ul className="list-disc list-inside mt-4 flex flex-col gap-3 ul-ser">
                                {item.list2.map((listItem, idx) => (
                                    <li key={idx} className="text-[#000]">{listItem}</li>
                                ))}
                            </ul>
                    </div>
                    <Btn text="READ MORE" bg="#ffd76e"/>
                </div>
            </div>
        )
    }
})


    return (
        <section className="bg-[#eee] py-16 services-section" id="services">
            <div className="w-fit mx-auto mb-6">
                <SpecialHead text="OUR SERVICES"/>
            </div>
            <div className="text-center w-150 mx-auto mb-14 max-md:w-1/1 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions We Provide</h2>
                <p className="text-sm text-[#010101a5]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptate libero ipsum nemo voluptatem.</p>
            </div>
            <div className="collect bg-[#eee] flex gap-10 max-lg:flex-col">
                <div className="flex flex-col items-center justify-center gap-6 btn-groub">
                    <div className="text-[black] bg-white  w-70 cursor-pointer text-center flex  items-center max-lg:w-1/1 ">
                        <span className="bg-[#ffd76e] active text-black p-6 mr-6 max-md:mr-10"><FontAwesomeIcon icon={faIgloo} className="text-3xl"/></span>
                        <span className=" text-sm font-extralight ">CONSTRUCTION</span>
                    </div>
                    <div className="text-[black] bg-white  w-70 cursor-pointer text-center flex  items-center max-lg:w-1/1 ">
                        <span className="bg-[#ffd76e] text-black p-6 mr-6 max-md:mr-10"><FontAwesomeIcon icon={faPaintRoller} className="text-3xl"/></span>
                        <span className=" text-sm font-extralight ">RENOVATION</span>
                    </div>
                    <div className="text-[black] bg-white  w-70 cursor-pointer text-center flex  items-center max-lg:w-1/1 ">
                        <span className="bg-[#ffd76e] text-black p-6 mr-6 max-md:mr-10"><FontAwesomeIcon icon={faWrench} className="text-3xl"/></span>
                        <span className=" text-sm font-extralight ">RESTORATION</span>
                    </div>
                    <div className="text-[black] bg-white  w-70 cursor-pointer text-center flex  items-center max-lg:w-1/1 ">
                        <span className="bg-[#ffd76e] text-black p-6 mr-6 max-md:mr-10"><FontAwesomeIcon icon={faUserGear} className="text-3xl"/></span>
                        <span className=" text-sm font-extralight ">CONSULTING</span>
                    </div>
                </div>
                <div className="bg-white p-6 w-1/1 max-md:p-4">{dataList}</div>
            </div>
        </section>
    )
}

export default Services