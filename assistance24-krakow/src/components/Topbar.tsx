import React from 'react'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
type Props = {}

const TopBar = (props: Props) => {
  return (
    <div className='flex flex-row justify-around pt-4 pb-4 font-sans text-xl font-bold bg-primary-yellow'> 
        <div className='flex flex-row items-start justify-between ' >
          <AiFillPhone  className='m-auto'/>
          <p className='ml-1 mr-4'>tel: 555-444-555</p>
          <AiFillMail className='m-auto' />
          <p className='ml-1 sm:block'>assistance24-krakow@kontakt.pl</p>
        </div>
        <div className=''>
            <h4 className='lg:block'>Transport samochodów i maszyn</h4>
        </div>
    </div>
  )
}

export default TopBar