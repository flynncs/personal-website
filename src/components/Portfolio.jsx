import React from 'react'
import TypeRacer from '../assets/type-racer.png'
import BattleRoyale from '../assets/battle-royale.png'
import PersonalWebsite from '../assets/personal-website.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: BattleRoyale,
      link: 'https://github.com/flynncs/python-battle-royale',
    },
    {
      id: 2,
      src: TypeRacer,
      link: 'https://github.com/flynncs/python-typewriter',
    },
    {
      id: 3,
      src: PersonalWebsite,
      link: 'https://github.com/flynncs/personal-website',
    },
  ]

  return (
    <div
    name='portfolio'
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my projects below</p>
        </div>

        

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            portfolios.map(({id, src, link}) => (
              <div id={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <a href={link} target='_blank' rel='noreferrer'>
                  <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
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