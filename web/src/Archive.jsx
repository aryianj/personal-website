
import Footer from './Footer';
import Nav from './Nav';
import { useState } from 'react';

function About() {
  const projects = [
    {
      image: '/tooooools.png',
      link: 'https://tooooools.app',
      title: 'tooooools.app',
      description: 'A cool website that allows you to add effects to images for free!',
    },
    {
      image: '/internet-archive.png',
      link: 'https://archive.org',
      title: 'Internet Archive',
      description: 'A non-profit digital library for all things digital for free!',
    },
    {
      image: '/ascii-art.png',
      title: 'ASCII Art',
      link: 'https://www.asciiart.eu/',
      description: 'A collection of ASCII art for all your text-based needs!',
    },
    {
      image: '/saint-heron.png',
      title: 'Saint Heron Library',
      link: 'https://library.saintheron.com/',
      description: 'A free library of Black and Brown literature and culture.',
    },
 
  ];

  const books = [
    {
      title: 'Cracking The Coding Interview',
      author: 'Gayle Laakmann McDowell',
    },
    {
      title: 'Martyr!',
      author: 'Kaveh Akbar',
    },
     {
      title: 'This is How You Lose the Time War',
      author: 'Amal El-Mohtar and Max Gladstone',
    },
    {
      title: 'The Hypocrite',
      author: 'Jo Hamya',
    },
    {
      title: 'Ace of Spades',
      author: 'Faridah Àbíké-Íyímídé',
    },
    {
      title: 'The Yellow Wallpaper',
      author: 'Charlotte Perkins Gilman',
    },
    {
      title: 'The Metamorphosis',
      author: 'Franz Kafka',
    },
    {
      title: 'Carmilla',
      author: 'Joseph Sheridan Le Fanu',
    },
    {
      title: 'The Dance Boots',
      author: 'Linda LeGarde Grover',
    },
    {
      title: 'Open Water',
      author: 'Caleb Azumah Nelson',
    },
  ];

  const substacks = [
    {
      title: 'My Twin Brother',
      author: 'Jess',
    },
    {
      title: 'Internet People',
      author: 'Internet People',
    },
    {
      title: 'Small Pleasures',
      author: 'Sandy Sanchez',
    },
    {
      title: 'Your Style Sucks (but so does mine)',
      author: 'Bec Benwah',
    },
    {
      title: 'Threads of Tech',
      author: 'Threads of Tech',
    },
    {
      title: 'Goodies',
      author: 'Natalie Stiles',
    },
    {
      title: 'early girl',
      author: 'Bella',
    },

  ];

  const restaurants = [
    {
      title: 'Cassava',
      location: 'San Francisco',
    },
    {
      title: 'Tastebuds',
      location: 'San Francisco',
    },
    {
      title: 'Mirchi Cafe',
      location: 'Dublin, CA',
    },
  ];

  const bookstores = [
    {
      title: 'City Lights Books',
      location: 'San Francisco',
    },
    {
      title: 'Green Apple Books',
      location: 'San Francisco',
    },
    {
      title: 'The Booksmith',
      location: 'San Francisco',
    },
  ];

  const events = [
    {
      title: 'The Intersection of Art & Tech',
      location: 'San Francisco',
    },
  ];

  const tech = [
    {
      name: 'FujiFilm A200 FinePix',
      type: 'Camera',
    }, 
     {
      name: 'Google Sheets',
      type: 'Software',
    }
  ];

  const cafes = [
    {
      name: 'Dutch Bros',
      location: 'Fairfield, CA',
    },
    {
      name: 'Phils Coffee',
      location: 'Various Locations',
    },
  ];

  const bakeries = [
    {
      name: '85C Bakery Cafe',
      location: 'Dublin, CA',
    }
  ]

  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex(i => (i === projects.length - 1 ? 0 : i + 1));
  const project = projects[index];
  return (
    <>
      <div><img src="/grain.png" alt="" className="absolute w-full h-full mix-blend-plus-darker opacity-7 pointer-events-none" /></div>
        <div className="min-w-screen min-h-screen sm:p-3 p-1 bg-gradient-to-b from-gray-900 to-gray-500 flex flex-col">
        <div className="w-full flex-1 flex flex-col bg-gray-50 rounded-lg sm:pt-6 sm:px-6 sm:pb-0 pt-3 px-3 pb-0">
          <Nav />
          <div className='flex sm:flex-row flex-col xl:h-140 sm:mt-0 mt-2'>
            <div className='flex flex-1 flex-col p-4 border-2 sm:rounded-none rounded-xl sm:mb-0 mb-2'>
              <p className='mb-2 sm:text-lg sm:text-left text-center'>Internet Finds</p>
              <div className="flex flex-col items-center w-fit">                
                  <div className="flex items-center mb-2 justify-center w-full">
                    <img src={project.image} alt={project.title} className="border-2 grayscale sm:h-103 mx-20" />
                  </div>
                <div className="text-center w-1/2 flex flex-col items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold sm:text-lg mb-1 hover:underline">
                    {project.title}
                  </a>
                  <p className="sm:text-sm text-xs break-words">{project.description}</p>
                </div>
                <div className="flex justify-center mt-2 space-x-1">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`inline-block w-3 h-3 rounded-full focus:outline-none transition-colors duration-200 ${i === index ? 'bg-gray-500' : 'bg-gray-300'}`}
                      aria-label={`Show project ${i + 1}`}
                    />
                  ))}
                </div>
                </div> 
            </div>
            <div className='sm:w-1/3 w-full p-4 sm:mx-2 border-2 sm:rounded-none rounded-xl sm:text-left text-center overflow-y-scroll'>
              <h1 className='sm:text-lg mb-1'>Media & Places</h1>
              <div className='flex flex-col'>
                 <ul className='mb-4 sm:text-medium text-sm'>
                      <li>Bookstores</li>
                      {bookstores.map((bookstore, index) => (
                        <li key={index} className="sm:text-sm text-xs"><span className='text-blue-600'>{bookstore.title}</span> {bookstore.location}</li>
                      ))}
                      </ul>
                  <ul className='mb-4 sm:text-medium text-sm'>
                      <li>Books</li>
                      {books.map((book, index) => (
                        <li key={index} className="sm:text-sm text-xs"><span className='text-blue-600'>{book.title}</span> by {book.author}</li>
                      ))}
                    </ul>
                     <ul className='mb-4 sm:text-medium text-sm'>
                      <li>Substacks</li>
                      {substacks.map((substack, index) => (
                        <li key={index} className="sm:text-sm text-xs"><span className='text-blue-600'>{substack.title}</span> by {substack.author}</li>
                      ))}
                    </ul>
                    <ul className='mb-4 sm:text-medium text-sm'>
                      <li>Events</li>
                      {events.map((event, index) => (
                        <li key={index} className="sm:text-sm text-xs"><span className='text-blue-600'>{event.title}</span> {event.location}</li>
                      ))}
                    </ul>
                      <ul className='mb-4 sm:text-medium text-sm'>
                      <li>Tech</li>
                      {tech.map((item, index) => (
                        <li key={index} className="sm:text-sm text-xs"><span className='text-blue-600'>{item.name}</span> {item.type}</li>
                      ))}
                    </ul>
                       <ul className='mb-4 sm:text-medium text-sm'>
                      <li>Restaurants</li>
                      {restaurants.map((restaurant, index) => (
                        <li key={index} className="sm:text-sm text-xs"><span className='text-blue-600'>{restaurant.title}</span> {restaurant.location}</li>
                      ))}
                    </ul>
                      <ul className='mb-4 sm:text-medium text-sm'>
                      <li>Cafes</li>
                      {cafes.map((cafe, index) => (
                        <li key={index} className="sm:text-sm text-xs"><span className='text-blue-600'>{cafe.name}</span> {cafe.location}</li>
                      ))}
                    </ul>
                      <ul className='mb-4 sm:text-medium text-sm'>
                      <li>Bakeries</li>
                      {bakeries.map((bakery, index) => (
                        <li key={index} className="sm:text-sm text-xs"><span className='text-blue-600'>{bakery.name}</span> {bakery.location}</li>
                      ))}
                    </ul>
                  </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default About;
