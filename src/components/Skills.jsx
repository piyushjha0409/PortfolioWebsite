import React from 'react'
import { SiMongodb } from 'react-icons/si'

const Skills = () => {
  return (
    <>
     {/* soft skills  */}
      <section className='justify-center items-center h-auto mt-5 font-custom2 overflow-hidden' id="skills">
        <div className='flex-1 justify-center w-full'>
        <h1 className='block md:text-9xl text-amber-200 font-custom2'>Skills</h1>
        <div className='flex-1 md:py-12'>
          <div className=' m-2 p-2'>
            <h2 className='text-center font-bold font-custom2 px-3 m-2 text-white'>Soft Skills</h2>
            <div className="flex justify-center ">
              <ul className='flex inline rounded-md px-3 md:mt-12'>
                <li className='py-2 bg-amber-200 font-bold text-center rounded-md w-40 font-custom2 m-2'>Hardworking</li>
                <li className='py-2 bg-amber-200 font-bold text-center rounded-md w-40 font-custom2 m-2'>Quick Learner</li>
                <li className='py-2 bg-amber-200 font-bold text-center rounded-md w-40 font-custom2 m-2'>Team Work</li>
                <li className='py-2 bg-amber-200 font-bold text-center rounded-md w-40 font-custom2 m-2'>Leadership Quality</li>
                <li className='py-2 bg-amber-200 font-bold text-center rounded-md w-40 font-custom2 m-2'>Time management</li>
                <li className='py-2 bg-amber-200 font-bold text-center rounded-md w-40 font-custom2 m-2'>Adaptive</li>
              </ul>
            </div>
          </div>

          {/* hard skills  */}
          <div className='flex-1 w-full m-2 p-2 text-center font-custom2 justify-center'>
            <h1 className='font-bold font-custom2 px-3 m-2 text-white '>Hard Skills</h1>
            <div className=' mx-56 w-2/3 rounded-md mt-12 py-3  text-amber-200 font-bold'>
                {/* HTMl  */}
                <div className='flex items-center justify-between py-3'>
                  <ion-icon name="logo-html5"></ion-icon>
                  <span>HTML</span>
                  <span>60%</span>
                </div>
                <div className='h-3 w-60 relative bg-amber-200'>
                </div>
                {/* html  */}
                {/* css  */}
                <div className='flex items-center justify-between py-3'>
                <ion-icon name="logo-css3"></ion-icon>
                  <span>CSS</span>
                  <span>50%</span>
                </div>
                <div className='h-3 w-2/4 relative bg-amber-200'>
                </div>
               {/* css  */}
               {/* js  */}
                <div className='flex items-center justify-between py-3'>
                <ion-icon name="logo-javascript"></ion-icon>
                  <span>JavaScript</span>
                  <span>30%</span>
                </div>
                <div className='h-3 w-1/3 relative bg-amber-200 '>
                </div>
                {/* js  */}
                 {/* react  */}
                <div className='flex items-center justify-between py-3'>
                <ion-icon name="logo-react"></ion-icon>
                  <span>React</span>
                  <span>45%</span>
                </div>
                <div className='h-3 w-1/3 relative bg-amber-200 '>
                </div> 
                {/* react  */}
                {/* node js  */}
                <div className='flex items-center justify-between py-3'>
                <ion-icon name="logo-nodejs"></ion-icon>
                  <span>NodeJS</span>
                  <span>30%</span>
                </div>
                <div className='h-3 w-1/3 relative bg-amber-200 '>
                </div>
                {/* node js  */}
                {/* MongoDB  */}
                <div className='flex items-center justify-between py-3'>
                  <SiMongodb/>
                  <span>MongoDB</span>
                  <span>30%</span>
                </div>
                <div className='h-3 w-1/3 relative bg-amber-200 '>
                </div>
                {/* mongoDB  */}
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Skills