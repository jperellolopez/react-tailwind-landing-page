import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red"> Oferta </span>
          especial
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embárcate en una experiencia que redefinirá tu forma de comprar. Con nuestros últimos lanzamientos e increíbles descuentos, ofrecemos una relación calidad/precio sin rival.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navega entre un amplio abanico de posibilidades diseñadas para satisfacer tus gustos y preferencias personales. Te aseguramos una experiencia de compra inigualable.
        </p>
        {/**Button component */}
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Compra Ahora" iconUrl={arrowRight} />
          <Button label="Ver Más Ofertas" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers