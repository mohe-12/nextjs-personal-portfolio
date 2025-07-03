import React from 'react'
import Image from 'next/image'

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-60'>
      <div>
        <Image src="/profile-pic.png" alt="" className='rounded-full w-32' width={300} height={300}/>
      </div>
      <h3 className='flex items-end gap-2 text-x1 md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Mohammed Hasen <Image src="/hand-icon.png" alt="" className='rounded-full w-6'
             width={300} height={300}/></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[55px] font-Ovo'>
        Fullstack web developers
      </h1>
      <p className='max-w-3xl mx-auto lg:text-[18px] font-Ovo'>
        I am a fullstack web developer with a passion for creating dynamic and responsive web applications. 
        I specialize in both frontend and backend development, ensuring seamless user experiences and robust functionality.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 '>
        <a href="#contact" className='px-10 py-3 lg:text-[18px] border border-white rounded-full bg-black text-white flex items-center gap-2 '>
            Contact me 
          <Image src="/right-arrow-white.png" alt="" className='w-4' width={300} height={300}/>
        </a>
      
        <a href="/sample-resume.pdf" download 
           className='px-10 py-3 lg:text-[18px] border rounded-full border-gray-500 flex items-center gap-2'>
            My resume 
          <Image src="/download-icon.png" alt="" className='w-4' width={300} height={300}/>
        </a>
      </div>
    </div>
  )
}

export default Header
