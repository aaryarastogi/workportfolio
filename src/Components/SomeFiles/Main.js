import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Process from './Process'
import FourComp from '../components/FourComp'
import Services from '../Services/Services'

const Main = () => {
  return (
    <div>
        <Home/>
        <About/>
        <Process/>
        <FourComp/>
        <Services/>
    </div>
  )
}

export default Main