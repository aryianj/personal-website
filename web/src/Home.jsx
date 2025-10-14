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

  const reading = [
    {
      title: '1984',
      author: 'George Orwell',
    },
  ];

  const languages = [
    {
      title: 'HTML & CSS',
      star_rating: '★ ★ ★ ★ ★',
    },
    {
      title: 'JavaScript',
      star_rating: '★ ★ ★ ★ ☆',
    },
    {
      title: 'Go',
      star_rating: '★ ★ ★ ★ ☆',
    },
    {
      title: 'Python',
      star_rating: '★ ★ ★ ★ ☆',
    },
    {
      title: 'Java',
      star_rating: '★ ★ ★ ★ ☆',
    },
    {
      title: 'RiscV',
      star_rating: '★ ★ ★ ★ ☆',
    },
    {
      title: 'C',
      star_rating: '★ ★ ★ ☆ ☆',
    },
    {
      title: 'Haskell',
      star_rating: '★ ★ ☆ ☆ ☆',
    },
  ];

  const learning = [
    'Programming Language Paradigms @ USFCA',
    'Operating Systems @ USFCA',
    'Computer Architecture @ USFCA',
    'p5.js',
    'Photography',
  ];

  const loving = [
    'Fleabag - TV Show',
    'Logan - Movie',
    'We Live in Time - Movie',
    'The Social Network - Movie',
    'Hanging out with friends',
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex(i => (i === projects.length - 1 ? 0 : i + 1));
  const project = projects[index];
  return (
    <>
      <div><img src="/grain.png" alt="" className="absolute min-w-screen h-screen opacity-7 pointer-events-none" /></div>
      <div className="min-w-screen min-h-screen sm:p-3 p-1 bg-gradient-to-b from-gray-900 to-gray-500 flex flex-col">
        <div className="w-full flex-1 flex flex-col bg-gray-50 rounded-lg sm:pt-6 sm:px-6 sm:pb-0 pt-3 px-3 pb-0">
            <Nav />
            <div className='flex sm:flex-row flex-col'>
              <div className='sm:w-1/3 w-full p-4 sm:mx-2 sm:my-0 my-2 border-2 sm:rounded-none rounded-xl'>
                <h1 className='sm:text-lg sm:text-left text-center'>About Me</h1>
                <p className='sm:text-sm text-xs sm:text-left text-center'>Hey!! I’m Aryian (pronounced uh-ryan)
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

                <h1 className='sm:text-lg mt-2 sm:text-left text-center'>Languages</h1>
                <ul className='sm:text-sm text-xs sm:text-left text-center'>
                  {languages.map(lang => (
                    <li key={lang.title} className="flex">
                      <span className="w-32">{lang.title}</span>
                      <span>{lang.star_rating}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-1 flex-col p-4 border-2 sm:rounded-none rounded-xl'>
                <p className='mb-2 text-lg sm:text-left text-center'>Projects</p>
                <div className="flex flex-col items-center w-fit max-h-80">                
                <div className="flex items-center mb-2">
                  <button onClick={prev} className="px-2 text-2xl">‹</button>
                  <img src={project.image} alt={project.title} className="border-2 grayscale block mx-auto w-1/2" />
                  <button onClick={next} className="px-2 text-2xl">›</button>
                </div>
                <div className="text-center w-1/2 h-auto mx-auto flex flex-col items-center">
                  <p className="font-bold sm:text-lg mb-1">{project.title}</p>
                  <p className="sm:text-sm text-xs break-words mb-1">{project.description}</p>
                </div>
                <div className="flex justify-center mt-2 space-x-1">
                  {projects.map((_, i) => (
                    <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === index ? 'bg-gray-500' : 'bg-gray-300'}`}></span>
                  ))}
                </div>
              </div>
                <p className='sm:text-lg sm:text-left text-center sm:my-0 my-1'>Currently...</p>
                <div className="flex flex-row justify-between sm:mt-2 sm:text-left text-center">
                  <div className='flex'>
                    <ul>
                      <li className='sm:text-medium text-sm'>Reading</li>
                      {reading.map(book => (
                        <li key={book.title} className="sm:text-sm text-xs"><span className='text-blue-600'>{book.title}</span> by {book.author}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex'>
                    <ul>
                      <li className='sm:text-medium text-sm'>Learning</li>
                      {learning.map(course => (
                        <li key={course} className="sm:text-sm text-xs">{course}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex'>
                    <ul>
                      <li className='sm:text-medium text-sm'>Loving</li>
                      {loving.map(item => (
                        <li key={item} className="sm:text-sm text-xs">{item}</li>
                      ))}
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
