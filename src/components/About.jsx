import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-stone-100 to-stone-200 text-sage-dark'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-sage-light'>
            About
          </p>
        </div>

        <p className='text-xl mt-20'>
          Hi, I'm Flynn, a second year software engineering student at the University of Auckland. I've taken an interest in everything related to this field since high school, and I'm learning more about it every day! 
        </p>

        <br />

        <p className='text-xl'>
          I am fortunate enough to have previously interned at Daifuku Oceania for 2 years, and am grateful for everything I learned whilst there. 
        </p>

        <br />

        <p className='text-xl'>
          I am currently searching for an internship over the coming summer holidays, which would allow me to grow and develop myself - both professionally and personally!
        </p>
      </div>
    </div>
  )
}

export default About