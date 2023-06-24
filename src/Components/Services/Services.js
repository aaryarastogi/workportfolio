import React, { useState } from 'react'
import service from '../Images/services.jpg'
import dig from '../Images/dig.png'
import des from '../Images/des.png'
import dev from '../Images/dev.png'
import vid from '../Images/vid.png'
import './Services.css'
import { useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'


const Services = () => {
    const handleMouseMove = (event) => {
        // Get the cursor position relative to the container
        const container = event.currentTarget;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
    
        // Calculate the movement values based on the cursor position
        const moveX = (x / containerWidth) * 500 - 50; // Adjust the multiplier based on desired range
        const moveY = (y / containerHeight) * 300 - 50;
    
        // Apply the movement styles to the image
        container.style.setProperty('--move-x', `${moveX}px`);
        container.style.setProperty('--move-y', `${moveY}px`);
      };
    
    const[vis,setvis]=useState(false);
  return (
    <div className='bg-backgroundcolor w-full h-auto overflow-hidden' id='service'>
        <h1 className='stroke uppercase lg:text-9xl md:text-6xl text-4xl bg-[#1B1B1B] py-4 font-semibold text-left md:pl-10 pl-6'>Our Services</h1>
        <div className='grid lg:grid-cols-2 grid-rows-2 lg:mt-10 mt-4 gap-4'>
            {/* leftpart */}
                <ul className='text-start stroke lg:mx-32 md:mx-20 mx-10 md:my-24 my-10 uppercase'>
                    <li>
                        {/* {
                            vis&&(
                                <img src={dig} alt='digital' className='cursor-pointer w-64 left-80 z-10 transition-all ease-out transform-scale(0) duration-100'
                                onMouseMove={handleMouseMove}
                                style={{
                                    perspective:'1000px',
                                    transform: 'translate(var(--move-x), var(--move-y))',
                                    transition: 'transform 0.2s ease-out' // Optional: for smooth transition
                                }}
                                />
                            )
                        } */}
                        <span className='md:text-6xl text-3xl cursor-pointer' onMouseEnter={()=>setvis(!vis)}><Link to='/services/digital'>Digital</Link></span>
                    </li>
                    <li className='py-2 md:py-5'>
                        <span className='md:text-6xl text-3xl relative'>Design</span>
                        {/* <img src={des} alt='design'/> */}
                    </li>
                    <li className='pb-2 md:pb-5'>
                        <span className='md:text-6xl text-3xl relative'>Development</span>
                        {/* <img src={dev} alt='development'/> */}
                    </li>
                    <li >
                        <span className='md:text-6xl text-3xl relative'>Video Creation</span>
                        {/* <img src={vid} alt='video'/> */}
                    </li>
                </ul>
            {/* rightpart */}
            <div className='my-0 p-4'>
                <img src={service} alt='service' className='max-w-96'></img>
            </div>
        </div>
    </div>
  )
}

export default Services