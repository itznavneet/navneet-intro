import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <div className='text-[#333333] py-2 absolute top-0 left-0 w-full z-20'>
      <div data-aos= "fade-down" className="container">
        <div className='flex justify-between items-center' >
            <h1 className='text-4xl font-bold uppercase'> TITLE<span className='font-normal'>Card</span></h1>
            <ul className='lg:flex space-x-14 text-xl hidden'>
                <li className='hover:text-white'>
                    <a href="#">Home</a>
                </li>
                <li  className='hover:text-white'>
                    <a href="#">Where to Find</a>
                </li>
                <li  className='hover:text-white'>
                    <a href="#">Contact</a>
                </li>
            </ul>
        <GiHamburgerMenu className='text-3xl cursor-point
        er' onClick={()=>setSidebar(!sidebar)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
