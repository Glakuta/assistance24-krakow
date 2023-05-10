import CallButton from '@/components/CallButton'
import React from 'react'
import ScrollButton from '@/components/ScrollButton'
import NavBar from '@/components/NavBar'


type Props = {}

const HeroSection = (props: Props) => {
 
  return (
    <div className='flex-col w-full pb-28'>
      <div className='flex-col items-center justify-center  min-h-[600px] bg-hero bg-no-repeat bg-cover bg-opacity-60'>
        <NavBar />
      <h1 className='flex items-center justify-center p-24 mt-10 mb-6 text-3xl font-bold text-white md:p-16 whitespace-nowrap'>Pomoc Drogowa Kraków</h1>
      <CallButton />
      <ScrollButton />
      </div>
      <div className='flex flex-col items-center justify-around max-w-full p-6 md:flex-row bg-primary-yellow '>
        <h3 className='mb-5 text-2xl font-bold md:mb-0'>LAWETA KRAKÓW </h3>
        <h3 className='mb-5 text-2xl font-bold md:mb-0'>HOLOWANIE</h3>
        <h3 className='mb-5 text-2xl font-bold md:mb-0'>AUTO POMOC</h3>
        <h3 className='mb-5 text-2xl font-bold'>ASSISTANCE</h3>
      </div>
    </div>
    
  )
}

export default HeroSection