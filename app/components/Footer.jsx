import React from 'react'
import Image from 'next/image'



const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <a href="#footer" className='w-36 mx-auto
        mb-2'>MoheTech</a>


        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src="/mail_icon.png" alt='mo' className='w-6' width={300} height={300}/>
            mohehasen690@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400
      mx-[10%] mt-12 py-6'>
        <p>© 2025 Mohammed Hasen. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_black' href="https://github.com/mohe-12/Mohetech">Githup</a></li>
            <li><a target='_black' href="/">LinkedIn</a></li>
            <li><a target='_black' href="/">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
