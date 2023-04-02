import { useEffect } from 'react'
import { profesionalProjects, projectsData, skillsList } from '../locales/en'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import bgImage from '../assets/images/portada-1.webp'
import { FiGlobe, FiGithub } from 'react-icons/fi'

import { Liquid } from '../components/Icons/Liquid'

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
    <div className='block bg-dark-mid rounded-xl p-5 sm:p-10'>
      <div className='flex justify-between items-start flex-col md:flex-row mb-10'>
        <h1 className='uppercase text-light text-[25px] sm:text-[40px] font-bold'>
          {projectsData.title}{' '}
          <span className='text-primary text-[60px] leading-3'>.</span>
        </h1>
        <p className='text-left max-w-full sm:max-w-[50%] font-extralight text-light-mid text-[12px] md:text-[14px]'>
          {projectsData.description}
        </p>
      </div>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'
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
                  <p className='text-[16px] text-light z-10'>{project.year}</p>
                  <h3 className='text-primary uppercase text-[20px] z-10'>{project.name}</h3>
                  <hr className='hr02' />
                  <div className='flex flex-wrap justify-start items-center gap-3 z-10 mt-2'>
                    {project.tags?.map((tag) => (
                      <span key={tag} className='text-primary flex justify-center items-center border-2 w-[30px] h-[30px] rounded-full z-10'>
                        {skillsList.map(skill => {
                          if (tag.toLowerCase() === skill.name.toLowerCase()) {
                            return <skill.icon key={skill.name} fill='#d5ff40' size='18px' />
                          } else {
                            return null
                          }
                        })}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='absolute inset-0 p-3 hover-info glass-element'>
                  <p className='text-light-mid mb-5'>{project.description}</p>
                  <div className='flex flex-wrap justify-start items-center gap-3'>
                    {project?.site_link && (
                      <a href={project.site_link} className='text-light-mid hover:text-primary flex justify-center items-center border-2 w-[30px] h-[30px] rounded-full' target='_blank' rel='noopener noreferrer'><FiGlobe /></a>
                    )}
                    {project?.source_code_link && (
                      <a href={project.source_code_link} className='text-light-mid hover:text-primary flex justify-center items-center border-2 w-[30px] h-[30px] rounded-full' target='_blank' rel='noopener noreferrer'><FiGithub /></a>
                    )}
                  </div>
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
