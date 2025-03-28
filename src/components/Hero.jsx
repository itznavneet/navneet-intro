import React from 'react'
import Navbar from './Navbar'
import HeroImg from '../assets/selfghible.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
const [sidebar, setSidebar]= React.useState(false)

  return (
    <main className='md:px-12 md:py-6 bg-primaryDark h-screen'>
        <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
            <div className="container">
                <Navbar  sidebar={sidebar} setSidebar={setSidebar}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
                    <div className="text text-[#333333] space-y-4 p-4 md:mt-0 mt-[100px]">
                        <h1 data-aos="fade-up" className='text-3xl pl-6 md:pl-14'>Hello, I'm</h1>
                        <h1 data-aos="fade-up" data-aos-delay="300" className='text-5xl font-bold uppercase text-shadow'> Navneet Jaiswal</h1>
                        <p data-aos="fade-up" data-aos-delay="600" className='text-sm'> Passionate Web Developer | MERN Stack Learner | Competitive Programmer
                        <br /> Always eager to build innovative and scalable web applications.</p>
                        <button data-aos="fade-up" data-aos-delay="900" className=' border border-white px-4 py-2 rounded-lg'>My Projects</button>
                    </div>
                    <div className="img">
                        <img data-aos="zoom-in"  src={HeroImg} alt="berry" className='w-[400px] img-shadow img-glow relative z-[1]'/>
                    </div>
                    <div className="blank md:hidden"></div>
                </div>
            </div>
            <h1 data-aos="zoom-out" className='text-center text-[80px] text-white font-bold sm:text-[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow'>CODER!!</h1>
            {sidebar && (
                <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from primary to-secondary z-10'>
                <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
                    {/* lining*/}
                <div className='w-[1px] h-[70px] bg-white'></div>
                {/* social media */}
                {/* Social Media */}
<a
  href="https://x.com/dashing_navneet?t=DdGqFD6ki3Tp1XjjGrLIwA&s=09"  // Facebook Link
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block p-2 rounded-full cursor-pointer border border-white text-white"
>
  <FaXTwitter className="text-2xl" />
</a>

<a
  href="https://www.linkedin.com/in/navneet-jaiswal-8aa05b322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  // LinkedIn Link
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block p-2 rounded-full cursor-pointer border border-white text-white"
>
  <FaLinkedin className="text-2xl" />
</a>

<a
  href="https://www.instagram.com/dashing_navneet?igsh=Zm9rMzIyb3o2Z3hw"  // Instagram Link
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block p-2 rounded-full cursor-pointer border border-white text-white"
>
  <FaInstagram className="text-2xl" />
</a>

                {/* lining */}
                <div className='w-[1px] h-[70px] bg-white'></div>
                </div>
                </div>
            )}
        </section>
      
    </main>
  )
}

export default Hero
