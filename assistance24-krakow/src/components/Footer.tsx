import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-col justify-around md:flex-row p-7 bg-grey'>
        <div className='max-w-xl'>
            <div className='flex flex-col mt-4 md:flex-row :'>
            <h4 className='ml-6 text-3xl font-bold text-white '>Pomoc drogowa</h4>
            <p className='ml-5 text-3xl font-bold text-primary-yellow'>+48 555-666-777</p>
            </div>
            <div>
                <p className='mt-4 ml-6 text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Animi iure, excepturi hic cumque fuga temporibus
                     beatae illum dolorem quas accusantium porro sequi
                      libero nobis ab expedita nihil, est debitis! Magnam?
                </p>
            </div>
        </div>
        <div>
        <div className='flex flex-row items-center justify-around w-full p-6 mt-14 '>
        <h3 className='text-2xl font-bold text-white'>AUTO-LAWETA</h3>
        <h3 className='text-2xl font-bold text-white'>HOLOWANIE KRAKÓW</h3>
        <h3 className='text-2xl font-bold text-white'>POMOC</h3>
        <h3 className='text-2xl font-bold text-white'>ASSISTANCE</h3>
      </div>
        </div>
    </div>
  )
}

export default Footer