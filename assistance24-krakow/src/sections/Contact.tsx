import Map from '@/components/Map'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
        <p className='p-24 text-3xl font-bold text-center'>Kontakt</p>
        <div className='flex flex-col items-center justify-around pt-20 pb-24 m-auto sm:flex-row'>
            <p className='mb-6 text-xl font-bold md:mb-0'>Assistance24 Krakow <br /> <a href="#tel: 555-666-777">tel: 555-666-777</a></p>
            <p className='mb-6 text-xl font-bold md:mb-0'>Kontakt@assistance24.kraków.pl</p>
            <p className='mb-6 text-xl font-bold md:mb-0'><a href="https://www.google.com/maps/place/Pomoc+Drogowa+Krak%C3%B3w+-+Assistance24/@50.1160879,19.8667231,17z/data=!3m1!4b1!4m6!3m5!1s0x471659a762951237:0xe8fcd12791da423c!8m2!3d50.1160879!4d19.8689118!16s%2Fg%2F11jp17n8lq">Kliknij tu i znajdź nas na Google Maps</a></p>
        </div>
        <Map />
    </div>
  )
}

export default Contact