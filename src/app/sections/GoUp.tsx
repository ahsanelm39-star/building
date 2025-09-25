"use client"

import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"

const GoUp = () => {

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            const el = document.querySelector(".arow") as HTMLElement
            if(window.scrollY > 500){
                el.classList.add("right-4")
            }else{
                el.classList.remove("right-4")
            }
        })
    },[])


    return (
        <div onClick={()=>{
            window.scrollTo(0,0)
        }} className="fixed bottom-4 -right-10 bg-[#ffc221] p-2 cursor-pointer transition-[1s] hover:bg-[#e8b21d] arow z-20">
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    )
}

export default GoUp