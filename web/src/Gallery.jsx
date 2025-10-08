
import Footer from './Footer';
import Nav from './Nav';
import { useState } from 'react';

function Gallery() {
  const photos = [
    {
      image: '/p1.jpeg',
      title: 'Mountain off of a highway in California',
    },
    {
      image: '/p2.jpeg',
      title: 'Trees off of a highway in California.',
    },
    {
      image: '/p3.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },

    {
      image: '/p4.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
    {
      image: '/p5.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
     {
      image: '/p6.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
     {
      image: '/p7.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
     {
      image: '/p8.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
     {
      image: '/p9.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
     {
      image: '/p10.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
    {
      image: '/p11.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
     {
      image: '/p12.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
     {
      image: '/p13.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
     {
      image: '/p14.jpeg',
      title: 'Trees and a mountain off of a highway in California.',
    },
  ];

  return (
    <>
  <div><img src="/grain.png" alt="" className="absolute w-full h-full mix-blend-plus-darker opacity-7 pointer-events-none" /></div>
      <div className="p-3 bg-gradient-to-b from-gray-900 to-gray-500 w-screen h-screen">
        <div className="h-full w-full flex flex-col bg-gray-50 rounded-lg p-6">
            <Nav />
            <a href='https://instagram.com/ryi.fm' className='text-lg'><p className='hover:text-lime-700'>ryi.fm</p></a>
            <p className='mb-4 text-sm'>A collection of photos I've taken. <span className='text-xs text-gray-700'>Note: This is just to document my progress. I have not learned photography or editing yet, so please bear with me!</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-scroll'>
                {photos.map((photo, index) => (
                    <div key={index} className=''>
                        <img src={photo.image} alt={photo.title} className='border h-80'/>
                    </div>
                ))}
            </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Gallery;
