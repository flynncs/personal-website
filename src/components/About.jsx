import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>

        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse exercitationem animi sed incidunt, ex ab, vel nihil illum laboriosam  exlicabo eos doloribus asperiores voluptatem quasi! Consequuntur, nesciunt harum! Aspernatur earum labore commodi ex officia, sunt a eaque doloremque quidem, vel facilis in possimus natus libero, illum nihil hic voluptates!
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quas corrupti culpa nostrum nemo perferendis tempore adipisci voluptatibus dicta quod, fugiat magni aliquam minima quidem quisquam enim alias, in eaque. Voluptatum, odit fuga! Nostrum, vel eum cupiditate tempora numquam quam magni ea velit, atque fugiat rem ipsam nam ducimus.
        </p>
      </div>
    </div>
  )
}

export default About