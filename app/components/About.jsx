
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
          <Image src="/Image4.png" alt="user" className="w-full rounded-3xl" width={200} height={200} />
        </div>
       <div className="flex-1">
      {/* About text with better mobile spacing */}
      <p className="mb-6 sm:mb-10 max-w-2xl text-base sm:text-lg lg:text-[18px] font-Ovo leading-relaxed">
        I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My
        journey in web development began with a fascination for how websites work and the technologies behind them. Over
        the years, I have honed my skills in HTML, CSS, JavaScript, and various frameworks to build user-friendly
        interfaces and robust back-end systems.
      </p>

      {/* Skills grid with better mobile layout */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mb-8">
        <li
          className="border-[0.5px] border-gray-400 p-4 sm:p-6 rounded-xl cursor-pointer 
          hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
        >
          <h3 className="mb-2 sm:mb-4 font-semibold text-gray-700 text-sm sm:text-base">Languages</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            JavaScript, TypeScript, Python, C++, Java, Next.js, React.js, Node.js, Express.js
          </p>
        </li>

        <li
          className="border-[0.5px] border-gray-400 p-4 sm:p-6 rounded-xl cursor-pointer 
          hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
        >
          <h3 className="mb-2 sm:mb-4 font-semibold text-gray-700 text-sm sm:text-base">Education</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Bachelor of Science in Computer Science and Engineering, Blue Hora University (BHU).
          </p>
        </li>

        <li
          className="border-[0.5px] border-gray-400 p-4 sm:p-6 rounded-xl cursor-pointer 
          hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black sm:col-span-2 lg:col-span-1"
        >
          <h3 className="mb-2 sm:mb-4 font-semibold text-gray-700 text-sm sm:text-base">Projects</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Developed multiple web applications including e-commerce sites, blogs, and portfolio websites.
          </p>
        </li>
      </ul>

      {/* Tools section title */}
      <h4 className="mb-4 sm:mb-6 text-base sm:text-lg lg:text-[18px] text-gray-700 font-Ovo">Tools I use</h4>

      {/* Tools grid - FIXED: Now wraps properly on mobile */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3 lg:gap-4 max-w-2xl">
        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
        >
          <Image src="/vscode.png" alt="VS Code" className="w-5 sm:w-7" width={24} height={24} />
        </div>

        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
        >
          <Image src="/react.png" alt="React" className="w-5 sm:w-7" width={24} height={24} />
        </div>

        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
        >
          <Image src="/firebase.png" alt="Firebase" className="w-5 sm:w-7" width={24} height={24} />
        </div>

        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
        >
          <Image src="/figma.png" alt="Figma" className="w-5 sm:w-7" width={24} height={24} />
        </div>

        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
        >
          <Image src="/java-script.png" alt="JavaScript" className="w-5 sm:w-7" width={24} height={24} />
        </div>

        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
        >
          <Image src="/html.png" alt="HTML" className="w-5 sm:w-7" width={24} height={24} />
        </div>

        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
        >
          <Image src="/typescript.png" alt="TypeScript" className="w-5 sm:w-7" width={24} height={24} />
        </div>

        <div
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
        >
          <Image src="/css.png" alt="CSS" className="w-5 sm:w-7" width={24} height={24} />
        </div>
    </div>
  </div>
  )
}

export default About
