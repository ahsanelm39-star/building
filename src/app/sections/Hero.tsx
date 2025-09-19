

const Hero = () => {
  return (
    <div className="relative hero h-[70vh] before:content('') before:absolute before:w-1/1 before:h-1/1 before:bg-[#00000056] flex justify-center items-center">
        <div className="relative container mx-auto px-4">
            <div className="w-150">
                <h1 className="font-bold h1 uppercase text-5xl text-white tracking-tight mb-4"> <span className="text-[#ffc221]">building</span> robust lasting solutions.</h1>
                <p className="text-md text-[#ffffffa2] font-bold tracking-tight">From concept to completion, we ensure every details is optimized for strength and endurance, creating solution that inspire confidence and stand firm for years</p>
            </div>
        </div>
    </div>
  )
}

export default Hero