import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import social from '../Images/socialmedia.jpg'
import seo from '../Images/seo-1.jpg'
import cont from '../Images/Content-management.jpg'
import media from '../Images/media-buying-and-planning.jpg'
import google from '../Images/google-analytics-and-reporting.jpg'
import cpc from '../Images/CPC.jpg'
import logo from '../Images/logo.png'

const Digital = () => {
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
        <div className='my-10'>
            <ul className='grid md:grid-cols-3 gap-4 justify-start ml-10 md:ml-20 mr-10'>
                <li>
                    <img src={social} />
                    <h1 className='text-xl uppercase font-semibold text-white text-center mt-2'>Social media marketing</h1>
                </li>
                <li>
                    <img src={seo} />
                    <h1 className='text-xl uppercase font-semibold text-white text-center mt-2'>search engine optimization</h1>
                </li>
                <li>
                    <img src={cont} />
                    <h1 className='text-xl uppercase font-semibold text-white text-center mt-2'>content management</h1>
                </li>
                <li>
                    <img src={media} />
                    <h1 className='text-xl uppercase font-semibold text-white text-center mt-2'>media buying and planning</h1>
                </li>
                <li>
                    <img src={google} />
                    <h1 className='text-xl uppercase font-semibold text-white text-center mt-2'>google analytics and reporting</h1>
                </li>
                <li>
                    <img src={cpc} />
                    <h1 className='text-xl uppercase font-semibold text-white text-center mt-2'>pay per click / cost per click</h1>
                </li>
            </ul>
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

export default Digital