import React from 'react'
import {BiLogoPython, BiLogoReact} from 'react-icons/bi'
import {MdConstruction} from 'react-icons/md'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      name: 'Python Battle Royale',
      src: <BiLogoPython size={100} className='w-30 mx-auto'/>,
      link: 'https://github.com/flynncs/python-battle-royale',
    },
    {
      id: 2,
      name: 'Python Type Racer',
      src: <BiLogoPython size={100} className='w-30 mx-auto'/>,
      link: 'https://github.com/flynncs/python-typewriter',
    },
    {
      id: 3,
      name: 'Personal React Website',
      src: <BiLogoReact size={100} className='w-30 mx-auto'/>,
      link: 'https://github.com/flynncs/personal-website',
    },
    {
      id: 4,
      name: '...',
      src: <MdConstruction size={100} className='w-30 mx-auto'/>,
      link: '',
    },
    {
      id: 5,
      name: '...',
      src: <MdConstruction size={100} className='w-30 mx-auto'/>,
      link: '',
    },
    {
      id: 6,
      name: '...',
      src: <MdConstruction size={100} className='w-30 mx-auto'/>,
      link: '',
    },
  ]

  return (
    <div
    name='portfolio'
    className='bg-gradient-to-b from-stone-200 to-stone-100 w-full text-sage-dark h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-sage-light'>Portfolio</p>
          <p className='py-6'>Check out some of my projects below</p>
        </div>

        

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({id, name, src, link}) => (
              <div id={id} className='shadow-md shadow-stone-300 rounded-lg hover:scale-105 duration-300'>
                <a href={link} target='_blank' rel='noreferrer' className='text-center'>
                  {src}
                  <p className='text-4xl font-bold py-6'>
                    {name}
                  </p>
                </a>
            </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Portfolio