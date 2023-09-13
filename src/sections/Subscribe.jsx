import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section id="contact-us" className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <h3 className='text-4xl leading-[69px] lg:max-w-md font-palanquin font-bold'>Regístrate para ver nuestras
        <span className='text-coral-red'> novedades </span>y Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='subscribe@kine.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label="Iniciar Sesión" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe