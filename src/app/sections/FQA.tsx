"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SpecialHead from "./SpecialHead"
import {faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

const FQA = () => {


    useEffect(()=>{
        const els = document.querySelectorAll(".fqa div") as NodeListOf<HTMLElement>
        els.forEach((el)=>{
            el.onclick=()=>{
                    el.classList.toggle("clicked")
                    el.parentElement?.parentElement?.classList.toggle("content")
                    
                }
        })
    },[])

    const data =["How long does a construction project usually take ?","Do I need permits for my project ?",
        "what materail do you use ?","Can I make changes after construction starts ?","How much will my construction project cost ?",
        "How do you ensure quality and safety on-site ?"]

const dataList = data.map((fqa,index)=>{
    return (
        <div key={index} className="w-1/1 border-b font-bold text-2xl py-4 text-primary">
            <div className="fqa flex justify-between select-none items-center gap-4">
                <p>{fqa}</p>
                <div className="bg-[#ffd76e] py-1 px-2 h-fit  cursor-pointer "><FontAwesomeIcon icon={faPlus}  className=" text-lg transition-all"/></div>
            </div>
        </div>
    )
})

    return (
        <section className="py-14 ">
            <div className="w-fit mx-auto">
                <SpecialHead text="OUR SERVICES"/>
            </div>
            <div className="w-1/1 md:w-[600px] mx-auto text-center px-4 mb-14">
                <h2 className="text-3xl md:text-4xl font-bold my-4">Got Questions? We`ve Got You Covered</h2>
                <p className="p text-sm text-[#0000009f]">from project planing to final touches, we`ve answered the most common questions to help you make informed decision</p>
            </div>
            <div className=" collect flex flex-col">
                {dataList}
            </div>
        </section>
    )
}

export default FQA