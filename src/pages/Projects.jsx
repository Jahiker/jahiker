import { useEffect } from 'react'
import { profesionalProjects, projectsData } from '../locales/en'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import bgImage from '../assets/images/portada-1.webp'
import { FiGlobe } from 'react-icons/fi'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)'
}

const Projects = () => {
  useEffect(() => {
    console.log('profesionalProjects', profesionalProjects)
  }, [])
  return (
    <div className='block bg-dark-mid rounded-xl p-10'>
      <div className='flex justify-between items-start mb-10'>
        <h1 className='uppercase text-light text-[40px] font-bold'>
          {projectsData.title}{' '}
          <span className='text-primary text-[60px] leading-3'>.</span>
        </h1>
        <p className='text-left max-w-[50%] font-extralight text-light-mid'>
          {projectsData.description}
        </p>
      </div>
      <motion.div
        className='grid grid-cols-3 gap-3'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {profesionalProjects?.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Tilt options={defaultOptions} style={{ height: '100%', width: '100%' }} className='bg-gray aspect-square'>
              <div className='w-full h-full relative overflow-hidden project-card'>
                <img src={project.image ? project.image : bgImage} alt={project.name} className='w-full h-full object-cover saturate-0 contrast-200 brightness-[0.6]' />
                <div className='absolute inset-0 p-3 normal-info flex flex-col justify-end'>
                  <p className='text-[16px] text-gray'>{project.year}</p>
                  <h3 className='text-primary uppercase text-[20px]'>{project.name}</h3>
                </div>
                <div className='absolute inset-0 p-3 hover-info glass-element'>
                  <p className='text-light-mid mb-5'>{project.description}</p>
                  <a href={project.site_link} className='text-light-mid hover:text-primary flex justify-center items-center border-2 w-[30px] h-[30px] rounded-full'><FiGlobe /></a>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
