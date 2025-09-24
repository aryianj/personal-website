import './App.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex flex-row justify-between mb-5">
        <div className="flex flex-row items-center text-gray-900 text-xl rounded-sm">
          <img src="/a.png" className='h-20 border-2 rounded-full mr-4' alt="" />
          <div className="flex flex-col">
            <p className='text-4xl name'>Aryian Jones</p>
            <p className='text-sm mt-0.5 desc'>Web Developer, Software Engineer, Student <br/> Based in San Francisco</p>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-900 text-xl rounded-sm">
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
