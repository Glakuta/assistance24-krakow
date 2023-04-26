
import CallButton from '@/components/CallButton'
import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='p-9 flex-col h-96 w-full'>
      <div className='flex-col items-center justify-center h-48'>
      <CallButton />
      <h1 className='pb-32 mb-6 flex items-center justify-center text-3xl font-bold'>Pomoc Drogowa Kraków</h1>
      </div>
      <div className='p-6 flex justify-around items-center w-auto bg-primary-yellow'>
        <h3>AUTO-LAWETA</h3>
        <h3>HOLOWANIE</h3>
        <h3>POMOC</h3>
        <h3>ASSISTANCE</h3>
      </div>


    </div>
    
  )
}

export default HeroSection