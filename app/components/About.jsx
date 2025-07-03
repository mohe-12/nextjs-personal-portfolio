
import React from 'react'
import Image from 'next/image'





const About = (isDarkMode) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 pt-60'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>
        About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src="/image3.png" alt="user" className="w-full rounded-3xl" width={200} height={200} />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl lg:text-[18px] font-Ovo'>
            I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. 
            My journey in web development began with a fascination for how websites work and the technologies behind them. 
            Over the years, I have honed my skills in HTML, CSS, JavaScript, and various frameworks to 
            build user-friendly interfaces and robust back-end systems.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
           <li className="border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer 
            hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black ">
           <h3 className="my-4 font-semibold text-gray-700">
            Languages
             <p className="text-gray-600 text-sm">
              JavaScript, TypeScript, Python, C++, Java, next.js, React.js, Node.js, Express.js
             </p>
           </h3>
           </li>

            <li className='border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer 
            hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
            <h3 className='my-4 font-semibold text-gray-700'>
              Educations
              <p className='text-gray-600 text-sm' >
                Bachelor of Science in Computer Science and Engineering, Bule Hora University (BHU).
              </p>
            </h3>
            </li>

            <li className='border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer 
            hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
            <h3 className='my-4 font-semibold text-gray-700'>
              Projects
              <p className='text-gray-600 text-sm' >
                Developed multiple web applications including e-commerce sites, blogs, and portfolio websites.
              </p>
            </h3>
            </li>
          </ul>

          <h4 className='my-6 lg:text-[18px] text-gray-700 font-Ovo'>
            Tools I use
          </h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            <li className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 aspect-square border
             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src="/vscode.png" alt="tool" className='w-5 sm:w-7' width={24} height={24}/>
            </li>

            <li className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 aspect-square border
             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src="/react.png" alt="tool" className='w-5 sm:w-7' width={24} height={24}/>
            </li>

            <li className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 aspect-square border
             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src="/firebase.png" alt="tool" className='w-5 sm:w-7' width={24} height={24}/>
            </li>

            <li className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 aspect-square border
             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src="/figma.png" alt="tool" className='w-5 sm:w-7' width={24} height={24}/>
            </li>

            <li className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 aspect-square border
             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src="/java-script.png" alt="tool" className='w-5 sm:w-7' width={24} height={24}/>
            </li>

            <li className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 aspect-square border
             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src="/html.png" alt="tool" className='w-5 sm:w-7' width={24} height={24}/>
            </li>

            <li className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 aspect-square border
             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src="/typescript.png" alt="tool" className='w-5 sm:w-7' width={24} height={24}/>
            </li>

            <li className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 aspect-square border
             border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <Image src="/css.png" alt="tool" className='w-5 sm:w-7' width={24} height={24}/>
            </li>
          </ul>
        </div>
    </div>
  </div>
  )
}

export default About
