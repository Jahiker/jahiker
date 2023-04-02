import { skillsList } from '../locales/en'

const Technologies = ({ motion }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'linear', duration: 1 }}
      className='glass-element rounded-[40px] z-10 p-5 md:p-10 overflow-hidden flex justify-center items-center flex-wrap gap-10 md:gap-20'
    >
      {skillsList?.map((item) => (
        <div key={item.name} className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full scale-1 transition-transform hover:scale-110 hover:bg-dark-mid'>
          <item.icon size='40px' fill='#d5ff40' color='#101010' />
          <span className='uppercase text-[8px] font-extralight text-center'>{item.name}</span>
        </div>
      ))}
    </motion.div>
  )
}

export default Technologies
