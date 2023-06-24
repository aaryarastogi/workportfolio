import React from 'react'
import about from '../Images/abt.jpg'
import { FaMinus } from 'react-icons/fa'

const About = () => {
  return (
    <div className='w-full h-auto bg-black flex md:flex-row flex-col overflow-hidden' id='about'>
        <img src={about} alt='about' className='md:w-[50%] w-auto'></img>
        <div className='text-white md:m-24 m-4 text-left'>
            <p className='text-base uppercase'>Live Skillz</p>
            <h1 className='uppercase md:text-6xl text-2xl font-semibold font-montserrat mt-2'>About us</h1>
            <p className='text-justify md:mt-10 mt-6 text-grey'>We are a team of creative thinkers who have many original ideas to elevate your brand. The strangest storytellers in the business are here and ready to give the digital story of your brand a little bit of magic. Therefore, go no further if you’re seeking a group of digital daredevils who aren’t afraid to defy the status quo. We add a dash of creativity and a dash of eccentricity to the ordinary to give your brand the touch it deserves.</p>
            <div className='flex'><p className='md:pt-10 pt-6 cursor-pointer hover:text-lightblue hover:underline'>Read More</p></div>
        </div>
    </div>
  )
}

export default About