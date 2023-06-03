import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import {
  HiMenu,
  HiX,
  HiOutlineSun,
  HiGlobeAlt,
  HiOutlineMoon
} from 'react-icons/hi'
import { motion } from 'framer-motion'

import { AppContext } from '../context/AppContext'

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
  const { darkTheme, setDarkTheme, lang, setLang, mainMenu } =
    useContext(AppContext)

  return (
    <div className='flex justify-between items-center gap-5 px-[20px] md:px-[40px] py-[20px] relative'>
      <NavLink to='/'>
        <div className='flex justify-start items-center gap-3'>
          {darkTheme
            ? (
              <Logo size='50px' fill='#c4c4c4' />
              )
            : (
              <Logo size='50px' />
              )}
          <h2 className='text-[18px] w-[115px] text-left dark:text-primary'>
            JKR
          </h2>
        </div>
      </NavLink>
      <nav className='hidden md:flex justify-end gap-4'>
        {mainMenu &&
          mainMenu.map((item, index) => (
            <NavLink
              key={`item-menu-${index}`}
              to={item.to}
              className='text-[16px] md:text-[12px] px-2 py-1 hover:text-primary hover:bg-black dark:text-primary dark:hover:text-light'
            >
              {item.label}
            </NavLink>
          ))}
        <button
          className='flex justify-center items-center'
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme
            ? (
              <HiOutlineSun size='20px' className='dark:text-primary' />
              )
            : (
              <HiOutlineMoon size='20px' />
              )}
        </button>
        {lang === 'en'
          ? (
            <button
              className='flex justify-center items-center gap-1'
              onClick={() => setLang('es')}
            >
              <span className='text-xs dark:text-primary'>Es</span>
              <HiGlobeAlt className='dark:text-primary' />
            </button>
            )
          : (
            <button
              className='flex justify-center items-center gap-1'
              onClick={() => setLang('en')}
            >
              <span className='text-xs dark:text-primary'>En</span>
              <HiGlobeAlt className='dark:text-primary' />
            </button>
            )}
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
        <div className='flex justify-between'>
          <button
            className='flex justify-center items-center'
            onClick={() => setDarkTheme(!darkTheme)}
          >
            {darkTheme
              ? (
                <HiOutlineSun size='20px' className='dark:text-light' />
                )
              : (
                <HiOutlineMoon size='20px' />
                )}
          </button>
          {lang === 'en'
            ? (
              <button
                className='flex justify-center items-center gap-1'
                onClick={() => setLang('es')}
              >
                <span className='text-xs dark:text-primary'>Es</span>
                <HiGlobeAlt className='dark:text-light' />
              </button>
              )
            : (
              <button
                className='flex justify-center items-center gap-1'
                onClick={() => setLang('en')}
              >
                <span className='text-xs dark:text-primary'>En</span>
                <HiGlobeAlt className='dark:text-light' />
              </button>
              )}
        </div>
      </motion.nav>
      <button
        className='inline-block md:hidden cursor-pointer'
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu
          ? (
            <HiX size='30px' className='dark:text-light' />
            )
          : (
            <HiMenu size='30px' className='dark:text-light' />
            )}
      </button>
    </div>
  )
}
