import React from 'react'
import Image from 'next/image'

type Props = {
   
}

const AboutUs = (props: Props) => {
  return (
    <div className='box-border flex flex-col'>
        <div className='flex flex-col items-center justify-around md:flex-row mt-36'>
           
                <Image src={'/Image6.jpg'} alt='zdjęcie-pomoc-drogowa' width='600'
                height='420' className='shadow-2xl rounded'/>
            
            <div className='max-w-lg mt-20'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi amet,
               earum harum labore ducimus quaerat ad vitae fugit quasi deserunt nisi fugiat ipsa?
               Optio facere voluptatem iure quisquam itaque.</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi amet,
               earum harum labore ducimus quaerat ad vitae fugit quasi deserunt nisi fugiat ipsa?
            </p>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi amet,
               earum harum labore ducimus quaerat ad vitae fugit quasi deserunt nisi fugiat ipsa?
               Optio facere voluptatem iure quisquam itaque.
            </p>

            </div>
            

        </div>
        <div className='flex flex-col items-center justify-around md:flex-row mt-36'>
        <div className='max-w-lg mb-20'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi amet,
               earum harum labore ducimus quaerat ad vitae fugit quasi deserunt nisi fugiat ipsa?
               Optio facere voluptatem iure quisquam itaque.</p>
               <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi amet,
               earum harum labore ducimus quaerat ad vitae fugit quasi deserunt nisi fugiat ipsa?
            </p>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore excepturi amet,
               earum harum labore ducimus quaerat ad vitae fugit quasi deserunt nisi fugiat ipsa?
               Optio facere voluptatem iure quisquam itaque.
            </p>
        </div>
        <Image src={'/Image2.jpg'} alt='zdjęcie-pomoc-drogowa' width='400' height='420' className='shadow-2xl rounded'/>
        
       
        </div>
        <div className='flex flex-col items-center justify-around md:flex-row mt-36'>
        <Image src={'/Image3.jpg'} alt='zdjęcie-pomoc-drogowa' width='500' height='360' className='shadow-2xl rounded'/>
        <Image src={'/Image4.jpg'} alt='zdjęcie-pomoc-drogowa' width='500' height='360' className='shadow-2xl rounded mt-12 md:mt-0'/>
        </div>
        <div className='flex flex-col items-center justify-around mt-12 md:flex-row'>
        <Image src={'/Image5.jpg'} alt='zdjęcie-pomoc-drogowa' width='500' height='360' className='shadow-2xl rounded' />
        <Image src={'/Image1.jpg'} alt='zdjęcie-pomoc-drogowa' width='500' height='300' className='shadow-2xl rounded mt-12 md:mt-0'/>
        </div>
        <div className='flex flex-row items-center justify-around w-full p-6 mt-14 bg-primary-yellow '>
        <h3 className='text-4xl font-extrabold'>Całodobowa pomoc drogowa - Kraków</h3>
      </div>
      <div className='flex flex-col items-center justify-around mt-12 md:flex-row'>
      <Image src={'/Image7.jpg'} alt='zdjęcie-pomoc-drogowa' width='1280' height='720' className='shadow-2xl '/>
      </div>

    </div>
    
  )
}

export default AboutUs