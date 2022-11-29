import React from 'react'
import Typewriter from 'typewriter-effect'


const Home = () => {
  return (
    <section className='flex md:h-screen sm:h-96' id='home'>
      <div className='md:text-11xl text-6xl sm:text-4xl items-center font-custom2 w-full flex justify-center font-bold font-custom text-amber-200'>
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(' Hello! <ion-icon name="happy-outline"></ion-icon><br>')
      .typeString('I am Piyush,')
      .typeString(' Nice to meet you!. <ion-icon name="hand-left-outline"></ion-icon><ion-icon name="hand-right-outline"></ion-icon>')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .start();
  }}
/>
    </div>
  </section>
  )
}

export default Home