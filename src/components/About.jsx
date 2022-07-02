import React from 'react'
import { Link } from 'react-scroll'
import Profile from '../static/profile.png'

export const About = () => {
  return (
 <section className='text-white font-custom2 pb-12 h-screen' id="about">
  <div className='flex-1 justify-center'>
    <h1 className="block font-bolder font-custom2 md:text-9xl p-2 text-amber-200">About Me</h1>
  </div>
  
  <div className="flex items-center">
    <div className='flex-1 w-1/4 sm:w-1/4 justify-center items-center'>
        <img src={Profile}  className="object-contain md:h-full md:w-96"/>
      </div>
    <div className='flex-1 w-3/4 justify-center font-bold text-2xl h-96 p-2 '>
       {/* card  */}
    <div class="flex ">
  <div class="block p-6 rounded-lg shadow-lg bg-white">
    <h5 class="text-gray-900 text-xl leading-tight font-custom2 mb-2 text-center">Description</h5>
    <p class="text-gray-700 text-base mb-4">
    Hello user! I am Piyush from New Delhi, A Computer science student and tech enthusiast. This is my Portfolio Website for introducing myself to the corporate world. Currently I am doing my graduation in BCA(Bachelor in Computer Applications) from IP University. There are some of my best projects that I have worked on in my past time, you can find thier link in the project section, I hope you will appreciate it and if you want to be connected with me through social media then here press the icons given below. 
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><Link to='contact' smooth={true} duration={1000}>Say Hi!</Link></button>
  </div>
</div>
{/* card  */}
    </div>
    </div>
  </section>

  )
}

export default About