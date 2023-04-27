
import CallButton from '@/components/CallButton'
import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='p-9 flex-col w-full'>
      <div className='flex-col items-center justify-center h-96'>
      <h1 className='p-24 mb-6 flex items-center justify-center text-3xl font-bold'>Pomoc Drogowa Kraków</h1>
      <CallButton />
      </div>
      <div className='mt-14 p-6 flex flex-row justify-around items-center w-full bg-primary-yellow '>
        <h3 className='font-bold text-2xl'>AUTO-LAWETA</h3>
        <h3 className='font-bold text-2xl'>HOLOWANIE</h3>
        <h3 className='font-bold text-2xl'>POMOC</h3>
        <h3 className='font-bold text-2xl'>ASSISTANCE</h3>
      </div>
    </div>
    
  )
}

export default HeroSection