"use client"

import { useEffect } from "react"

const States = () => {
    useEffect(() => {
        let started = false
        const section = document.querySelector(".section") as HTMLElement
        const sectionEle = document.querySelectorAll(".section>div>div div[data-set]") as NodeListOf<HTMLElement>

        const handleScroll = () => {
            if (window.scrollY > section.offsetTop - 400) {
                if (!started) {
                    sectionEle.forEach((div) => {
                        const goal = parseInt(div.dataset.set || "0")
                        let current = 0
                        const increment = Math.ceil(goal / 50) // سرعة العد

                        const counter = setInterval(() => {
                            current += increment
                            if (current >= goal) {
                                div.textContent = String(goal)
                                clearInterval(counter)
                            } else {
                                div.textContent = String(current)
                            }
                        }, 30) // سرعة التحديث
                    })
                    started = true
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="bg-primary py-10 section state-section">
            <div className="collect flex justify-between text-white gap-18 max-md:gap-10 flex-wrap">
                <div className="text-center">
                    <div className="text-4xl font-bold inline" data-set='99'>0</div><span className="text-4xl font-bold inline">%</span>
                    <p className="text-sm opacity-80 mt-1">Client satisfaction</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold inline" data-set='88'>0</div><span className="text-4xl font-bold inline">+</span>
                    <p className="text-sm opacity-80 mt-1">Successful projects</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold inline" data-set='32'>0</div><span className="text-4xl font-bold inline">K</span>
                    <p className="text-sm opacity-80 mt-1">Happy Client</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold inline" data-set='26'>0</div><span className="text-4xl font-bold inline">+</span>
                    <p className="text-sm opacity-80 mt-1">Years of Experience</p>
                </div>
            </div>
        </div>
    )
}

export default States