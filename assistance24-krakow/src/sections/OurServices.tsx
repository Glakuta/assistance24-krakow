import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTractor, faTruck } from '@fortawesome/free-solid-svg-icons'



type Props = {}

const OurServices = (props: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='flex items-center justify-center p-24 mb-6 text-3xl font-bold'>O nas</h3>
      <div className='flex flex-col items-center justify-around md:flex-row'>
        <div className='flex flex-col items-center justify-around mt-10'>
        <FontAwesomeIcon icon={faCar} className='w-16 h-16'/>
        <h4 className='flex items-center justify-center p-12 mb-6 text-xl font-bold' >Holowanie samochodów</h4>
        <p className='max-w-md font-bold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quasi harum dolore sit vitae! Laudantium cupiditate reprehenderit officia
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi harum dolore sit vitae! Laudantium cupiditate reprehenderit officia</p>

        </div>
        <div className='flex flex-col items-center justify-around mt-10'>
        <FontAwesomeIcon icon={faTruck} className='w-16 h-16'/>
        <h4 className='flex items-center justify-center p-12 mb-6 text-xl font-bold text-center'>Transport samochodów ciężarowych i dostawczych</h4>
        <p className='max-w-md font-bold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quasi harum dolore sit vitae! Laudantium cupiditate reprehenderit officia
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi harum dolore sit vitae! Laudantium cupiditate reprehenderit officia</p>

        </div>
        <div className='flex flex-col items-center justify-around mt-10'>
        <FontAwesomeIcon icon={faTractor} className='w-16 h-16'/>
        <h4 className='flex items-center justify-center p-12 mb-6 text-xl font-bold text-center'>Pomoc w trancporcie traktorów i maszyn rolniczych</h4>
        <p className='max-w-md font-bold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quasi harum dolore sit vitae! Laudantium cupiditate reprehenderit officia
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi harum dolore sit vitae! Laudantium cupiditate reprehenderit officia</p>

        </div>
      </div>
    </div>
  )
}

export default OurServices