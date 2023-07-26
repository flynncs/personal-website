import React from 'react'
import {BiLogoPython, BiLogoReact, BiLogoJava, BiLogoJavascript, BiLogoGithub, BiLogoHtml5, BiLogoTailwindCss, BiLogoCss3} from 'react-icons/bi'


const Experience = () => {

  const techs = [
    {
      id: 1,
      src: <BiLogoPython size={70} className='w-30 mx-auto'/>,
      title: 'Python'
    },
    {
      id: 2,
      src: <BiLogoReact size={70} className='w-30 mx-auto'/>,
      title: 'React'
    },
    {
      id: 3,
      src: <BiLogoJava size={70} className='w-30 mx-auto'/>,
      title: 'Java'
    },
    {
      id: 4,
      src: <BiLogoJavascript size={70} className='w-30 mx-auto'/>,
      title: 'JavaScript'
    },
    {
      id: 5,
      src: <BiLogoGithub size={70} className='w-30 mx-auto'/>,
      title: 'GitHub'
    },
    {
      id: 6,
      src: <BiLogoHtml5 size={70} className='w-30 mx-auto'/>,
      title: 'HTML'
    },
    {
      id: 7,
      src: <BiLogoTailwindCss size={70} className='w-30 mx-auto'/>,
      title: 'TailwindCSS'
    },
    {
      id: 8,
      src: <BiLogoCss3 size={70} className='w-30 mx-auto'/>,
      title: 'CSS'
    },
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>I have experience working with the following technologies</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            techs.map(({id, src, title}) => (
              <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-600'>
                {src}
                <p className='mt-4'>{title}</p>
              </div>  
            ))
          }

          
        </div>
      </div>
    </div>
  )
}

export default Experience