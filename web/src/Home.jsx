import Nav from './Nav';


function Home() {

  return (
    <>
      <div className='flex h-screen w-screen bg-gradient-to-b from-[#1380CD] to-[#BFDCEA] items-center justify-center'>
        <div className='flex flex-col justify-center bg-white h-180 w-360 rounded-3xl border-1 drop-shadow-2xl'>
         <Nav />
            <div className="grid grid-cols-2 gap-4 mx-20 mt-20">
              <div className=" ">
                <h1 className='fn text-8xl text-center'>Aryian 
                  <br /> 
                  <span className='ln text-center'>Jones</span>
                </h1>
                <p className='pl-20 text-center'>pronounced uh-ryan</p>
                <p className='mt-30 text-center'>Aryian Jones is an aspiring front-end web engineer <br />
                and CS student @ USFCA. <a href='/about'>Click to learn more!</a></p>
              </div>
              <div className="...">
                <img src='./src/assets/hm.jpeg' className='h-110 rounded-3xl border-6 border-[#1480CD]' alt='picture of me!'>
                </img>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;
