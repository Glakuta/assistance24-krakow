'use client'
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

type Props = {}

const ScrollButton = (props: Props) => {
    const handleClick = () => {
        window.scrollTo(0,0);
      }
  return (
    <div><FontAwesomeIcon icon={faSquareCaretUp} onClick={handleClick} className='fixed z-10 w-16 h-16 mt-32 ml-2 mr-0 transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/></div>
  )
}

export default ScrollButton