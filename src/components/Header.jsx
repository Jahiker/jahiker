import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { mainMenu } from '../locales/en/app.en'

const mobileMenu = {
  open: {
    scale: 1,
    opacity: 1,
    borderRadius: '10px',
    transformOrigin: 'top right',
    transition: {
      duration: 0.3
    }
  },
  closed: {
    scale: 0,
    opacity: 0,
    borderRadius: '50%',
    transition: {
      duration: 0.3
    }
  }
}

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='flex justify-between items-center gap-5 px-[20px] md:px-[40px] py-[20px] relative'>
      <NavLink to='/'>
        <div className='flex justify-start items-center gap-3'>
          <Logo size='50px' />
          <h2 className='text-[18px] w-[115px] text-left'>JKR</h2>
        </div>
      </NavLink>
      <nav className='hidden md:flex justify-end gap-4'>
        {mainMenu &&
          mainMenu.map((item, index) => (
            <NavLink
              key={`item-menu-${index}`}
              to={item.to}
              className='text-[16px] md:text-[12px] px-2 py-1 hover:text-primary hover:bg-black'
            >
              {item.label}
            </NavLink>
          ))}
      </nav>

      <motion.nav
        initial={false}
        variants={mobileMenu}
        animate={openMenu ? 'open' : 'closed'}
        className={`mobile-menu justify-end gap-4 ${
          openMenu
            ? 'flex flex-col absolute top-[100%] right-10 p-5 md:p-3 rounded-lg shadow-md'
            : 'hidden'
        }`}
      >
        {mainMenu &&
          mainMenu.map((item, index) => (
            <NavLink
              key={`item-menu-${index}`}
              to={item.to}
              className='text-[16px] md:text-[12px] text-white hover:text-primary hover:bg-black'
              onClick={() => setOpenMenu(false)}
            >
              {item.label}
            </NavLink>
          ))}
      </motion.nav>
      <button
        className='inline-block md:hidden cursor-pointer'
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <HiX size='30px' /> : <HiMenu size='30px' />}
      </button>
    </div>
  )
}
