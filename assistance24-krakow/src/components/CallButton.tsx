'use client'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const CallButton = (props: Props) => {
  return (
    <div className='relative'>
      <a href="tel: 604 944 755">
      <button className='flex items-center justify-center p-4 m-auto text-2xl font-bold text-white transition duration-300 ease-in-out delay-150 border-4 rounded shadow border-primary-yellow bg-green hover:-translate-y-1 hover:scale-110'>
        <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff", marginRight: "10px"}} />
        Wezwij Pomoc! 
    </button>
    </a>
    </div>
    
  )
}

export default CallButton
