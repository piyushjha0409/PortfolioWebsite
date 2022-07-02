import React from 'react'

const Contact2 = () => {
  return (
    <section>
        <div className='flex justify-center items-center h-23 text-6xl text-amber-200 font-custom2 font-bold'>
            <h1 className=''> Connect with me through mail!</h1>
        </div>
        <div className='flex-1 justify-center items-center m-4 text-amber-200'>
        <div className='flex-1 justify-center text-center '>
          <h1 className='w-full text-8xl'><ion-icon name="mail-outline"></ion-icon></h1>
          </div>
          <h1 className='flex justify-center items-center h-2 mb-8 font-custom2 font-bold text-4xl'>Email</h1>
        <div className='flex justify-center'>
        <a href='mailto:peeyush0409@gmail.com' className='text-xl hover:text-blue-700 font-bold  p-2 rounded-2xl text-black font-custom3'>peeyush0409@gmail.com</a>
        </div>
        </div>
        <div className='flex justify-between h-8 items-center text-2xl font-custom2 font-bold bg-black text-white'>
          <h1 className='mx-12'>@copyright 2022</h1>
          <h1 className='mx-12'>owned by - Piyush Jha</h1>
        </div>
    </section>
  )
}

export default Contact2