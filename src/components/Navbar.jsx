import React from 'react'
import { useState } from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
 const [show, setShow] = useState(false)

 function handleShow(){
  setShow(!show)
 }

  return (
    <nav class="flex justify-between items-center bg-black sticky top-0 opacity-1">

    <div className='flex justify-between items-center max-w-screen-xl w-11/12 m-auto'>
    <header class=" flex m-1 p-1 text-white text-md space-x-1 md:text-base lg:text-xl">
      <div className='flex mt-1'>
        <ion-icon name="person-outline"></ion-icon>
      </div>
        <div className='flex mt-0.5'>
        <p class="inline font-custom tracking-widest">MY PORTFOLIO</p>
        </div>
    </header>
     <button className="block lg:hidden rounded m-1 hover:bg-gray-200 cursor-pointer" onClick={handleShow}>
        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
        <div className='w-5 h-1 bg-gray-600 mb-1'></div>
        <div className='w-5 h-1 bg-gray-600'></div>
      </button>

{   show &&  <div className='hamburgur-items lg:hidden flex w-full right-0 bg-black text-white py-2 absolute top-10'>
     <div className='flex-col w-full space-y-1'>
     <a className='block w-full text-center hover:bg-yellow-200 hover:text-black'><Link to="home" smooth={true} duration={1000}>Home</Link></a>
     <a className='block w-full text-center hover:bg-yellow-200 hover:text-black'><Link to="about" smooth={true} duration={1000}>About</Link></a>
     <a className='block w-full text-center hover:bg-yellow-200 hover:text-black'><Link to="skills" smooth={true} duration={1000}>Skills</Link></a>
     <a className='block w-full text-center hover:bg-yellow-200 hover:text-black'><Link to="contact" smooth={true} duration={1000}>Contact</Link></a>
     </div>
    </div>}
      {/* This is the items for full screen */}
    <div class="inline hidden lg:flex text-white">
     <ul class="inline font-semibold font-custom"> 
         <li class="inline px-2 cursor-pointer hover:text-amber-300 p-5 font-custom2"><Link to="home" smooth={true} duration={1000}>Home</Link></li>
         <li class="inline px-2 cursor-pointer hover:text-amber-300 p-5 font-custom2"><Link to="about" smooth={true} duration={1000}>About</Link></li>
         <li class="inline px-2 cursor-pointer hover:text-amber-300 p-5 font-custom2"><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
         <li class="inline px-2 cursor-pointer hover:text-amber-300 p-5 font-custom2"><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
         <li class="inline px-2 cursor-pointer hover:text-amber-300 p-5 font-custom2"><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
     </ul>
    </div>
    </div>
</nav>
  )
}

export default Navbar