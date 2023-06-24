import React, { useRef } from 'react'
import {FaArrowCircleLeft, FaArrowCircleRight, FaGithub, FaInstagram, FaLinkedin, FaMinus, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import concept from '../Images/concept.jpeg'
import design from '../Images/design.png'
import './Carousel.css'
import { Link } from 'react-router-dom'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <div className='bg-backgroundcolor pt-32 w-full h-screen' id='home'>
      <div className='hidden lg:block absolute my-[30%] text-2xl h-56 -translate-y-64 bg-transparent px-8 py-2'>
            <a  href='https://www.linkedin.com/in/aarya-rastogi-512180223/' target={'_blank'}><FaLinkedin className='my-4 mx-2 cursor-pointer text-[#0D57A2] hover:text-[#0077b5]'/></a>
            <a href='https://twitter.com/aarya_rastogi' target={'_blank'}><FaTwitter className='my-4 mx-2 cursor-pointer text-[#0D57A2] hover:text-[#1DA1F2]'/></a>
            <a href='https://github.com/aaryarastogi' target={'_blank'}><FaGithub className='my-4 mx-2 cursor-pointer text-[#0D57A2] hover:text-gray-500'/></a>
            <a href='https://www.instagram.com/aaryarastogi10/' target={'_blank'}><FaInstagram className='my-4 mx-2 cursor-pointer text-[#0D57A2] hover:text-[#e95950]'/></a>
      </div>
      {/* textpart */}
      <Carousel responsive={responsive}
        // showDots={true}
        ref={carouselRef}
        arrows={false}
        swipeable={true}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
        <div className='flex md:flex-grow md:flex-row flex-col md:ml-32'>
        <motion.h1
            initial={{ x: 0 }} // Initial position
            whileInView={{x:'5%'}} // Destination position
            transition={{ duration: 5 }} // Animation duration
            className='md:text-9xl text-4xl uppercase stroke md:mt-72'>innovation</motion.h1>
          <motion.img
            initial={{x:'95%'}}
            whileInView={{x:0}}
            transition={{duration:2}}
           src={concept} className='md:w-[32rem] w-96 ml-auto md:pt-0 pt-4' alt=''/>
        </div>
        <div className='flex md:flex-grow md:flex-row flex-col md:ml-32'>
        <motion.h1
            initial={{ x: 0 }} // Initial position
            whileInView={{x:'5%'}} // Destination position
            transition={{ duration: 5 }} // Animation duration
            className='md:text-9xl text-4xl uppercase stroke md:mt-72'>ideas</motion.h1>
          <motion.img
            initial={{x:'95%'}}
            whileInView={{x:0}}
            transition={{duration:2}}
           src={concept} className='md:w-[32rem] w-96 ml-auto md:pt-0 pt-4' alt=''/>
        </div>
        <div className='flex md:flex-grow md:flex-row flex-col md:ml-32'>
        <motion.h1
            initial={{ x: 0 }} // Initial position
            whileInView={{x:'5%'}} // Destination position
            transition={{ duration: 5 }} // Animation duration
            className='md:text-9xl text-4xl uppercase stroke md:mt-72'>transform</motion.h1>
          <motion.img
            initial={{x:'95%'}}
            whileInView={{x:0}}
            transition={{duration:2}}
           src={concept} className='md:w-[32rem] w-96 ml-auto md:pt-0 pt-4' alt=''/>
        </div>
        <div className='flex md:flex-grow md:flex-row flex-col md:ml-32'>
        <motion.h1
            initial={{ x: 0 }} // Initial position
            whileInView={{x:'5%'}} // Destination position
            transition={{ duration: 5 }} // Animation duration
            className='md:text-9xl text-4xl uppercase stroke md:mt-72'>concept</motion.h1>
          <motion.img
            initial={{x:'95%'}}
            whileInView={{x:0}}
            transition={{duration:2}}
           src={concept} className='md:w-[32rem] w-96 ml-auto md:pt-0 pt-4' alt=''/>
        </div>
        <div className='flex md:flex-grow md:flex-row flex-col md:ml-32'>
        <motion.h1
            initial={{ x: 0 }} // Initial position
            whileInView={{x:'5%'}} // Destination position
            transition={{ duration: 5 }} // Animation duration
            className='md:text-9xl text-4xl uppercase stroke md:mt-72'>creation</motion.h1>
          <motion.img
            initial={{x:'95%'}}
            whileInView={{x:0}}
            transition={{duration:2}}
           src={concept} className='md:w-[32rem] w-96 ml-auto md:pt-0 pt-4' alt=''/>
        </div>
        </Carousel>
        <div className='mt-10 flex flex-grow'>
           <p className='text-xl text-white justify-start text-left flex flex-row md:ml-32 ml-12 cursor-pointer transition-all duration-700 ease-in-out'><FaMinus className='m-1 text-2xl w-12'/><span className='capitalize hover:-translate-x-2'><Link to='/services' target='_blank'>all services</Link></span></p>
           <div className='text-2xl text-white flex flex-row gap-4 ml-auto mr-10 cursor-pointer'><FaArrowCircleLeft onClick={handlePrevClick} className='hover:text-[#0D57A2]'/><FaArrowCircleRight onClick={handleNextClick} className='hover:text-[#0D57A2]'/></div>
        </div>
    </div>
  )
}

export default Home