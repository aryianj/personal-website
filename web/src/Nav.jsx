import './App.css'
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <>
          <nav className='absolute w-screen top-15 mx-30'>
            <ul className="flex flex-row font-medium gap-10 rounded-lg w-fit">
              <li className='overflow-hidden'>
              <Link to="/works"><p className="relative block py-2 px-3 text-gray-900 rounded-sm text-4xl after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[#1480CD] after:opacity-0 after:transition-all after:duration-300 after:translate-x-4 hover:after:opacity-100 hover:after:translate-x-0">WORKS</p></Link>
              </li>
              <li className='overflow-hidden'>
              <Link to="/about"><p className="relative block py-2 px-3 text-gray-900 rounded-sm text-4xl after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[#1480CD] after:opacity-0 after:transition-all after:duration-300 after:translate-x-4 hover:after:opacity-100 hover:after:translate-x-0">ABOUT</p></Link>
              </li>
              <li className='overflow-hidden'>
              <Link to="/contact"><p className="relative block py-2 px-3 text-gray-900 rounded-sm text-4xl after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[#1480CD] after:opacity-0 after:transition-all after:duration-300 after:translate-x-10 hover:after:opacity-100 hover:after:translate-x-0">CONTACT</p></Link>
              </li>
              <li>
              <Link to="/"><h1 className='text-center text-7xl '>Aryian Jones</h1></Link>
              </li>
              <li> 
                <MdOutlineStar className="text-9xl rotate-12 -mt-8 text-[#1480CD]" />
              </li>
            </ul>
          </nav>
    </>
  )
}

export default Nav;
