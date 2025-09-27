import Link from "next/link";
import Btn from "./Btn"
import H1 from "./H1";

const Hero = () => {
  return (
    <section className="relative hero h-[70vh] before:content('') before:absolute before:w-1/1 before:h-1/1 before:bg-[#00000056] flex justify-center items-center">
        <div className="relative collect">
            <div className="w-150 max-md:w-1/1 max-md:text-center mb-6">
                <H1/>
                <p className="text-md text-[#ffffffa2] font-bold tracking-tight">From concept to completion, we ensure every details is optimized for strength and endurance, creating solution that inspire confidence and stand firm for years</p>
            </div>
            <Link href={"#projects"}>
              <Btn bg={'#ffc221'} text={"SEE OUR WORK"} />
            </Link>
        </div>
    </section>
  )
}

export default Hero