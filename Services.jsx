import React from 'react'
import Image from 'next/image'




const Services = ({isDarkMode}) => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>
        My servies</h2>

        <p className='text-center lg:text-[18px] max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I offer a range of services to help you build and maintain your web presence. 
            From front-end development to back-end solutions, 
            I am here to assist you in achieving your digital goals.
        </p>

        <div className='grid grid-cols-auto gap-6 my-10'>
            <div className='border border-gray-400 rounded-lg px-8 py12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
            <Image src="/web.png" alt="web" className="w-10" width={300} height={300}/>
            <h3 className='text-lg my-4 text-gray-700'>
                Web design
            </h3>
            <p className='text-sm text-gray-600 leading-5'>
                I create visually appealing and user-friendly websites that are tailored to your needs. 
                My designs are responsive and optimized for all devices, ensuring a seamless user experience.
            </p>
            <a href="link" className='flex items-center gap-2 text-sm mt-5'>
                Read more 
                <Image src="/right-arrow.png" alt="more" className="w-4" width={300} height={300} />
            </a>
            </div>

            <div className='border border-gray-400 rounded-lg px-8 py12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
            <Image src="/mobile.png" alt="mobile" className="w-10" width={300} height={300}/>
            <h3 className='text-lg my-4 text-gray-700'>
                Mobile app
            </h3>
            <p className='text-sm text-gray-600 leading-5'>
                I develop mobile applications that provide a smooth and engaging user experience. 
                My apps are built with the latest technologies to ensure performance and reliability across all devices.
            </p>
            <a href="link" className='flex items-center gap-2 text-sm mt-5'>
                Read more 
                <Image src="/right-arrow.png" alt="more" className="w-4" width={300} height={300} />
            </a>
            </div>

            <div className='border border-gray-400 rounded-lg px-8 py12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
            <Image src="/ux.png" alt="ux" className="w-10" width={300} height={300}/>
            <h3 className='text-lg my-4 text-gray-700'>
                UI/UX design
            </h3>
            <p className='text-sm text-gray-600 leading-5'>
                I focus on creating intuitive and engaging user interfaces that enhance the overall user experience. 
                My designs are centered around user needs and behaviors, ensuring that your application is both functional and enjoyable to use.
            </p>
            <a href="link" className='flex items-center gap-2 text-sm mt-5'>
                Read more 
                <Image src="/right-arrow.png" alt="more" className="w-4" width={300} height={300} />
            </a>
            </div>


            <div className='border border-gray-400 rounded-lg px-8 py12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>  
            <Image src="/graphics.png" alt="graphics" className="w-10" width={300} height={300}/>
            <h3 className='text-lg my-4 text-gray-700'>
                Graphics design
            </h3>
            <p className='text-sm text-gray-600 leading-5'>
                I create stunning graphics that capture attention and convey your message effectively. 
                Whether it's for web, print, or social media, my designs are crafted to enhance your brand's visual identity.
            </p>
            <a href="link" className='flex items-center gap-2 text-sm mt-5'>
                Read more 
                <Image src="/right-arrow.png" alt="" className="w-4" width={300} height={300} /></a>
            </div>
        </div>
    </div>
  )
}

export default Services
