import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 z-10 translate-y-[-80%] dark:hidden'>
                <Image src="/header_bg_color.png" alt="logo" className='w-full' width={1200} height={200}/>
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
                flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}>
                <h2 className='font-Ovo text-3xl' href="#top">MoheTech</h2>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 
                    rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50"}`}>
                    <li><a className='font-Ovo' href="#home">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? "/sun_icon.png" : "/moon_icon.png"} alt="Toggle Theme" className='w-6' width={300} height={300}/>
                    </button>

                    <a href="#contact" 
                    className='hidden lg:flex items-center gap-3 px-10
                        py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>
                            Contact
                        <Image src="/arrow-icon.png" alt='' className='w-2' width={300} height={300} /></a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src="/menu-black.png" alt="" className='w-6' width={300} height={300}/>
                    </button>    
                </div>

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10  fixed -right-64 
                    top-0 bottom-0 w-64 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image src="/close-black.png" alt="" className='w-6 cursor-pointer' width={300} height={300} />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#home">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
