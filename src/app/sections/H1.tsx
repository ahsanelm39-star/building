"use client"

import { useEffect } from "react"

const H1 = () => {
    useEffect(()=>{
        const el = document.querySelector(".h1") as HTMLElement
        el.style.transform = 'translatey(0)'
        el.style.opacity = '1'
        window.addEventListener("scroll",()=>{
            const aboutSection = document.querySelector(".about-section") as HTMLElement
            const stateSection = document.querySelector(".state-section") as HTMLElement
            const servicesSection= document.querySelector(".services-section") as HTMLElement
            const projectsSection = document.querySelector(".projects-section") as HTMLElement
            const testmonialSection = document.querySelector(".testmonial-section") as HTMLElement
            const fqaSection = document.querySelector(".fqa-section") as HTMLElement
            const contactSection = document.querySelector(".contact-section") as HTMLElement
            if(scrollY > aboutSection.offsetTop - 400){
                aboutSection.classList.add("move-section")
            }
            if(scrollY > stateSection.offsetTop - 400){
                stateSection.classList.add("move-section")
            }
            if(scrollY > servicesSection.offsetTop - 400){
                servicesSection.classList.add("move-section")
            }
            if(scrollY > projectsSection.offsetTop - 400){
                projectsSection.classList.add("move-section")
            }
            if(scrollY > testmonialSection.offsetTop - 400){
                testmonialSection.classList.add("move-section")
            }
            if(scrollY > fqaSection.offsetTop - 400){
                fqaSection.classList.add("move-section")
            }
            if(scrollY > contactSection.offsetTop - 400){
                contactSection.classList.add("move-section")
            }
        })
    },[])



    return (
        <h1 className="font-bold h1 uppercase text-5xl text-white tracking-tight mb-4 max-md:text-4xl h-t transition-all duration-600"> <span className="text-[#ffc221]">building</span> robust lasting solutions.</h1>

    )
}

export default H1