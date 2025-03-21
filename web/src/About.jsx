import Nav from './Nav';


function About() {

  return (
    <>
      <div className='flex h-screen w-screen bg-gradient-to-b from-[#1380CD] to-[#BFDCEA] items-center justify-center'>
        <div className='flex flex-col justify-center bg-white h-180 w-360 rounded-3xl border-1 drop-shadow-2xl'>
         <Nav />
            <div className="grid grid-cols-2 gap-4 mx-20 mt-20">
              <div className=" ">
                <h1 className='abt text-8xl text-center'>About
                  <span className='me text-center'>Me</span>
                </h1>
                <p className='tag mt-10 ml-30'>Hi! I’m Aryian, you can call me Ryan if it’s easier <br /> 
                for you. I’m a 4th year CS student graduating De- <br />  
                cember 2025. I have a passion for front-end web  <br />  
                development but open to learning/doing every  <br />  
                aspect of computer science. I’m open to intern- <br />  
                ships and new grad offers.
                <br /><br />
                I’m a Cleveland, Ohio native but currently based <br />  
                in San Francisco! I love love love collecting silly  <br />  
                little items, thrifting, reading science fiction/ <br />  
                fantasy novels and playing the sims. You can  <br />  
                often find me on Haight street or on the BART.</p>
              </div>
              <div className="...">
                <img src='/abt.jpeg' className='h-110 rounded-3xl border-6 border-[#1480CD]' alt='picture of me!' />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About;
