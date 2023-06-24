import React, { useState } from 'react'
import logo from '../Images/logo.png'
import {FaSearch} from 'react-icons/fa'
import {MdClose, MdOutlineApps} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
  //scolling handling
  const handleHome=()=>{
    const element=document.getElementById("home");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleAbout=()=>{
    const element=document.getElementById("about");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleServices=()=>{
    const element=document.getElementById("service");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const handleContact=()=>{
    const element=document.getElementById("contact");
    if(element){
      element.scrollIntoView({behavior:"smooth"})
    }
  }
  const[isHovered1,setIsHovered1]=useState(false);
  const[isHovered2,setIsHovered2]=useState(false);
  const[isHovered3,setIsHovered3]=useState(false);
  const[isHovered4,setIsHovered4]=useState(false);
  const[isHovered5,setIsHovered5]=useState(false);
  const[isHovered6,setIsHovered6]=useState(false);
  const handleMouseEnter=()=>{
    setIsHovered1(true);
  }
  const handleMouseEnter1=()=>{
    setIsHovered2(true);
  }
  const handleMouseEnter2=()=>{
    setIsHovered3(true);
  }
  const handleMouseEnter3=()=>{
    setIsHovered4(true);
  }
  const handleMouseEnter4=()=>{
    setIsHovered5(true);
  }
  const handleMouseEnter5=()=>{
    setIsHovered6(true);
  }

  const handleMouseLeave=()=>{
    setIsHovered1(false);
  }
  const handleMouseLeave1=()=>{
    setIsHovered2(false);
  }
  const handleMouseLeave2=()=>{
    setIsHovered3(false);
  }
  const handleMouseLeave3=()=>{
    setIsHovered4(false);
  }
  const handleMouseLeave4=()=>{
    setIsHovered5(false);
  }
  const handleMouseLeave5=()=>{
    setIsHovered6(false);
  }
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };
  // formobilenavbar
  const [open,setOpen]=useState(false);
  const handleNav=()=>{
    setOpen(!open);
  };

  return (
      <nav className='w-full h-auto bg-backgroundcolor border-b-2 border-[#787878] flex uppercase text-[#F2F2F2] font-montserrat'>
        <img className='md:w-16 w-16 m-4 rounded-md cursor-pointer hidden md:flex' src={logo} alt='logo'></img>
        <p className='text-white font-semibold text-xl my-auto capitalize hidden md:flex'><span className='text-[#f4f4f4]'>Live</span> Skillz</p>
        {/* for desktop */}
        <ul className='text-white text-sm ml-auto my-auto items-end justify-end flex-row gap-6 cursor-pointer font-semibold hidden md:flex'>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='transition ease-in-out duration-700 hover:translate-x-1' onClick={handleHome}><Link to='/'>{isHovered1 ? '/ Home' : 'Home'}</Link></li>
          {/* {
            expanded ? (<div className='bg-transparent'></div>)
            :  */}
            {/* <ul className='text-white text-sm ml-auto my-auto items-end justify-end flex flex-row gap-6 cursor-pointer font-semibold'> */}
            <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='transition ease-in-out duration-700 hover:translate-x-1' onClick={handleAbout}>{isHovered2 ? '/ About US' : 'About US'}</li>
            <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className='transition ease-in-out duration-700 hover:translate-x-1' onClick={handleServices}>{isHovered3 ? '/ Services' : 'Services'}</li>
            <li onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className='transition ease-in-out duration-700 hover:translate-x-1'>{isHovered4 ? '/ Our work' : 'Our Work'}</li>
            <li onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} className='transition ease-in-out duration-700 hover:translate-x-1'>{isHovered5 ? '/ Blogs' : 'Blogs'}</li>
            <li onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} className='transition ease-in-out duration-700 hover:translate-x-1' onClick={handleContact}>{isHovered6 ? '/ Contact Us' : 'Contact US'}</li>
            {/* </ul>
          } */}
        </ul>
      <div className='hidden md:flex'>
            {
              expanded ? (
                <div className='flex flex-row py-7'>
                  <input type='text' autoComplete='OFF' placeholder='Type here....' className='h-[100%] mx-4 py-2 text-2xl font-medium w-[100%] uppercase border-none bg-transparent p-0'></input>
                  <button className='text-blue-400 border-2 rounded-full p-4 mx-auto text-xl'onClick={handleButtonClick}><MdClose/></button>
                </div>
                ) : (
                <button className='text-blue-400 border-2 rounded-full p-5 mx-4 my-6 text-xl'onClick={handleButtonClick}><FaSearch/></button>
                )
            }
      </div>
      {/* for mobile */}
      <div className='flex flex-grow items-center md:hidden'>
        <img className='md:w-16 w-16 m-4 rounded-md cursor-pointer' src={logo} alt='logo'></img>
        <p className='text-white font-semibold text-xl my-auto capitalize'><span className='text-[#f4f4f4]'>Live</span> Skillz</p>
      <div className='ml-auto'>    
        {open? <MdClose fontSize={"32px"} className="cursor-pointer m-4 md:hidden block transition-all ease-in duration-500" onClick={handleNav}/>:<MdOutlineApps fontSize={"32px"} className="cursor-pointer m-4 md:hidden block transition-all ease-in duration-500" onClick={() => setOpen(!open)}/>}
      <ul className={`md:flex md:items-center bg-[#1B1B1B] text-white lg:mx-8 gap-6 md:z-auto md:static absolute w-full left-0 md:justify-end md:mr-10 md:py-0 py-4 md:pl-0 pl-6 md:opacity-100 ${open ?'opacity-100':'opacity-0'} transition-all ${open?'top-24' :'top-[-800px]' } ease-in duration-500 font-semibold`}>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='md:text-xl font-semibold text-white text-sm transition ease-in-out duration-700 hover:translate-x-1'>{isHovered1 ? '/Home' : '/Home'}</li>
        <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='md:text-xl font-semibold text-white text-sm transition ease-in-out duration-700 hover:translate-x-1' >{isHovered2 ? '/ About US' : 'About US'}</li>
        <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className='md:text-xl font-semibold text-white text-sm transition ease-in-out duration-700 hover:translate-x-1' >{isHovered3 ? '/ Services' : 'Services'}</li>
        <li  onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className='md:text-xl font-semibold text-white text-sm transition ease-in-out duration-700 hover:translate-x-1' >{isHovered4 ? '/ Our work' : 'Our Work'}</li>
        <li onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} className='md:text-xl font-semibold text-white text-sm transition ease-in-out duration-700 hover:translate-x-1' >{isHovered5 ? '/ Blogs' : 'Blogs'}</li>
        <li onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} className='md:text-xl font-semibold text-white text-sm transition ease-in-out duration-700 hover:translate-x-1' >{isHovered6 ? '/ Contact Us' : 'Contact US'}</li>
      </ul>
      </div>
      </div>
      </nav>
    )
}

export default Navbar