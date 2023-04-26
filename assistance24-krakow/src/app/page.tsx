import NavBar from '@/components/NavBar'
import TopBar from '@/components/Topbar'
import React from 'react'


type Props = {}

const Home: React.FC = (props: Props) => {
  return (
   <div>
    <TopBar />
    <NavBar />
   </div>
  )
}

export default Home