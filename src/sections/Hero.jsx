import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import { shoes } from '../constants'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'

const Hero = () => {
  // usestate for changing image displayed when clicking in the thumbnail
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex-col flex justify-center items-start w-full max-xl:padding-x pt-28'>
        {/**Hero section main contents */}
        <p className='text-xl font-montserrat text-coral-red'>Nuestra colección de verano</p>
        <h1 className='mt-10 font-palanquin text-8xl mx-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          
          <span className='xk:whitespace-nowrap relative z-10 pr-10'>Últimas novedades</span>
          <br />
          en zapatillas&nbsp;
          <span className='text-coral-red inline-block mt-3'>Kine</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Redescubre el confort, rendimiento, diseño... en nuestros últimos lanzamientos</p>

        {/**Button component */}
        <Button label="Compra Ahora" iconUrl={arrowRight}/>

        {/**Statistics */}
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((item, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/**Right side big image */}
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="big_shoe" width={610} height={500} className='object-contain relative z-10 ' />
        
        {/**Container for the image thumbnails */}
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard imgUrl={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Hero