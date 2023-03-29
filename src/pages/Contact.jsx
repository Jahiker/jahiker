import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Loader } from '../components'
import { contactForm } from '../locales/en'
const ContactForm = lazy(() => import('../components/ContactForm'))

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='p-5 my-5 bg-dark-op-300 flex flex-col gap-3 relative before:bg-pill before:w-full before:h-full before:absolute before:inset-0 before:z-0 before:grayscale before:contrast-200 rounded-[40px] overflow-hidden'>
        <div className='w-full h-auto z-10'>
          <motion.h2 initial={{ y: '-100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'linear', duration: 0.5 }} className='text-center text-[40px] md:text-[60px] text-primary'>{contactForm.title}</motion.h2>
        </div>
        <Suspense fallback={<Loader />}>
          <ContactForm contactForm={contactForm} motion={motion} />
        </Suspense>
      </div>
    </div>
  )
}

export default Contact
