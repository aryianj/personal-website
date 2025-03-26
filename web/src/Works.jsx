import Nav from './Nav';


function Works() {

  return (
    <>
      <div className='flex h-screen w-screen bg-gradient-to-b from-[#1380CD] to-[#BFDCEA] items-center justify-center'>
        <div className='flex flex-col justify-center bg-white h-180 w-360 rounded-3xl border-1 drop-shadow-2xl'>
          <Nav />
          <div className="mt-10">
                <h1 className='abt text-8xl text-center'>My
                  <span className='me text-center'>Works</span>
                </h1>
          </div>
          <div className="grid grid-cols-3 gap-4 mx-20 mt-5">
            <div className="...">
              <img src='/cal.png'/>
              <p><a href='https://weekly-aryian.vercel.app/'>My Calendar on a URL</a><br />
              <span className='font-light'>React, Tailwind, Vite, Vercel</span>
              </p>
            </div>
            <div className="...">
              <img src='/path.png'/>
              <p>PathNow (url on request/in development)<br />
              <span className='font-light'>React, Tailwind, Vite, Heroku, OpenAI API, Python, Node.js, MongoDB, Firebase</span>
              </p>
            </div>
            <div className="...">
              <img src='/git.png'/>
              <p><a href='https://github.com/aryianj'>Everything else is on GitHub</a><br />
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
