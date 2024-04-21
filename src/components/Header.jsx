import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
export const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    }
  return (
    <div>
        <header>
            <nav>
                <div className='flex justify-between items-center md:px-4 '>
                    <div className='z-10 text-white bg-[#42b9af] ml-3 p-6'>
                        <p>LOGO</p>
                    </div>
                    <div className='flex justify-end bg-[#b8e7e3] w-full p-2 md:p-0'>
                    <div className='hidden md:block '>
                        <ul className='flex justify-around items-center '>
                            <li className='text-xl text-[#001b19] hover:bg-[#387c78] p-2 px-4 hover:text-white hover:cursor-pointer duration-300'>Home</li>
                            <li className='text-xl text-[#001b19] hover:bg-[#387c78] p-2 px-4 hover:text-white hover:cursor-pointer duration-300'>Services</li>
                            <li className='text-xl text-[#001b19] hover:bg-[#387c78] p-2 px-4 hover:text-white hover:cursor-pointer duration-300'>About Us</li>
                            <li className='text-xl text-[#001b19] hover:bg-[#387c78] p-2 px-4 hover:text-white hover:cursor-pointer duration-300'>Contact Us</li>
                        </ul>
                    </div>
                    <div onClick={() => handleNav()} className='md:hidden h-full flex justify-center items-center z-10 mr-4  hover:cursor-pointer'>
                        {!nav ? <AiOutlineMenu color='#001b19' size={24} /> : <AiOutlineClose color='#ffffff' size={24} />}
                    </div>
                    </div>
                    
                </div>
                <div className={!nav ? 'fixed md:hidden -top-[100%] z-0' : 'absolute md:hidden top-0 left-0  py-20 h-screen w-screen bg-[#344b49]  ease-in-out duration-500 z-0 '}>
                    <ul>
                        <li className='text-xl text-white px-10 py-4 hover:bg-[#4b9e97] duration-300 hover:cursor-pointer'>Home</li>
                        <li className='text-xl text-white px-10 py-4 hover:bg-[#4b9e97] duration-300 hover:cursor-pointer'>Services</li>
                        <li className='text-xl text-white px-10 py-4 hover:bg-[#4b9e97] duration-300 hover:cursor-pointer'>About Us</li>
                        <li className='text-xl text-white px-10 py-4 hover:bg-[#4b9e97] duration-300 hover:cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                
                
            </nav>
        </header>
    </div>
  )
}
export default Header