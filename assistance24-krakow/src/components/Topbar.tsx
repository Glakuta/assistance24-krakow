'use client'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
type Props = {}

const TopBar = (props: Props) => {

  const [open, setOpen] = useState(false)
  return (
    <div className='relative z-20'>
      <div className='fixed flex flex-row justify-around w-full pt-4 pb-4 text-xl font-bold bg-primary-yellow '> 
    <div className='flex flex-row items-start justify-between h' >
      <AiFillPhone  className='hidden m-auto md:block'/>
      <p className='hidden ml-1 mr-4 md:block'>tel: 555-444-555</p>
      <AiFillMail className='hidden m-auto md:block' />
      <p className='mt-auto mb-auto ml-1 text-lg md:text-xl whitespace-nowrap'>assistance24-krakow@kontakt.pl</p>
    </div>
    <div className=''>
        <h4 className='hidden md:block'>Transport samochodów i maszyn</h4>
    </div>
    <FontAwesomeIcon icon={faBars} onClick={() => setOpen(!open)} className='block w-12 h-12 mr-2 transition duration-300 ease-in-out delay-150 md:hidden hover:-translate-y-1 hover:scale-110'/>
    </div>
    <div className={`${open ? "flex" : "hidden"} fixed flex-col items-center justify-center w-full h-80 bg-primary-yellow md:hidden`}>
    <FontAwesomeIcon icon={faXmark} onClick={() => setOpen(!open)} className='block w-12 h-12 ml-64 transition duration-300 ease-in-out delay-150 md:hidden hover:-translate-y-1 hover:scale-110'/>
    <nav >
            <ul className='flex-col items-center justify-center mt-8 text-center lg:hidden '>
                <li><a href='' className='pr-3 mb-2 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>Strona główna</a></li>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>Oferta</a></li>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>Mobilny mechanik</a></li>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>O nas</a></li>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>Kontakt</a></li>
            </ul>
        </nav>
    </div>
    </div>
    
    
  )
}

export default TopBar