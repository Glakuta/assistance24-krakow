import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTractor, faTruck } from '@fortawesome/free-solid-svg-icons'



type Props = {}

const OurServices = (props: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='flex items-center justify-center p-24 mb-6 text-3xl font-bold'>O nas</h3>
      <div className='flex flex-col items-center justify-around md:flex-row'>
        <div className='flex flex-col items-center justify-around mt-10'>
        <FontAwesomeIcon icon={faCar} className='w-16 h-16'/>
        <h4 className='flex items-center justify-center p-12 mb-6 text-xl font-bold' >Holowanie samochodów</h4>
        <p className='max-w-md font-bold text-center'>Kiedy Twój samochód nagle odmawia posłuszeństwa na drodze, nie musisz już martwić się o to, co zrobić dalej.
         Nasza firma oferuje kompleksowe usługi holowania samochodów,
         zapewniając Ci szybkie i bezpieczne przemieszczenie pojazdu do wybranego miejsca.
        Nasi wykwalifikowani operatorzy i specjalistyczny sprzęt pozwolą Ci zminimalizować stres związany z awarią i zapewnić sprawną obsługę na drodze.
           Zaufaj nam swoje auto, a my zajmiemy się resztą.a</p>

        </div>
        <div className='flex flex-col items-center justify-around mt-10'>
        <FontAwesomeIcon icon={faTruck} className='w-16 h-16'/>
        <h4 className='flex items-center justify-center p-12 mb-6 text-xl font-bold text-center'>Transport samochodów ciężarowych i dostawczych</h4>
        <p className='max-w-md font-bold text-center'>Gdy potrzebujesz fachowego i niezawodnego transportu samochodów ciężarowych oraz dostawczych, jesteśmy Twoim idealnym partnerem.
         Nasza firma dysponuje specjalistycznymi naczepami oraz doświadczonymi kierowcami,
          którzy zapewnią bezpieczne i terminowe dostarczenie Twojego pojazdu w dowolne miejsce oraz pomoc w razie wypadku.
           Niezależnie od rozmiaru i wagi, możesz polegać na naszym profesjonalizmie.
            Pozwól nam zająć się transportem Twojego samochodu lub pomocą, 
            abyś mógł skupić się na swoim biznesie.</p>

        </div>
        <div className='flex flex-col items-center justify-around mt-10'>
        <FontAwesomeIcon icon={faTractor} className='w-16 h-16'/>
        <h4 className='flex items-center justify-center p-12 mb-6 text-xl font-bold text-center'>Pomoc w trancporcie traktorów i maszyn rolniczych</h4>
        <p className='max-w-md font-bold text-center'>Rolnicy i właściciele gospodarstw doskonale wiedzą, jak ważne jest sprawne działanie traktorów i maszyn rolniczych. 
        W przypadku awarii lub potrzeby przewiezienia sprzętu na oddalone pole, nasza firma oferuje niezawodną pomoc w transporcie.
         Nasze specjalistyczne pojazdy i wykwalifikowana ekipa zapewnią profesjonalne i bezpieczne przemieszczenie
         </p>

        </div>
      </div>
    </div>
  )
}

export default OurServices