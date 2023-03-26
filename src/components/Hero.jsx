import React from 'react'

import avatar from '../assets/images/avatar.jpeg'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <h2 className='uppercase text-[100px] font-bold'>Jahiker Rojas</h2>
      <div className='p-3 bg-dark-op-300 flex gap-3 relative before:bg-pill before:w-full before:h-full before:absolute before:inset-0 before:z-0 before:grayscale before:contrast-200 rounded-3xl overflow-hidden'>
        <img src={avatar} alt='Jahiker Rojas' className='w-[50px] h-[50px] rounded-full z-10' />
      </div>
    </div>
  )
}

export default Hero
