import { motion } from 'framer-motion'

import Technologies from '../components/Technologies'

const Skills = () => {
  return (
    <div className='skills-wrapper'>
      <div className='p-5 my-5 bg-dark-op-300 flex flex-col gap-3 relative before:bg-pill before:w-full before:h-full before:absolute before:inset-0 before:z-0 before:grayscale before:contrast-200 rounded-[40px] overflow-hidden'>
        <div className='w-full h-auto z-10'>
          <motion.h2 initial={{ y: '-100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'linear', duration: 0.5 }} className='text-center text-[60px] md:text-[90px] text-primary'>My Skills</motion.h2>
        </div>
        <Technologies motion={motion} />
      </div>
    </div>
  )
}

export default Skills
