import { useState } from 'react';
import './App.css'
import { Link } from "react-router-dom";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className={`flex flex-row justify-between relative ${showMenu ? 'sm:mb-2 -mb-7' : 'sm:mb-2 -mb-18'} `}>
        <div className='flex flex-row items-center text-gray-900 rounded-sm'>
          <img src="/a.png" className='sm:h-22 h-0 border-2 rounded-full sm:mr-4' alt="" />
          <div className="flex flex-col">
            <p className='sm:text-3xl text-xl '>Aryian Jones</p>
            <p className='sm:visible invisible'>Web Developer, UI/UX Designer, Student</p>
            <p className='sm:visible invisible'>Based in <span className='text-blue-600 '>San Francisco</span></p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:space-x-3 text-gray-900 sm:text-xl text-sm rounded-sm">
          <button onClick={() => setShowMenu(!showMenu)} className="sm:hidden">
            <span className={showMenu ? 'hidden' : ''}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></span>
            <span className={showMenu ? '' : 'hidden'}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span>
          </button>
          {showMenu && (
            <div className="flex flex-row sm:hidden p-2 absolute top-8 right-1.5 space-x-1">
              <Link to="/" onClick={() => setShowMenu(false)}>Home</Link>
              <Link to="/archive" onClick={() => setShowMenu(false)}><p>Archive</p></Link>
              <a href="/Aryian-Jones-Resume-2025.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setShowMenu(false)}><p>Resume</p></a>
              <a href="https://www.linkedin.com/in/aryianjones" target="_blank" rel="noopener noreferrer" onClick={() => setShowMenu(false)}><p>LinkedIn</p></a>
              <a href="https://www.github.com/aryianj" target="_blank" rel="noopener noreferrer" onClick={() => setShowMenu(false)}><p>GitHub</p></a>
            </div>
          )}
          </div>
        <div className="hidden sm:flex sm:flex-row sm:space-x-3 text-gray-900 sm:text-xl text-sm rounded-sm">
          <Link to="/">Home</Link>
          <Link to="/archive"><p>Archive</p></Link>
          <a href="/Aryian-Jones-Resume-2025.pdf" target="_blank" rel="noopener noreferrer"><p>Resume</p></a>
          <a href="https://www.linkedin.com/in/aryianjones" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
          <a href="https://www.github.com/aryianj" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a>
        </div>
      </nav>
    </>
  )
}

export default Nav;