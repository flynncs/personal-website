import React from 'react';
import HeroImage from "../assets/hero-cropped.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-stone-200 to-stone-100 text-sage-dark'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-sage-dark'>I'm a Software Engineering Student</h2>
          <p className='text-sage-light py-4 max-w-md'>
            ... studying at the University of Auckland. 
            I am interested in everything that this field encompasses, and am eager to learn more!
          </p>

          <div>
            <Link to="portfolio" smooth dureation={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-sage-dark to-sage-light cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home