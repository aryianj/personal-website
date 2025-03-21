import { MdOutlineStar } from "react-icons/md";

function Nav() {

  return (
    <>
   
          <nav className='absolute w-screen top-15 mx-30'>
            <ul className="flex flex-row font-medium gap-10 rounded-lg w-fit">
              <li>
                <a href="/works" className="block py-2 px-3 text-gray-900 rounded-sm text-4xl hover:bg-gray-100">WORKS</a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3 text-gray-900 rounded-sm text-4xl hover:bg-gray-100">ABOUT</a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 text-gray-900 rounded-sm text-4xl hover:bg-gray-100 ">CONTACT</a>
              </li>
              <li>
                <a href='/'>
                  <h1 className='text-center text-7xl '>Aryian Jones</h1>
                </a>
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
