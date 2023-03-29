import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { FaCheckCircle } from 'react-icons/fa'

const ContactForm = ({ contactForm, motion }) => {
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({ mode: 'all' })
  const onSubmit = (data) => {
    setSending(true)
    emailjs
      .send(
        'service_ojg62m4',
        'template_xvfxe1l',
        {
          from_name: data.name,
          to_name: 'Jahiker Rojas',
          from_email: data.email,
          to_email: 'rojasjahiker@gmail.com',
          message: data.messageText
        },
        'dhcXlXi0W3e5ldG3S'
      )
      .then(
        (result) => {
          console.log(result.text)
          reset({
            name: '',
            email: '',
            messageText: ''
          })
          setSuccess(true)
          setSending(false)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'linear', duration: 1 }}
      className='block z-10 w-full max-w-[100%]'
    >
      <form className='max-w-[600px] mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <label className='mb-5 block'>
          <span className='text-white'>{contactForm.name.label}</span>
          <input
            type='text'
            {...register('name', {
              required: {
                value: true,
                message: `${contactForm.name.errors.required}`
              }
            })}
            className={`w-full bg-gray focus:bg-gray focus:text-white  focus:outline-none border-solid border-2 h-[45px] p-3 text-white ${
              errors.name
                ? 'border-error focus:border-error focus:bg-gray bg-gray'
                : 'border-primary focus:border-primary focus:bg-gray bg-gray'
            }`}
          />
          {errors?.name && (
            <span className='block text-error'>{errors.name.message}</span>
          )}
        </label>
        <label className='mb-5 block'>
          <span className='text-white'>{contactForm.email.label}</span>
          <input
            type='email'
            {...register('email', {
              required: {
                value: true,
                message: `${contactForm.email.errors.required}`
              },
              pattern: {
                value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                message: `${contactForm.email.errors.pattern}`
              }
            })}
            className={`w-full focus:bg-gray focus:text-white  focus:outline-none bg-gray border-solid border-2 h-[45px] p-3 text-white ${
              errors?.email
                ? 'border-error focus:border-error'
                : 'border-primary focus:border-primary'
            }`}
          />
          {errors?.email && (
            <span className='block text-error'>{errors.email.message}</span>
          )}
        </label>
        <label className='mb-5 block'>
          <span className='text-white'>{contactForm.messageText.label}</span>
          <textarea
            cols='20'
            rows='10'
            {...register('messageText', {
              required: {
                value: true,
                message: `${contactForm.messageText.errors.required}`
              }
            })}
            className={`w-full focus:bg-gray focus:text-white focus:outline-none bg-gray border-solid border-2  p-3 text-white ${
              errors?.messageText
                ? 'border-error focus:border-error'
                : 'border-primary focus:border-primary'
            }`}
          />
          {errors?.messageText && (
            <span className='block text-red-500'>
              {errors.messageText.message}
            </span>
          )}
        </label>
        <label className='mb-5 block'>
          <input
            type='submit'
            disabled={!isValid}
            className={`w-full border-solid border-2 h-[50px] hover:opacity-90 ${
              isValid
                ? 'bg-primary border-primary text-gray cursor-pointer'
                : 'bg-gray border-gray text-light cursor-not-allowed'
            }`}
            value={
              sending
                ? `${contactForm.submit.sending}`
                : `${contactForm.submit.label}`
            }
          />
        </label>
        {success && (
          <motion.div
            initial={{
              minWidth: '50px',
              maxWidth: '50px',
              height: '50px',
              borderRadius: '25px'
            }}
            whileInView={{
              minWidth: '100%',
              maxWidth: '100%',
              height: '50px',
              borderRadius: '0'
            }}
            transition={{
              ease: 'linear',
              duration: 0.6,
              delay: 0.3
            }}
            viewport={{ once: true }}
            className='w-full mx-auto flex justify-center items-center h-[50px] bg-primary text-gray p-3'
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: 'linear',
                duration: 0.6,
                delay: 0.9
              }}
              viewport={{ once: true }}
              className='flex justify-center items-center gap-3'
            >
              {contactForm.success.message} <FaCheckCircle size='20px' />
            </motion.p>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}

export default ContactForm
