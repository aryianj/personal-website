import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <>
          <nav className='absolute w-screen top-15 mx-30'>
            <ul className="flex flex-row font-medium gap-10 rounded-lg w-fit">
              <li>
              <Link to="/works"><p className="block py-2 px-3 text-gray-900 rounded-sm text-4xl hover:bg-gray-100">WORKS</p></Link>
              </li>
              <li>
              <Link to="/about"><p className="block py-2 px-3 text-gray-900 rounded-sm text-4xl hover:bg-gray-100">ABOUT</p></Link>
              </li>
              <li>
              <Link to="/contact"><p className="block py-2 px-3 text-gray-900 rounded-sm text-4xl hover:bg-gray-100 ">CONTACT</p></Link>
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
