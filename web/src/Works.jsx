import Nav from './Nav';


function Works() {

  return (
    <>
      <div className='sm:flex h-screen w-screen sm:bg-gradient-to-b sm:from-[#1380CD] sm:to-[#BFDCEA] sm:items-center sm:justify-center'>
        <div className='flex flex-col sm:bg-white sm:h-180 sm:w-360 sm:rounded-3xl sm:border-1 sm:drop-shadow-2xl'>
          <Nav />
          <h1 className='abt sm:text-7xl text-6xl text-center sm:mt-10'>Works</h1>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mx-20 mt-6">
            <div>
              <img src='/cal.png'/>
              <p>
                <a href='https://weekly-aryian.vercel.app/'>My Calendar on a URL</a><br />
                <span className='font-light'>React, Tailwind, Vite, Vercel</span>
              </p>
            </div>
            <div>
              <img src='/path.png'/>
              <p>PathNow (url on request/in development)<br />
                <span className='font-light'>React, Tailwind, Vite, Heroku, OpenAI API, Python, Node.js, MongoDB, Firebase</span>
              </p>
            </div>
            <div className='sm:mb-0 mb-4'>
              <img src='/git.png'/>
              <p>
                <a href='https://github.com/aryianj'>Everything else is on GitHub</a><br />
                <span className='font-light'>Other known languages: Java, C, Go, Python, Javascript</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works;
