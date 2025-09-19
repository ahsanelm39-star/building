import Image from 'next/image';
import Logo from '../../../public/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import  List  from './List';

const Nave = () => {
    return (
        <nav className='bg-black'>
            <div className="container mx-auto px-4 flex justify-between items-center py-3">
                <div>
                    <Image src={Logo} alt="Logo"  height={48} width={230} className='max-md:w-50'/>
                </div>
                <div className='flex gap-10'>
                    <ul className='flex text-white items-center max-md:hidden'>
                        <li className=' on relative font-medium p-2 cursor-pointer before:con text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>HOME</li>
                        <li className=' relative font-medium p-2 cursor-pointer before:con text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>ABOUT</li>
                        <li className=' relative font-medium p-2 cursor-pointer before:con text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>SERVICES</li>
                        <li className=' relative font-medium p-2 cursor-pointer before:con text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>PROJECTS</li>
                        <li className=' relative font-medium p-2 cursor-pointer before:con text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>CONTACT</li>
                    </ul>
                    <div className='get-box bg-white px-3 py-1 font-medium flex gap-4 items-center cursor-pointer max-lg:hidden'>
                        <span className='text-black font-bold text-sm tracking-tight'>GET A QUOTE</span>
                        <div className='bg-black text-white px-2 py-1'>
                            <FontAwesomeIcon icon={faArrowRight} className='icon text-sm -rotate-40 transition-all'/>
                        </div>
                    </div>
                </div>
                <List/>
            </div>
            
        </nav>
    )
}

export default Nave