import { motion } from 'framer-motion'

export const Logo = ({ fill = '#101010', size = '100', rotation = false }) => {
  return (
    <>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'
        x='0'
        y='0'
        viewBox='6.300000190734863 11.5 87.39999389648438 77'
        xmlSpace='preserve'
        height={size}
        width={size}
        data-fill-palette-color='accent'
        id='icon-0'
        className={`icon-icon-0 inline-block w-[${size}] h-[${size}]`}
        animate={rotation ? { rotate: 360 } : {}}
        transition={{
          ease: [0.17, 0.67, 0.8, 0.67],
          repeat: Infinity,
          duration: 2
        }}
      >
        <path
          d='M72.3 12.3L72.3 12.3 72.3 12.3l-0.4-0.8H28.2L6.3 50l21.8 38.5h43.7L93.7 50 72.3 12.3zM33.3 25.3L9.9 47.7l18.6-32.8L33.3 25.3zM70.7 14.8l6.4 35.7L36.9 25.8 70.7 14.8zM35.5 27.3l41 25.2-41 23.3V27.3zM77 54.5l-7.2 30.8-32.6-8.1L77 54.5zM33.5 75L9.9 50.5l23.6-22.7V75zM33.2 77.6l-4.6 7.7L11.5 55.1 33.2 77.6zM35 78.6l31.4 7.9H30.2L35 78.6zM79.3 53.3l11.6-2.5L72.1 84 79.3 53.3zM90.7 48.9l-11.4 2.5-5.9-33.1L90.7 48.9zM35 24.3l-5-10.8h38.2L35 24.3z'
          fill={fill}
          data-fill-palette-color='accent'
        />
      </motion.svg>
    </>
  )
}
