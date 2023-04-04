import { useEffect, useState } from 'react'
import { profesionalProjects, projectsData } from '../locales/en/projects.en'
import { motion } from 'framer-motion'
import { useFilters } from '../hooks/useFilters'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ProjectsFilters } from '../components/ProjectsFilters'

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

const Projects = () => {
  const [filters, setfilters] = useState([])
  useEffect(() => {
    const { Filters } = useFilters()
    setfilters(Filters)
  }, [])
  return (
    <div className='block bg-dark-mid rounded-xl p-5 sm:p-10'>
      <div className='flex justify-between items-start flex-col md:flex-row mb-20'>
        <h1 className='uppercase text-light text-[25px] sm:text-[40px] font-bold'>
          {projectsData.title}{' '}
          <span className='text-primary text-[60px] leading-3'>.</span>
        </h1>
        <p className='text-left max-w-full sm:max-w-[50%] font-extralight text-light-mid text-[12px] md:text-[14px]'>
          {projectsData.description}
        </p>
      </div>
      <ProjectsFilters filters={filters} />
      <hr className='hr02 my-10' />
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <ProjectsGrid profesionalProjects={profesionalProjects} motion={motion} />
      </motion.div>
    </div>
  )
}

export default Projects
