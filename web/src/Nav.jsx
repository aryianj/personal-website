import { useState } from 'react';
import './App.css'
import { Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);
  function showSideBar() {
    
  }
  return (
    <>
      <nav className="hidden sm:flex w-screen justify-center mt-4">
        <div className="flex space-x-12 text-gray-900 text-xl rounded-sm">
          <div>
            <Link to="/"><p>ARYIAN JONES</p></Link>
          </div>
          <div>
            <Link to="/works"><p>WORKS</p></Link>
          </div>
          <div>
            <Link to="/about"><p>WHO AM I?</p></Link>
          </div>
          <div>
            <Link to="/contact"><p>WORK WITH ME</p></Link>
          </div>
        </div>
      </nav>
    <nav className="sm:hidden flex flex-col w-screen mt-6 ml-4">
      <button type="button" onClick={() => setOpen(!open)}>
        {!open && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.499 8.248h15m-15 7.501h15" /></svg>

        )}
        {open && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
        )}
      </button>
      <br/>
       {open && 
        (
        <div className="flex flex-col text-gray-900 rounded-sm text-sm mb-4">
          <div>
            <Link to="/"><p>ARYIAN JONES</p></Link>
          </div>
          <div>
            <Link to="/works"><p>WORKS</p></Link>
          </div>
          <div>
            <Link to="/about"><p>WHO AM I?</p></Link>
          </div>
          <div>
            <Link to="/contact"><p>WORK WITH ME</p></Link>
          </div>
        </div>
        )
      }
    </nav>

   
    </>
  )
}

export default Nav;
