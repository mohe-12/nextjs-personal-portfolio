import React from 'react'
import Image from 'next/image'



const Work = ({isDarkMode}) => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        My portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>
        My latest work</h2>
        <p className='text-center lg:text-[18px] max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Here are some of my recent projects that showcase my skills and expertise.
        I take pride in delivering high-quality work that meets the needs of my clients and users.
        </p>

        <div className='grid grid-cols-auto my-10 gap-5'>
               <div className='aspect-square bg-cover bg-no-repeat bg-center rounded-lg 
                  relative cursor-pointer group' style={{ backgroundImage: "url('/work-1.png')" }}>

                    <div className='bg-white w-10/12 rounded-md absolute bottom-5
                     left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                     justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>Frontend project</h2>
                            <p className='text-sm text-gray-700'>Web design</p>
                       </div>
                       <div className='border rounded-full border-black w-9 aspect-square
                       items-center flex justify-cente shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                           <Image src="/send-icon.png" alt="send icon" className="w-5" width={300} height={300}/>
                       </div>
                    </div>
              </div>
            


             <div className='aspect-square bg-cover bg-no-repeat bg-center rounded-lg 
                  relative cursor-pointer group' style={{ backgroundImage: "url('/app.jpg')" }}>
                  <div className='bg-white w-10/12 rounded-md absolute bottom-5
                      left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                      justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>Geo based app</h2>
                            <p className='text-sm text-gray-700'> Mobile app</p>
                       </div>
                       <div className='border rounded-full border-black w-9 aspect-square
                       items-center flex justify-cente shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                           <Image src="/send-icon.png" alt="send icon" className="w-5" width={300} height={300}/>
                       </div>
                    </div>
              </div>


            <div className='aspect-square bg-cover bg-no-repeat bg-center rounded-lg 
                relative cursor-pointer group' style={{ backgroundImage: "url('/graphicd.jpg')" }}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5
                      left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                      justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>Graphics designing</h2>
                            <p className='text-sm text-gray-700'>Graphics design</p>
                       </div>
                       <div className='border rounded-full border-black w-9 aspect-square
                       items-center flex justify-cente shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                           <Image src="/send-icon.png" alt="send icon" className="w-5" width={300} height={300}/>
                       </div>
                    </div>
            </div>


            <div className='aspect-square bg-cover bg-no-repeat bg-center rounded-lg 
                relative cursor-pointer group' style={{ backgroundImage: "url('/ui.jpg')" }}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5
                      left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                      justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>UI/UI ddesigning</h2>
                            <p className='text-sm text-gray-700'>UI/UX design</p>
                       </div>
                       <div className='border rounded-full border-black w-9 aspect-square
                       items-center flex justify-cente shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                           <Image src="/send-icon.png" alt="send icon" className="w-5" width={300} height={300}/>
                       </div>
                    </div>
            </div> 
        </div>
        <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
        border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
            Show me <Image src="/right-arrow-bold.png" alt="right arrow" className='w-4' width={300} height={300}/>
        </a>
    </div>
  )
}

export default Work
