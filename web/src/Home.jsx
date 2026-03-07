import Footer from './Footer';
import Nav from './Nav';
import { useState } from 'react';

function Home() {
  const projects = [
    {
      title: 'Donzart',
      tools: 'React, Typescript, Tailwind, NextJS, Convex',
      link: 'https://github.com/number1jmookfan/donzart'
    },
    {
      title: 'Unix System Utility Suite',
      tools: 'C, Linux',
      link: 'https://github.com/aryianj/FogOSv2'
    },
    {
      title: 'Wordle',
      tools: 'Java',
      link: 'https://github.com/aryianj/wordle'
    },
    {
      title: 'Hazard Pipeline',
      tools: 'Assembly',
      link: 'https://github.com/aryianj/hazard-pipeline'
    },
    {
      title: 'Risc-V Emulation, Analysis, and Cache Simulation',
      tools: 'Assembly, C',
      link: 'https://github.com/aryianj/cache-riscv-in-c'
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

  return (
    <>
      <div>
        <img src='/grain.png' alt='' className='fixed w-screen min-h-screen opacity-6 pointer-events-none z-[100]' />
      </div>
      <Nav />
      <div className='bg-[#fcfce8] overflow-x-hidden'>
        
        <div id='main' className='w-full min-h-screen flex flex-col items-center justify-center text-center px-4 border-b border-gray-900/10'>  
          <h1 className='sm:text-5xl text-3xl font-bold mb-4'>Aryian Jones</h1>
          <p className='sm:text-sm text-xs w-11/12 md:w-1/2'>
            I'm a Software Engineer and a recent Computer Science graduate from the University of San Francisco.
            Currently, I'm focusing on blending system-level knowledge
            with modern application development.
          </p>
        </div>

        <div id='abt' className='w-full min-h-screen flex flex-col items-center justify-center text-center py-20 px-4 border-b border-gray-900/10'>  
          <img src='/a.png' className='sm:h-35 h-20 border rounded-full mb-4' alt='Aryian Jones' />
          <h1 className='sm:text-5xl text-3xl font-bold mb-4'>About Me</h1>
          <div className='sm:text-sm text-xs w-11/12 md:w-1/2'>
            <p>
              I'm a Software Engineer currently based in Cleveland, Ohio but open to opportunities elsewhere.
              My goal is to build tools that solve real-world problems, while occasionally creating the space to just have more fun.
            </p>
            <br/>
            <p>
              My journey has taken me from the high-level world of Full-Stack Development at PathNow to the under-the-hood complexity of architecting system calls for FogOS in my Operating Systems course.
              Whether I’m optimizing RESTful APIs, designing RISC-V emulators in C, or building AI-powered assistants with Go, I focus on creating secure tools that matter.
            </p>
            <br/>
            <p>
              I thrive in environments that challenge my technical limits, and I’m looking to bring that same curiosity and drive to a forward-thinking team.
            </p>
            <br/>
            <p className='mb-4'>Here are the technologies I'm familiar with and my proficiency level:</p>
            
            <ul className='w-full max-w-md mx-auto'>
              {languages.map(lang => (
                <li key={lang.title} className='flex justify-between space-y-1'>
                  <span>{lang.title}</span>
                  <span className='font-mono'>{lang.star_rating}</span>
                </li>
              ))}
            </ul>
            <br/>
            <p>Open to full-time roles: <a href='mailto:aryianjones03@gmail.com' target='_blank' rel='noopener noreferrer' className='text-[#6E8FB7] hover:underline'>email me</a>.</p>
          </div>
        </div>
        <div id='work' className='w-full min-h-screen flex flex-col items-center justify-center text-center py-20 px-4'>  
          <h1 className='sm:text-5xl text-3xl font-bold mb-4'>My Work</h1>
          <h2 className='sm:text-2xl text-lg font-bold mb-1'>Experience</h2>
          <div className='sm:text-sm text-xs w-11/12 md:w-1/2'>
            <p className='mb-2'>
              I interned at a start-up technology company called <a href='https://www.linkedin.com/company/pathnow/' className='text-[#6E8FB7] hover:underline'>PathNow</a> where I:
            </p>
            <ul className='list-disc text-left inline-block w-full px-6 space-y-1'>
              <li>Engineered the frontend ecosystem from the ground up using React and Tailwind CSS.</li>
              <li>Architected and implemented a secure user authentication system utilizing Firebase/Firestore.</li>
              <li>Integrated RESTful APIs to synchronize application states with a MongoDB backend.</li>
              <li>Implemented automated quality assurance by developing a Selenium testing suite.</li>
            </ul>
          </div>

          <div className='mt-12 w-11/12 md:w-1/2'>
            <h2 className='sm:text-2xl text-lg font-bold mb-4'>Projects</h2>
            <ul className='w-full sm:text-sm text-xs'>
              {projects.map(project => (
                <li key={project.title} className='flex flex-col sm:flex-row sm:justify-between space-y-1'>
                  <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-[#6E8FB7] hover:underline font-medium'>{project.title}</a>
                  <span>{project.tools}</span>
                </li>
              ))}
            </ul>
            <p className='mt-6 sm:text-sm text-xs'> 
              GitHub can be found <a href='https://github.com/aryianj/' target='_blank' rel='noopener noreferrer' className='text-[#6E8FB7] hover:underline'>here</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;
