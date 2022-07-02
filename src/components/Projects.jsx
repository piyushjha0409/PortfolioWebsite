import React from 'react'
import project1 from '../static/project1.png'
import project2 from '../static/project2.png'
import project3 from '../static/project3.png'
import 'tw-elements';


const Projects = () => {

  return (
<section className='flex-1 items-center text-white h-auto' id='projects'>
<h1 className='font-custom2 m-2 p-2 md:text-9xl text-amber-200'>Projects</h1>

{/* copied code  */}
<div id="carouselExampleCaptions" class="carousel slide relative rounded-md" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src={project1}
        class="block w-4/5 m-auto opacity-75"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center text-amber-400">
        <h5 class="text-xl">Text Analyzer</h5>
        <p>This is a software use to perform ceratain operations on text. Made in React JS</p>
        <a href="https://piyushjha0409.github.io/Text-Analyzer/#" className='text-2xl text-cyan-200 hover:text-amber-700'>Visit</a>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src={project2}
        class="block w-4/5 m-auto opacity-75"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center text-amber-700">
        <h5 class="text-xl">iNotebook</h5>
        <p>This is my blog website You can also put your content there.</p>
        <a href="" className='text-2xl text-cyan-200 hover:text-amber-700'>Visit</a>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src={project3}
        class="block w-4/5 m-auto opacity-75"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center text-amber-400">
        <h5 class="text-xl">Portfolio Website</h5>
        <p>Made in React JS</p>
        <a href="https://piyushjha0409.github.io/Text-Analyzer/#" className='text-2xl text-cyan-200 hover:text-amber-700'>Visit</a>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 w-32 bg-black"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0  text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 bg-black w-32"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
  )
}

export default Projects

