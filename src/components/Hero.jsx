import React from 'react'
import { personalData, socialNetworks } from '../locales/en'
import avatar from '../assets/images/avatar.jpeg'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbUserCircle } from 'react-icons/tb'
import resume from '../assets/docs/Jahiker Rojas - Web Developer.pdf'

const Hero = () => {
  return (
    <div className='hero-wrapper flex flex-col justify-between gap-5'>
      <div className='flex justify-between items-center gap-5'>
        <h1 className='uppercase text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[90px] md:leading-[90px] font-bold'>{personalData.name}</h1>
        <p className='uppercase text-[30px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[85px] md:leading-[70px] font-bold'>{'</>'}</p>
      </div>
      <div className='p-2 my-5 bg-dark-op-300 flex gap-3 relative before:bg-pill before:w-full before:h-full before:absolute before:inset-0 before:z-0 before:grayscale before:contrast-200 rounded-[40px] overflow-hidden'>
        <img src={avatar} alt={personalData.name} className='w-[50px] h-[50px] rounded-full z-10' />
      </div>
      <hr className='hr' />
      <div className='py-3 mb-5 text-[18px] font-extralight'>
        <p className='mb-5'>{personalData.description}</p>
        <HiChevronDoubleDown className='mx-auto my-5' size='30px' />
        <div className='flex justify-start flex-wrap items-center gap-4 glass-element p-4 mad:p-3 rounded-[40px] overflow-hidden'>
          <a href={socialNetworks.github} className='flex justify-center items-center gap-3 border-2 border-dark-mid border-solid px-5 py-1 rounded-[20px] bg-dark text-primary hover:bg-primary hover:text-dark w-full md:w-auto'>
            <TbBrandGithub size='16px' />
            <span className='text-[16px]'>Github</span>
          </a>
          <a href={socialNetworks.linkedin} className='flex justify-center items-center gap-3 border-2 border-dark-mid border-solid px-5 py-1 rounded-[20px] bg-dark text-primary hover:bg-primary hover:text-dark w-full md:w-auto'>
            <TbBrandLinkedin size='16px' />
            <span className='text-[16px]'>Linkedin</span>
          </a>
          <a href={resume} download className='flex justify-center items-center gap-3 border-2 border-dark-mid border-solid px-5 py-1 rounded-[20px] bg-dark text-primary hover:bg-primary hover:text-dark w-full md:w-auto' target='_blank' rel='noopener noreferrer'>
            <TbUserCircle size='16px' />
            <span className='text-[16px]'>Resume</span>
          </a>
          <hr className='hr hidden md:w-[50%] sm:flex' />
        </div>
      </div>
    </div>
  )
}

export default Hero
