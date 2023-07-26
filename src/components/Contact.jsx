import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-stone-200 to-stone-100 p-4 text-sage-dark'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-sage-light'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/0b43efee-88ea-4d86-8b79-39b252efbf08" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-sage-dark focus:outline-none border-sage-light'/>
            <input type="text" name='email' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-sage-dark focus:outline-none border-sage-light'/>
            <textarea name='message' rows='10' placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-sage-dark focus:outline-none border-sage-light'></textarea>

            <button className='text-white bg-gradient-to-b from-sage-light to-sage-dark px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Contact</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact