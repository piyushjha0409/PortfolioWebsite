import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav class="md:flex sm:flex justify-between items-center bg-black sticky top-0">
    <div className='flex justify-between items-center max-w-screen-xl sm:w-11/12 m-auto'>
    <header class="sm:m-2 sm:p-2 text-white">
        <ion-icon name="person-outline"></ion-icon>
        <p class="inline sm:text-lg sm:mx-2 font-custom sm:tracking-widest">MY PORTFOLIO</p>
    </header>
    <div class="inline text-white">
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