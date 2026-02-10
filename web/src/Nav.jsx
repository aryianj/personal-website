import { useState } from 'react';
import './App.css'

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className='w-full flex flex-row justify-between fixed py-2 px-4 bg-[#fcfce8]/60 backdrop-blur-md border-b border-gray-900/10 z-50'>        
        <img src='/substack logo.png' className='h-8'></img>
        <div className='flex sm:flex-row flex-col sm:space-x-3 text-gray-900 sm:text-xl text-sm rounded-sm'>
          <button onClick={() => setShowMenu(!showMenu)} className='sm:hidden'>
            <span className={showMenu ? 'hidden' : ''}><svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'><path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'/></svg></span>
            <span className={showMenu ? '' : 'hidden'}><svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000000'><path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/></svg></span>
          </button>
          {showMenu && (
            <div className='flex flex-col sm:hidden p-2 absolute top-8 right-1.5 space-y-1 border rounded-md shadow-md z-20'>
              <a href='#abt'>About</a>
              <a href='#work'>Works</a>
              <a href='/Aryian-Jones-Resume-2025.pdf' target='_blank' rel='noopener noreferrer'><p>Resume</p></a>
              <a href='https://www.linkedin.com/in/aryianjones' target='_blank' rel='noopener noreferrer'><p>LinkedIn</p></a>
              <a href='https://www.github.com/aryianj' target='_blank' rel='noopener noreferrer'><p>GitHub</p></a>
            </div>
            )}
        </div>
        <div className='hidden sm:flex sm:flex-row sm:space-x-2 text-gray-900 sm:text-lg text-sm rounded-sm'>
          <a href='#abt' className='hover:underline'>About</a>
          <a href='#work' className='hover:underline'>Works</a>
          <a href='/Aryian-Jones-Resume-2025.pdf' target='_blank' rel='noopener noreferrer' className='hover:underline'><p>Resume</p></a>
          <a href='https://www.linkedin.com/in/aryianjones' target='_blank' rel='noopener noreferrer'  lassName='hover:underline'><p>LinkedIn</p></a>
          <a href='https://www.github.com/aryianj' target='_blank' rel='noopener noreferrer' className='hover:underline'><p>GitHub</p></a>
        </div>
      </nav>
    </>
  )
}

export default Nav;