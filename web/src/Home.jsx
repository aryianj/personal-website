import Nav from './Nav';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className='sm:flex h-screen w-screen sm:bg-gradient-to-b sm:from-[#1380CD] sm:to-[#BFDCEA] sm:items-center sm:justify-center'>
        <div className='flex flex-col sm:bg-white sm:h-180 sm:w-360 sm:rounded-3xl sm:border-1 sm:drop-shadow-2xl'>
         <Nav />
          <div className="grid sm:grid-cols-2 grid-cols-1 h-screen sm:m-4">
            <div className="flex flex-col sm:h-full h-100 w-full border-1 sm:border-r-0 sm:border-[#1480CD] bg-[#1380CD] items-center justify-center text-white text-center px-4 sm:rounded-tl-2xl sm:rounded-bl-2xl">
              <h1 className='fn text-8xl sm:mt-0 mt-4'>
                Aryian 
                <br /> 
                <span className='ln'>Jones</span>
              </h1>
              <p className='mt-10'>CS @ USFCA <span className='text-sm'>(pronounced uh-ryan)</span> <br/> <Link to="/about">Click to learn more!</Link></p>
            </div>
            <div className="flex flex-col h-full w-full items-center justify-center text-white text-center px-4 border-2 bg-white sm:border-[#1480CD] sm:rounded-tr-2xl sm:rounded-br-2xl sm:my-0 my-4">
              <img src='/hm.jpeg' className='sm:h-110 rounded-3xl border-4 border-[#1480CD]' alt='picture of me!'/>
              <p className='text-black sm:mb-0'>proficient in javascript, golang, python, java, c </p>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default Home;
/* <div className='flex flex-col h-screen w-screen'>      */