import { useContext } from 'react'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import avatar from '../assets/images/avatar.jpeg'
import { Logo } from './Logo'
import { AppContext } from '../context/AppContext'

const Hero = () => {
  const { personalData, socialNetworks, darkTheme, lang } = useContext(AppContext)

  return (
    <div className='hero-wrapper flex flex-col justify-between gap-5'>
      <div className='flex justify-between items-center gap-5'>
        <motion.h1
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 1
          }}
          viewport={{ once: true }}
          className='uppercase text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[90px] md:leading-[90px] font-bold dark:text-primary'
        >
          {personalData.name}
        </motion.h1>
        <motion.p
          initial={{ x: '100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 1
          }}
          viewport={{ once: true }}
          className='uppercase text-[30px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[85px] md:leading-[70px] font-bold dark:text-primary'
        >
          {'</>'}
        </motion.p>
      </div>
      <div className='flex justify-center'>
        <motion.div
          initial={{ width: '80px' }}
          whileInView={{ width: '100%' }}
          transition={{
            ease: 'linear',
            duration: 0.6,
            delay: 0.5
          }}
          viewport={{ once: true }}
          className='p-2 my-5 bg-dark-op-300 flex gap-3 relative before:bg-pill before:w-full before:h-full before:absolute before:inset-0 before:z-0 before:grayscale before:contrast-200 rounded-[40px] overflow-hidden'
        >
          <LazyLoadImage
            src={avatar}
            alt={personalData.name}
            className='w-[50px] h-[50px] rounded-full z-10'
            width='50'
            height='50'
          />
        </motion.div>
      </div>
      <hr className='hr' />
      <div className='py-3 mb-5 text-[18px] font-extralight'>
        <motion.p
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 1
          }}
          viewport={{ once: true }}
          className='mb-5 font-medium dark:text-light'
        >
          {personalData.description}
        </motion.p>
        <div className='flex justify-center my-5'>
          {darkTheme
            ? (
              <Logo size='30px' fill='#d5ff40' rotation />
              )
            : (
              <Logo size='30px' rotation />
              )}
        </div>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'linear',
            duration: 1
          }}
          viewport={{ once: true }}
          className='flex justify-start flex-wrap items-center gap-4 glass-element p-4 mad:p-3 rounded-[40px] overflow-hidden'
        >
          {socialNetworks?.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className='flex justify-center items-center gap-3 border-2 border-dark-mid border-solid px-5 py-1 rounded-[20px] bg-dark text-primary hover:bg-primary hover:text-dark w-full md:w-auto dark:bg-gray'
              target='_blank'
              rel='noopener noreferrer'
            >
              <item.icon size='16px' />
              <span className='text-[16px]'>{item.title}</span>
            </a>
          ))}
          {lang === 'es'
            ? (
              <hr className='hr hidden md:w-[30vw] sm:flex' />
              )
            : (
              <hr className='hr hidden md:w-[40vw] sm:flex' />
              )}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
