import Nave from "./Nave";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faYoutube, faFacebookF, faXTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header>
        <div className="bg-linear-to-t from-[#ffc221] to-[#ffd76e]">
          <div className="container mx-auto flex justify-between items-center py-2 px-4 max-md:justify-center ">
            <div className="flex gap-10 max-md:gap-6 items-center text-sm text-primary">
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-7 text-white bg-black p-2 " />
                <span className="pt-[2px]">+123 456 7890</span>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-7 text-white bg-black p-2 " />
                <span className="pt-[2px]">
                  email@gmail.com
                </span>
              </div>
            </div>
            <div className="flex gap-8 text-black max-md:hidden">
              <FontAwesomeIcon icon={faFacebookF} width={11} className='cursor-pointer'/>
              <FontAwesomeIcon icon={faYoutube} width={14} className='cursor-pointer'/>
              <FontAwesomeIcon icon={faXTwitter} width={14} className='cursor-pointer'/>
              <FontAwesomeIcon icon={faInstagram} width={14} className='cursor-pointer'/>
            </div>
          </div>
        </div>
        <Nave/>
    </header>
  )
}
export default Header;