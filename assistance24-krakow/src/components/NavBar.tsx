import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='flex flex-row justify-between p-7'>
        <div>Logo</div>
        <nav >
            <ul className='flex flex-row items-center'>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>Strona główna</a></li>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>Oferta</a></li>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>Mobilny mechanik</a></li>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>O nas</a></li>
                <li><a href='' className='pr-3 text-2xl font-semibold hover:text-primary-yellow active:hover:text-primary-yellow'>Kontakt</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar