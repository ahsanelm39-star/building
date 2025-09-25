import Btn from "./Btn"


const Hero = () => {
  return (
    <section className="relative hero h-[70vh] before:content('') before:absolute before:w-1/1 before:h-1/1 before:bg-[#00000056] flex justify-center items-center">
        <div className="relative collect">
            <div className="w-150 max-md:w-1/1 max-md:text-center mb-6">
                <h1 className="font-bold h1 uppercase text-5xl text-white tracking-tight mb-4 max-md:text-4xl"> <span className="text-[#ffc221]">building</span> robust lasting solutions.</h1>
                <p className="text-md text-[#ffffffa2] font-bold tracking-tight">From concept to completion, we ensure every details is optimized for strength and endurance, creating solution that inspire confidence and stand firm for years</p>
            </div>
            <Btn bg={'#ffc221'} text={"SEE OUR WORK"} />
        </div>
    </section>
  )
}

export default Hero