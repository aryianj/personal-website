import Nav from './Nav';


function About() {

  return (
    <>
       <div className='sm:flex h-screen w-screen sm:bg-gradient-to-b sm:from-[#1380CD] sm:to-[#BFDCEA] sm:items-center sm:justify-center'>
        <div className='flex flex-col sm:bg-white sm:h-180 sm:w-360 sm:rounded-3xl sm:border-1 sm:drop-shadow-2xl'>
         <Nav />
         <div className="flex h-full justify-center items-center">
          <div className="grid sm:grid-cols-2 grid-cols-1">
              <div className='sm:w-2xl sm:mb-0 mb-4'>
                <h1 className='abt sm:text-7xl text-6xl text-center'>About
                  <span className='me text-center'>Me</span>
                </h1>
                <p className='tag mt-2 text-center sm:mx-0 mx-4'>Hi! I’m Aryian, you can call me Ryan if it’s easier 
                for you. 
                <br /> <br />
                <span className='font-medium'>Me As An Employee</span>
                <br />
                Javascript is my preferred coding language
                but I am proficient in Go, Java, Python, C, and RiscV. I have some experience in digital circuitry due
                to my Computer Architecture course. I absolutely adore Full Stack Web Development (with an emphasis on Front-End Development).
                However, I am open to any career in CS (i.e. Software Engineering, Backend Engineer, etc...) I am hardworking, quick to learn new things,
                independent, and always open to criticism and feedback.
                If you would like to learn more about my work history and education, please check out the contact page!

                <br /><br />
                <span className='font-medium'>Me As A Person</span>
                <br />

                I’m a Cleveland, Ohio native but currently based 
                in San Francisco! I love collecting cat related items, thrifting, Chamomile tea, reading in bed with a candle lit, 
                drafting stories, editing essays, visiting beaches and parks, and listening to music. You can 
                often find me on Haight street or on the BART.</p>
              </div>
              <div className="flex justify-center items-center sm:mx-0 mx-4 sm:mb-0 mb-4">
                <img src='/nice.png' className='sm:h-130 rounded-3xl border-4 border-[#1480CD]' alt='national park' />

              </div>
            </div>
         </div>
          
        </div>
      </div>
    </>
  )
}

export default About;
