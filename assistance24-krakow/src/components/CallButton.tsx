import React from 'react'

type Props = {}

const CallButton = (props: Props) => {
  return (
    <button className='flex items-center justify-center p-4 m-auto text-2xl font-bold text-white transition duration-300 ease-in-out delay-150 border-4 rounded shadow border-primary-yellow bg-blue hover:-translate-y-1 hover:scale-110'>
        Wezwij Pomoc!
    </button>
  )
}

export default CallButton