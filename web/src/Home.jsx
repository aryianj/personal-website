
import Footer from './Footer';
import Nav from './Nav';
import { useState } from 'react';

function Home() {
  const projects = [
    {
      image: '/path.png',
      title: 'Path',
      description: 'React, Tailwind, Heroku, OpenAI API, Python, and more',
    },
    {
      image: '/cal.png',
      title: 'Calendar App',
      description: 'React, Vercel, Tailwind, Node.js',
    },
     {
      image: '/bday!.png',
      title: 'Birthday Command',
      description: 'C, Unix, Command Line Tool',
    },
    {
      image: '/quiz.png',
      title: 'Quiz App',
      description: 'React, Tailwind, Vercel, Tailwind',
    },
  ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex(i => (i === projects.length - 1 ? 0 : i + 1));
  const project = projects[index];
  return (
    <>
  <div><img src="/grain.png" alt="" className="absolute w-full h-full mix-blend-plus-darker opacity-7 pointer-events-none" /></div>
      <div className="p-3 bg-gradient-to-b from-gray-900 to-gray-500 w-screen h-screen">
        <div className="h-full w-full flex flex-col bg-gray-50 rounded-lg p-6">
          <Nav />
          <div className='flex flex-row'>
            <div className='w-1/3 p-4 border-2'>
              <h1 className='text-lg'>About Me</h1>
              <p className='text-sm'>Hey!! I’m Aryian (pronounced uh-ryan)
                or Ryan. I am a 4th year Comp-Sci 
                student graduating in December 2025
                from the University of San Francisco.
                My major interests in CS include Front
                End Web Development and Software
                Engineering. My preferred languages
                are Go, Java, and JavaScript but I also 
                know C, Python, Haskell, and RiscV. 
                <br/><br/>
                Although I am a Cleveland, Ohio native,
                my heart (and body) resides in the Bay.
                I love collecting trinkets, thrifting, 
                reading novels, playing The Sims, learning new things, 
                traveling, and making silly
                websites.
                <br/><br/>
                I am open to internships and new grad
                positions.
                <br/><br/>
                Feel free to reach out, connect with me on LinkedIn, or
                view my GitHub!
              </p>

              <h1 className='text-lg mt-2'>Languages</h1>
              <ul className='text-sm'>
                <li className="flex"><span className="w-32">HTML & CSS</span><span>★ ★ ★ ★ ★</span></li>
                <li className="flex"><span className="w-32">JavaScript</span><span>★ ★ ★ ★ ☆</span></li>
                <li className="flex"><span className="w-32">Go</span><span>★ ★ ★ ★ ☆</span></li>
                <li className="flex"><span className="w-32">Python</span><span>★ ★ ★ ★ ☆</span></li>
                <li className="flex"><span className="w-32">Java</span><span>★ ★ ★ ★ ☆</span></li>
                <li className="flex"><span className="w-32">RiscV</span><span>★ ★ ★ ★ ☆</span></li>
                <li className="flex"><span className="w-32">C</span><span>★ ★ ★ ☆ ☆</span></li>
                <li className="flex"><span className="w-32">Haskell</span><span>★ ★ ☆ ☆ ☆</span></li>
              </ul>
            </div>
            <div className='flex flex-1 flex-col p-4 border-2 ml-2'>
              <p className='mb-2 text-lg'>Projects</p>
              <div className="flex flex-col items-center w-fit max-h-80">                
                <div className="flex items-center mb-2">
                  <button onClick={prev} className="px-2 text-2xl">‹</button>
                  <img src={project.image} alt={project.title} className="border-2 grayscale block mx-auto w-1/2" />
                  <button onClick={next} className="px-2 text-2xl">›</button>
                </div>
                <div className="text-center w-1/2 h-auto mx-auto flex flex-col items-center">
                  <p className="font-bold text-lg mb-1">{project.title}</p>
                  <p className="text-sm break-words mb-1">{project.description}</p>
                </div>
                <div className="flex justify-center mt-2 space-x-1">
                  {projects.map((_, i) => (
                    <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === index ? 'bg-gray-500' : 'bg-gray-300'}`}></span>
                  ))}
                </div>
              </div>
                <p className='text-lg'>Currently...</p>
                <div className="flex flex-row justify-between mt-2">
                  <div className='flex'>
                    <ul>
                      <li>Reading</li>
                      <li className="text-sm"><span className='text-blue-600'>Katabasis</span> by RF. Kuang</li>
                      <li className="text-sm"><span className='text-blue-600'>1984</span> by George Orwell</li>
                    </ul>
                  </div>
                  <div className='flex'>
                    <ul>
                      <li>Learning</li>
                      <li className="text-sm">Programming Language Paradigms @ USFCA</li>
                      <li className="text-sm">Operating Systems @ USFCA</li>
                      <li className="text-sm">Computer Architecture @ USFCA</li>
                      <li className="text-sm">p5.js</li>
                      <li className="text-sm">Photography</li>
                    </ul>
                  </div>
                  <div className='flex'>
                    <ul>
                      <li>Loving</li>
                      <li className="text-sm"><span className='text-blue-600'>Fleabag</span> - TV Show</li>
                      <li className="text-sm"><span className='text-blue-600'>Logan</span> - Movie</li>
                      <li className="text-sm"><span className='text-blue-600'>We Live in Time</span> - Movie</li>
                      <li className="text-sm"><span className='text-blue-600'>The Social Network</span> - Movie</li>
                      <li className="text-sm">Hanging out with friends</li>
                    </ul>
                  </div>
                </div> 
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home;
