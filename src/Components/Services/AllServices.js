import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import dig from '../Images/Digital.jpg'
import des from '../Images/Design-1.jpg'
import vid from '../Images/Video-creation-2.jpg'
import dev from '../Images/Development-1.jpg'
import logo from '../Images/logo.png'
import {motion} from 'framer-motion'

const AllServices = () => {
  return (
    <div className='w-full bg-backgroundcolor h-auto overflow-hidden'>
        <h1 className='uppercase text-base text-white text-center justify-center pt-10'>Live Skillz</h1>
        <h1 className='uppercase text-3xl text-white text-center justify-center pt-5 font-semibold'>Our Services</h1>
        <div className='hidden lg:block absolute my-[30%] text-2xl h-56 -translate-y-64 bg-transparent px-8 py-2'>
            <a  href='https://www.linkedin.com/in/aarya-rastogi-512180223/' target={'_blank'}><FaLinkedin className='my-4 mx-2 cursor-pointer text-[#0D57A2] hover:text-[#0077b5]'/></a>
            <a href='https://twitter.com/aarya_rastogi' target={'_blank'}><FaTwitter className='my-4 mx-2 cursor-pointer text-[#0D57A2] hover:text-[#1DA1F2]'/></a>
            <a href='https://github.com/aaryarastogi' target={'_blank'}><FaGithub className='my-4 mx-2 cursor-pointer text-[#0D57A2] hover:text-gray-500'/></a>
            <a href='https://www.instagram.com/aaryarastogi10/' target={'_blank'}><FaInstagram className='my-4 mx-2 cursor-pointer text-[#0D57A2] hover:text-[#e95950]'/></a>
      </div>
    <div className='grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 lg:ml-44 md:px-0 px-4 gap-8 py-10'>
        <div><motion.img 
        initial={{
            x:-100,
            y:-10,
            scale:0.5,
            opacity:0
        }}
        whileInView={{ opacity: 1, x:0, y:0, scale:1}}
        exit={{
          x:-100,
            y:-10,
            scale:0.5,
          opacity:0}}
        transition={{
          ease:"easeInOut",
          duration:2,
        }}
        src={dig} alt='digital' className='w-auto'></motion.img></div>
        <div><motion.img 
        initial={{
            x:100,
            y:-10,
            scale:0.5,
            opacity:0
        }}
        whileInView={{ opacity: 1, x:0, y:0, scale:1}}
        exit={{
          x:100,
            y:-10,
            scale:0.5,
            opacity:0
        }}
        transition={{
          ease:"easeInOut",
          duration:2,
        }}
        src={des} alt='design'/></div>
        <div><motion.img
        initial={{
            x:-100,
            y:-10,
            scale:0.5,
            opacity:0
        }}
        whileInView={{ opacity: 1, x:0, y:0, scale:1}}
        exit={{
          x:-100,
            y:-10,
            scale:0.5,
          opacity:0}}
        transition={{
          ease:"easeInOut",
          duration:2,
        }}
         src={dev} alt='development'/></div>
        <div><motion.img
        initial={{
        x:100,
        y:-10,
        scale:0.5,
        opacity:0
    }}
    whileInView={{ opacity: 1, x:0, y:0, scale:1}}
    exit={{
      x:100,
        y:-10,
        scale:0.5,
        opacity:0
    }}
    transition={{
      ease:"easeInOut",
      duration:2,
    }} 
        src={vid} alt='video'/></div>
    </div>
    <hr className='bg-grey w-full px-10 '/>
    <div className='justify-center mt-10 flex flex-row gap-4'>
        <img src={logo} alt='logo' className='w-32 rounded-md'/>
        <h1 className='text-4xl font-serif font-semibold my-auto uppercase text-offwhite tracking-wider'>Live Skillz</h1>
    </div>
    <h1 className='text-base text-grey text-center py-10'>We add a dash of creativity and a dash of eccentricity to the ordinary to give your brand the touch it deserves.</h1>
    <div className='grid md:grid-cols-3 grid-flow-row text-white'>
        <div className='text-justify md:ml-20 md:px-0 px-4'>
            <h1 className='text-xl uppercase text-mono tracking-tight font-semibold'>Overview</h1>
            <p className='text-base text-grey py-10 text-justify'>Driven by individuality, and rooted in creativity; today we are an integrated creative advertising company with capabilities to run digital marketing services.</p>
        </div>
        <div className='text-justify md:ml-20 md:px-0 px-4'>
            <h1 className='text-xl uppercase text-mono tracking-tight font-semibold'>Quick links</h1>
            <ul className='gap-2 pb-10 md:mt-10 mt-5 text-grey text-justify uppercase text-base font-semibold'>
                <li className='pb-1'>Digital</li>
                <li className='pb-1'>Design</li>
                <li className='pb-1'>Development</li>
                <li className='pb-1'>video content creation</li>
                <li className='pb-1'>Career</li>
                <li className='pb-1'>privacy policy</li>
            </ul>
        </div>
        <div className='text-justify md:ml-20 md:px-0 px-4'>
            <h1 className='text-xl uppercase text-mono tracking-tight font-semibold'>contact info</h1>
            <ul className='gap-2 pb-10 md:mt-10 mt-5 text-grey text-justify uppercase text-base font-semibold'>
                <li className='pb-1'>+91 9897876543</li>
                <li className='pb-1'>liveskillz@gmail.com</li>
                <li className='pb-1'>Chandigarh University</li>
            </ul>        
        </div>
    </div>
    <h1 className='text-base text-center uppercase text-mono tracking-tight text-grey pb-10'>liveskillz@2023</h1>
    </div>
  )
}

export default AllServices