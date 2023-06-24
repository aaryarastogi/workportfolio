import React from 'react'
import './file.css'

const TwoComp = () => {
  return (
    <div className='w-full overflow-hidden'>
        <div className='grid md:grid-cols-2 md:grid-rows-2 grid-rows-4'>
            <div className='bg-[#323232] hover:bg-backgroundcolor text-start'>
                <h1 className='stroke lg:text-6xl md:text-5xl text-4xl uppercase lg:mx-20 md:mx-10 mx-5 my-10 max-w-[32rem]' style={{textShadow:'2px 2px 0 #000', fontSmooth:'never'}}>Research</h1>
                <p className='text-base text-justify lg:mx-20 md:mx-10 mx-5 mb-10 text-offwhite max-w-[32rem]'>To understand a brand's strengths, limitations, opportunities, and difficulties, we have a thorough and data-driven approach to acquiring and analyzing information about the brand. Brand research aims to offer information that may be used to direct efforts and decisions related to branding. To create brand strategies and make wise judgements that might enhance brand perception and boost brand loyalty, brand research data is used.</p>
            </div>
            <div className='bg-black hover:bg-backgroundcolor text-start'>
                <h1 className='lg:text-6xl md:text-5xl text-4xl uppercase lg:mx-20 md:mx-10 mx-5 my-10 stroke max-w-[32rem]' style={{textShadow:'2px 2px 0 #000', fontSmooth:'never'}}>Analysis</h1>
                <p className='text-base text-justify lg:mx-20 md:mx-10 mx-5 mb-10 text-offwhite max-w-[32rem]'>We have a procedure for assessing and analyzing data gathered during a research investigation. The primary objective of research analysis is to draw insightful deductions and conclusions from the data and to make defensible decisions in light of those conclusions.</p>
            </div>
            <div className='bg-black hover:bg-backgroundcolor text-start'>
                <h1 className='lg:text-6xl md:text-5xl text-4xl uppercase lg:mx-20 md:mx-10 mx-5 my-10 stroke max-w-[32rem]' style={{textShadow:'2px 2px 0 #000', fontSmooth:'never'}}>Brainstorm</h1>
                <p className='text-base text-justify lg:mx-20 md:mx-10 mx-5 mb-10 text-offwhite max-w-[32rem]'>We begin our approach by stating the issue that has to be resolved in detail, after which we develop numerous solutions and campaigns.</p>
            </div>
            <div className='bg-[#323232] hover:bg-backgroundcolor text-start'>
                <h1 className='lg:text-6xl md:text-5xl text-4xl uppercase lg:mx-20 md:mx-10 mx-5 my-10 max-w-[32rem] stroke' style={{textShadow:'2px 2px 0 #000', fontSmooth:'never'}}>Implement</h1>
                <p className='text-base text-justify lg:mx-20 md:mx-10 mx-5 mb-10 text-offwhite max-w-[32rem]'>We have a method for a practical and efficient method for implementing a concept, design, campaign, or technology exists. It requires turning principles into applications that can be used in the real world. The purpose of implementation is to make sure that the desired results are realized and that the solution is correctly integrated for the purposes for which it was intended.</p>
            </div>
        </div>
    </div>
  )
}

export default TwoComp