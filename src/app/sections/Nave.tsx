import Image from 'next/image';
import Logo from '../../../public/images/logo.png'
import  List  from './List';
import Btn from './Btn';

const Nave = () => {
    return (
        <nav className='bg-primary '>
            <div className="collect  flex justify-between items-center py-3">
                <div>
                    <Image src={Logo} alt="Logo"  height={48} width={230} className='max-md:w-50 mr-8'/>
                </div>
                <div className='flex gap-10'>
                    <ul className='flex text-white items-center max-md:hidden ml-9'>
                        <li className=' on relative font-medium p-2 cursor-pointer text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>HOME</li>
                        <li className=' relative font-medium p-2 cursor-pointer text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>ABOUT</li>
                        <li className=' relative font-medium p-2 cursor-pointer text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>SERVICES</li>
                        <li className=' relative font-medium p-2 cursor-pointer text-sm after:content-["/"] after:text-[#ffd76e] after:absolute after:-right-3 mr-4 hover:text-[#ffd76e] transition-all'>PROJECTS</li>
                        <li className=' relative font-medium p-2 cursor-pointer text-sm  hover:text-[#ffd76e] transition-all'>CONTACT</li>
                    </ul>
                    <Btn bg={'white'} text={"GET A QUOTE"}/>
                </div>
                <List/>
            </div>
            
        </nav>
    )
}

export default Nave